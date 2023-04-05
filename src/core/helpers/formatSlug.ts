import type { FieldHook } from "payload/types"
var slugify = require("slugify")

const formatSlug =
  (fallback: string): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    if (typeof value === "string") {
      return slugify(value)
    }

    if (operation === "create") {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]

      if (fallbackData && typeof fallbackData === "string") {
        return slugify(fallbackData)
      }
    }

    return value
  }

export default formatSlug
