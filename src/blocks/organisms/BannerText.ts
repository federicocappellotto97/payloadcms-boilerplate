import type { Block } from "payload/types";
import { Banner } from "../molecules/Banner";

export const BannerText: Block = {
  slug: "bannerText", // required
  imageURL:
    "https://img.freepik.com/free-vector/geometric-sale-banners-with-text-space_1017-11175.jpg?w=2000",
  fields: [
    ...Banner.fields,
    {
      name: "content",
      label: "Content",
      type: "richText",
    },
  ],
};
