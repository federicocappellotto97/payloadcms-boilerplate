import type { Field } from "payload/types"
import deepMerge from "../../helpers/deepMerge"
import Item from "./Item"

type MenuField = (overrides?: Partial<Field>) => Field

const Menu: MenuField = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "menu", // required
      label: { it: "Menu", en: "Menu" },
      type: "array",
      fields: [Item()],
      labels: {
        singular: { it: "Elemento", en: "Item" },
        plural: { it: "Elementi", en: "Items" },
      },
      admin: {
        components: {
          RowLabel: ({ data, path, index }) => {
            return data?.menuItem?.cta?.label || String(index).padStart(2, "0")
          },
        },
      },
    },
    overrides
  )

export default Menu
