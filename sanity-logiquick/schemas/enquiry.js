export default {
  name: "enquiry",
  title: "Enquiry",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email Address",
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
