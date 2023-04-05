import { buildConfig } from "payload/config"
import path from "path"

import Users from "./collections/Users"
import Pages from "./collections/Pages"
import Media from "./collections/Media"
import Header from "./globals/Header"

export default buildConfig({
  serverURL: "http://localhost:1337",
  admin: {
    user: Users.slug,
  },
  collections: [Pages, Users, Media],
  globals: [Header],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  localization: {
    locales: ["en", "it"],
    defaultLocale: "it",
    fallback: true,
  },
})
