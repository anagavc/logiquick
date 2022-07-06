export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },

    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "destination",
      title: "Destination",
      type: "string",
    },
    {
      name: "itemType",
      title: "ItemType",
      type: "string",
    },

    {
      name: "freightType",
      title: "FreightType",
      type: "string",
    },
    {
      //slug enables us give a unique identifier to our schema
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxlength: 90,
      },
    },
  ],
};
