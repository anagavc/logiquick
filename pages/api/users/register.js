import nc from "next-connect";
import bcrypt from "bcryptjs";
import axios from "axios";
import config from "../../../lib/config";
import { signToken } from "../../../lib/auth";
import { client } from "../../../lib/client";
const handler = nc();
handler.post(async (req, res) => {
  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN;
  const createMutations = [
    {
      create: {
        _type: "user",
        email: req.body.email,
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password),
      },
    },
  ];

  const existingUser = await client.fetch(
    `*[_type=="user"&&email==$email][0]`,
    {
      email: req.body.email,
    }
  );
  if (existingUser) {
    return res.status(401).send({ message: "The user already exists" });
  }

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

  const userId = data.results[0].id;

  const user = {
    _id: userId,
    name: req.body.name,
    email: req.body.email,
  };
  const token = signToken(user);
  res.send({ ...user, token });
});
export default handler;
