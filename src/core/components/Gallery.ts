import Image from "./Image"

import type { Field } from "payload/types"

import deepMerge from "../helpers/deepmerge"

type GalleryField = (overrides?: Partial<Field>, hasMobile?: boolean) => Field

const Gallery: GalleryField = (overrides = {}, hasMobile = true) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "gallery", // required
      label: { it: "Galleria", en: "Gallery" },
      type: "array", // required
      fields: [
        {
          type: "row",
          fields: [Image({}, hasMobile)],
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    overrides
  )

export default Gallery
