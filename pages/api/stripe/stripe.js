import Stripe from "stripe";
import nc from "next-connect";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const handler = nc();
handler.post(async (req, res) => {
  console.log(req.body);
  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Shipment",
              description: `A shipment of ${req.body.itemType} from ${req.body.location} to ${req.body.destination} via ${req.body.freightType}`,
            },
            unit_amount: 1000 * 100,
          },
          quantity: 1,
        },
      ],

      success_url: `${req.headers.origin}/account`,
      cancel_url: `${req.headers.origin}/account`,
    };
    const session = await stripe.checkout.sessions.create(params);
    res.status(200).json(session);
  } catch (error) {
    console.log(error);
    res.status("Payment failed");
  }
});

export default handler;
