import { CollectionConfig } from "payload/types"

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
  labels: {
    singular: {
      it: "Utente",
      en: "User",
    },
    plural: {
      it: "Utenti",
      en: "Users",
    },
  },
}

export default Users
