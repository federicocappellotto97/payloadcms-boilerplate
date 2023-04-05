import type { Block } from "payload/types"
import Image from "../../core/components/Image"

export const Hero: Block = {
  slug: "hero", // required,
  imageURL:
    "https://uploads-ssl.webflow.com/5e3de80322b300854230f11f/5f6dc8579e80bfb038a102de_hero-thumb.jpg",
  fields: [
    Image(),
    {
      name: "content",
      label: "Contenuto",
      type: "richText",
      localized: true,
    },
  ],
}
