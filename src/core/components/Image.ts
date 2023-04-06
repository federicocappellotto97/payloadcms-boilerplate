import type { Field } from "payload/types"

import deepMerge from "../helpers/deepMerge"

type ImageField = (overrides?: Partial<Field>, hasMobile?: boolean) => Field

const Image: ImageField = (overrides = {}, hasMobile = true) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "image",
      label: { it: "Immagine", en: "Image" },
      type: "group", // required
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "desktop",
              label: hasMobile ? "Desktop" : { it: "Immagine", en: "Image" },
              type: "upload",
              relationTo: "media", // required
              required: true,
              filterOptions: {
                mimeType: { contains: "image" },
              },
              admin: {
                width: "50%",
              },
            },
            {
              name: "mobile",
              type: "upload",
              relationTo: "media", // required
              filterOptions: {
                mimeType: { contains: "image" },
              },
              admin: {
                width: "50%",
              },
              hidden: !hasMobile,
            },
          ],
        },
      ],
    },
    overrides
  )

export default Image
