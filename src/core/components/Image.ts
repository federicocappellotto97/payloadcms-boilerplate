import { Field } from "payload/types";

const Image: Field = {
  name: "image", // required
  label: "Immagine",
  type: "upload", // required
  relationTo: "media", // required
  filterOptions: {
    mimeType: { contains: "image" },
  },
};

export default Image;
