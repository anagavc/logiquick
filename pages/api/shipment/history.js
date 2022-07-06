import nc from "next-connect";
import { verifyUser } from "../../../lib/auth";
import { client } from "../../../lib/client";
const handler = nc();
handler.use(verifyUser);
handler.get(async (req, res) => {
  const shipments = await client.fetch(
    `*[_type=="shipment" && userId == $userId]`,
    {
      userId: req.user._id,
    }
  );
  res.send(shipments);
});
export default handler;
