// filepath: c:\Users\beltr\Documents\byui\capstone\capstone\lib\stripe.ts
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-02-24.acacia", // Use the required Stripe API version
});

export default stripe;