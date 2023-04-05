import type { Block, Field } from "payload/types"
import Cta from "../../core/components/Cta"
import Image from "../../core/components/Image"

export const Banner: Block = {
  slug: "banner", // required
  imageURL:
    "https://img.freepik.com/free-vector/web-banners-template-set-with-text-space_1017-30732.jpg",
  fields: [
    // required
    {
      name: "title",
      label: "Titolo",
      type: "text",
      required: true,
      localized: true,
    },
    Image(),
    Cta(),
  ],
}
