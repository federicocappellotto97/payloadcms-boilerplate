import { GlobalConfig } from "payload/types"
import Image from "../core/components/Image"
import Menu from "../core/components/Menu/Menu"

const Header: GlobalConfig = {
  slug: "header",
  fields: [
    Image(
      {
        name: "logo",
        label: "Logo",
        required: true,
      },
      false
    ),
    Menu({
      name: "mainMenu",
      label: { it: "Menu principale", en: "Main menu" },
    }),
  ],
}

export default Header
