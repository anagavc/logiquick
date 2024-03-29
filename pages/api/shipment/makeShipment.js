import nc from "next-connect";
import axios from "axios";
import config from "../../../lib/config";
const handler = nc();
handler.post(async (req, res) => {
  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN;

  const createMutations = [
    {
      create: {
        _type: "shipment",
        receiverName: req.body.data.receiverName,
        userId: req.body.currentUser._id,
        receiverNumber: req.body.data.receiverNumber,
        location: req.body.data.location,
        destination: req.body.data.destination,
        itemType: req.body.data.itemType,
        itemWeight: req.body.data.itemWeight,
        trackingNo:
          req.body.data.location.substring(0, 2).toUpperCase() +
          req.body.data.destination.substring(0, 2).toUpperCase() +
          req.body.data.freightType.substring(0, 2).toUpperCase() +
          ~~(Math.random() * 300),
        freightType: req.body.data.freightType,
      },
    },
  ];
  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v2022-07-02/data/mutate/${dataset}?returnIds=true`,
    { mutations: createMutations },

    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );
  const shipmentId = data.results[0].id;
  const shipment = {
    receiverName: req.body.data.receiverName,
    receiverNumber: req.body.data.receiverNumber,
    location: req.body.data.location,
    destination: req.body.data.destination,
    itemType: req.body.data.itemType,
    itemWeight: req.body.data.itemWeight,
    trackingNo:
      req.body.data.location.substring(0, 2).toUpperCase() +
      req.body.data.destination.substring(0, 2).toUpperCase() +
      req.body.data.freightType.substring(0, 2).toUpperCase() +
      ~~(Math.random() * 10),
    freightType: req.body.data.freightType,
    shipmentId: shipmentId,
    userId: req.body.currentUser._id,
  };
  res.send({ ...shipment });
});

export default handler;
