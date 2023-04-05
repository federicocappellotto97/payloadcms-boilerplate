import { CollectionConfig } from "payload/types"
import { Banner } from "../blocks/molecules/Banner"
import { Slider } from "../blocks/molecules/Slider"
import { BannerText } from "../blocks/organisms/BannerText"
import { Hero } from "../blocks/molecules/Hero"
import slugField from "../core/components/Slug"

const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "title",
      label: "Titolo",
      type: "text",
      localized: true,
      admin: {
        width: "50%",
      },
    },
    slugField(),
    {
      name: "thumb", // required
      type: "upload", // required
      relationTo: "media", // required
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "blocks",
      labels: {
        singular: {
          it: "Blocco",
          en: "Block",
        },
        plural: {
          it: "Blocchi",
          en: "Blocks",
        },
      },
      type: "blocks",
      blocks: [Hero, Banner, BannerText, Slider],
      localized: true,
    },
  ],
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "blocks"],
  },
  labels: {
    singular: {
      it: "Pagina",
      en: "Page",
    },
    plural: {
      it: "Pagine",
      en: "Pages",
    },
  },
}

export default Pages
