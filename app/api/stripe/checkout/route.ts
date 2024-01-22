import { stripe } from "@/app/stripe";

import { NextResponse, type NextRequest } from "next/server";
import { validateCartItems } from "use-shopping-cart/utilities";
import { prisma } from "@/prisma/client";
import { type Product } from "use-shopping-cart/core";
import { type CartDetails } from "use-shopping-cart/core";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as CartDetails;
  const products = await prisma.wine.findMany();
  const productsCasted: Product[] = products.map((wine) => {
    return {
      name: wine.name,
      id: wine.id.toString(),
      price: wine.price * 100,
      image: wine.image,
      currency: "RON",
    };
  });

  const validatedCart = validateCartItems(productsCasted, body);

  const session = await stripe.checkout.sessions.create({
    success_url: "https://thewineshop.ro/comenzi/comanda-reusita",
    billing_address_collection: "required",
    locale: "ro",
    phone_number_collection: {
      enabled: true,
    },
    line_items: validatedCart,
    mode: "payment",
  });

  return NextResponse.json(session.url);
};
