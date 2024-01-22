import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

import Stripe from "stripe";
import { stripe } from "@/app/stripe";

export const POST = async (req: NextRequest) => {
  const payload = await req.text();
  const sig = headers().get("Stripe-Signature") as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret)
      return NextResponse.json(
        { message: "Invalid request." },
        { status: 400 },
      );
    event = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
  } catch (err: any) {
    console.log("ERROR: " + err.message);
    return NextResponse.json(
      { message: `Webhook error: ${err.message}` },
      { status: 400 },
    );
  }

  switch (event) {
  }
};
