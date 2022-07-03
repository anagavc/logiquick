import nc from "next-connect";
import bcrypt from "bcryptjs";
import { signToken } from "../../../lib/auth";
import { client } from "../../../lib/client";
const handler = nc();
handler.post(async (req, res) => {
  console.log(req.body);
  const user = await client.fetch(`*[_type=="user" && email==$email][0]`, {
    email: req.body.email,
  });
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } else {
    res.status(401).send({ message: "The username or password is invalid" });
  }
});

export default handler;
