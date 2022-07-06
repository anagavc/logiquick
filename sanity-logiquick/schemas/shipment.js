export default {
  name: "shipment",
  title: "Shipment",
  type: "document",
  fields: [
    {
      name: "shipmentId",
      title: "Shipment ID",
      type: "string",
    },
    {
      name: "userId",
      title: "User ID",
      type: "string",
    },
    {
      name: "receiverName",
      title: "Receiver's Name",
      type: "string",
    },
    {
      name: "receiverNumber",
      title: "Receiver's Number",
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
      name: "itemWeight",
      title: "ItemWeight",
      type: "string",
    },
    {
      name: "freightType",
      title: "FreightType",
      type: "string",
    },
    {
      name: "trackingNo",
      title: "TrackingNo",
      type: "string",
    },
    {
      name: "locationUpdate",
      title: "updateLocation",
      type: "array",
      of: [{ type: "updatedLocation" }],
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
