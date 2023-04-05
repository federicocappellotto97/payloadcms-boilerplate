import type { Block } from "payload/types"
import Cta from "../../core/components/Cta"
import Gallery from "../../core/components/Gallery"
export const Slider: Block = {
  slug: "slider", // required
  imageURL:
    "https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/28754/vue3-carousel.jpg",
  fields: [
    // required
    {
      name: "title",
      label: "Titolo",
      type: "text",
      required: true,
      localized: true,
    },
    Gallery,
    Cta,
  ],
}
