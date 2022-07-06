export default {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "teamMate",
      title: "Team Mate",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    {
      name: "facebookLink",
      title: "Facebook Link",
      type: "string",
    },
    {
      name: "twitterLink",
      title: "Twitter Link",
      type: "string",
    },
    {
      name: "linkedinLink",
      title: "Linkedin Link",
      type: "string",
    },
    {
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
