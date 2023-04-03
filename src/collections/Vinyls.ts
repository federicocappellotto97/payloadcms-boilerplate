import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Vinyls: CollectionConfig = {
  slug: "vinyls",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Titolo",
      type: "text",
    },
  ],
};

export default Vinyls;
