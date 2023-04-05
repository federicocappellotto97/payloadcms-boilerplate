import { Field } from "payload/types"
import Image from "./Image"

const Gallery: Field = {
  name: "gallery", // required
  label: { it: "Galleria", en: "Gallery" },
  type: "array", // required
  fields: [
    {
      type: "row",
      fields: [Image],
    },
  ],
  admin: {
    initCollapsed: true,
  },
}

export default Gallery
