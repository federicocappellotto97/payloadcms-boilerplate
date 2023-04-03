import { GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
  slug: "header",
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media", // required
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "mainMenu",
      type: "array",
      label: "Menu principale",
      localized: true,
      labels: {
        singular: "Link",
        plural: "Link",
      },
      fields: [
        // required
        {
          name: "text",
          type: "text",
          label: "Testo",
          required: true,
        },
        {
          name: "url",
          type: "text",
          label: "URL",
          required: true,
          validate: (val) => {
            var expression =
              /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
            if (expression.test(val)) {
              return true;
            }

            return "URL non valido";
          },
        },
      ],
      admin: {
        initCollapsed: false,
        components: {
          RowLabel: ({ data, index }) => {
            return data?.text || `Link ${String(index).padStart(2, "0")}`;
          },
        },
      },
    },
  ],
};

export default Header;
