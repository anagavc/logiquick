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
        _type: "contact",
        email: req.body.data.email,
        location: req.body.data.location,
        destination: req.body.data.destination,
        itemType: req.body.data.itemType,
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
  const contactId = data.results[0].id;
  const contact = {
    email: req.body.data.email,
    location: req.body.data.location,
    destination: req.body.data.destination,
    itemType: req.body.data.itemType,
    freightType: req.body.data.freightType,
    contactId: contactId,
  };
  res.send({ ...contact });
});

export default handler;
