import { isUrl } from "../helpers/validate";
import { Field } from "payload/types";

const Cta: Field = {
  name: "cta", // required
  label: "CTA",
  type: "group",
  fields: [
    // required
    {
      name: "label",
      label: "Label",
      type: "text",
    },
    {
      name: "url",
      type: "text",
      validate: (val) => isUrl(val),
      required: true,
    },
    {
      name: "target", // required
      label: "Apri in una nuova scheda",
      type: "checkbox", // required
      defaultValue: false,
    },
  ],
};

export default Cta;
