import { DateTime } from "luxon";
export default {
  name: "updatedLocation",
  title: "Updated Location",
  type: "object",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "string",
      initialValue: DateTime.now().toLocaleString(DateTime.DATE_MED),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "To be picked up from customer",
    },
  ],
};
