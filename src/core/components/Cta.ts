import type { Field } from "payload/types"
import { isUrl } from "../helpers/validate"
import deepMerge from "../helpers/deepmerge"

type CtaField = (overrides?: Partial<Field>) => Field

const Cta: CtaField = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "cta", // required
      label: "CTA",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "label",
              label: "Label",
              type: "text",
              admin: {
                width: "50%",
              },
              localized: true,
            },
            {
              name: "url",
              type: "text",
              validate: (val) => isUrl(val),
              required: true,
              admin: {
                width: "50%",
              },
              localized: true,
            },
            {
              name: "target", // required
              label: {
                it: "Apri in una nuova scheda",
                en: "Open in a new tab",
              },
              type: "checkbox", // required
              defaultValue: false,
            },
          ],
        },
      ],
    },
    overrides
  )

export default Cta
