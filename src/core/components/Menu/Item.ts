import type { Field } from "payload/types"
import deepMerge from "../../helpers/deepMerge"
import Cta from "../Cta"

type ItemField = (overrides?: Partial<Field>) => Field

const Item: ItemField = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "menuItem", // required
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            Cta(),
            {
              name: "children", // required
              type: "array",
              label: { it: "Secondo livello", en: "Second level" },
              labels: {
                singular: { it: "Elemento", en: "Item" },
                plural: { it: "Elementi", en: "Items" },
              },
              fields: [Cta()],
              admin: {
                width: "100%",
                components: {
                  RowLabel: ({ data, path, index }) => {
                    console.log(data)
                    return data?.cta?.label || String(index).padStart(2, "0")
                  },
                },
              },
            },
          ],
        },
      ],
    },
    overrides
  )

export default Item
