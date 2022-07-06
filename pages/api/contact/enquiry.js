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
        _type: "enquiry",
        email: req.body.email,
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
  const enquiryId = data.results[0].id;
  const enquiry = {
    email: req.body.email,
    enquiryId: enquiryId,
  };
  res.send({ ...enquiry });
});

export default handler;
