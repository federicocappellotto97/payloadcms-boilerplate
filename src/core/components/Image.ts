import { Field } from "payload/types"

const Image: Field = {
  name: "image", // required
  label: { it: "Immagine", en: "Image" },
  type: "group", // required
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "desktop",
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
        },
      ],
    },
  ],
}

export default Image
