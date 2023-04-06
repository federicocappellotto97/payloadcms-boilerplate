import type { Field } from "payload/types"

import deepMerge from "../helpers/deepMerge"
import formatSlug from "../helpers/formatSlug"

type SlugField = (fieldToUse?: string, overrides?: Partial<Field>) => Field

const Slug: SlugField = (fieldToUse = "title", overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "slug",
      label: "Slug",
      type: "text",
      index: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
    },
    overrides
  )

export default Slug
