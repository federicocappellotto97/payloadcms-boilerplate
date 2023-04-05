import { isUrl } from "../helpers/validate"
import { Field } from "payload/types"

const Cta: Field = {
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
          label: { it: "Apri in una nuova scheda" },
          type: "checkbox", // required
          defaultValue: false,
        },
      ],
    },
  ],
}

export default Cta
