import Stripe from "stripe";
import nc from "next-connect";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const handler = nc();
handler.post(async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.body.session_id
    );
    const customer = await stripe.customers.retrieve(session.customer);

    res.status(200).json(customer);
  } catch (error) {
    console.log(error);
    res.status("Retrieving customer failed");
  }
});

export default handler;
