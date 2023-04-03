import { CollectionConfig } from "payload/types";
import { BannerText } from "../blocks/organisms/BannerText";
import { Banner } from "../blocks/molecules/Banner";
import { Hero } from "../blocks/organisms/Hero";

const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "title",
      label: "Titolo",
      type: "text",
      localized: true,
    },
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
          it: "Blocck",
          en: "Block",
        },
        plural: {
          it: "Blocchi",
          en: "Blocks",
        },
      },
      type: "blocks",
      blocks: [Hero, Banner, BannerText],
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
};

export default Pages;
