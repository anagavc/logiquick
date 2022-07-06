import nc from "next-connect";
import { client } from "../../../lib/client";
const handler = nc();

handler.post(async (req, res) => {
  const shipments = await client.fetch(
    `*[_type=="shipment" && trackingNo== $trackingNo]`,
    {
      trackingNo: req.body.trackingNo,
    }
  );
  res.send(shipments);
});
export default handler;
