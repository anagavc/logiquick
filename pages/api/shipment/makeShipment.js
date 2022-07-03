import nc from "next-connect";
import axios from "axios";
import config from "../../../lib/config";
const handler = nc();
handler.post(async (req, res) => {
  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN;
  console.log(req.body);
  const createMutations = [
    {
      create: {
        _type: "shipment",
        email: req.body.email,
        location: req.body.location,
        destination: req.body.destination,
        itemType: req.body.itemType,
        itemWeight: req.body.itemWeight,
        freightType: req.body.freightType,
        trackingNo:
          req.body.location.substring(0, 2).toUpperCase() +
          req.body.destination.substring(0, 2).toUpperCase() +
          req.body.freightType.substring(0, 2).toUpperCase() +
          ~~(Math.random() * 10),
        locationUpdate: [req.body.location],
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
  const shipmentId = data.results[0].projectId;
  const shipment = {
    _id: shipmentId,
    trackingNo:
      req.body.location.substring(0, 2).toUpperCase() +
      req.body.destination.substring(0, 2).toUpperCase() +
      req.body.freightType.substring(0, 2).toUpperCase() +
      ~~(Math.random() * 10),
  };
  res.send({ ...shipment });
});

export default handler;
