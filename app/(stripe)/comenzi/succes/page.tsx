"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Confetti from "react-confetti";

const OrderSuccessfulPage = () => {
  const props = useSearchParams();
  const email = props.get("email");
  const orderId = props.get("orderId");
  return (
    <div className="grid items-center h-screen text-center">
      <div>
        <Confetti numberOfPieces={500} recycle={false} />
        <CheckCircle2 className="text-green-400 w-36 h-36 my-4 mx-auto" />
        <span className="uppercase text-muted-foreground">
          Va multumim pentru comanda
        </span>
        <h1 className="text-3xl font-bold">
          Comanda #{orderId} a fost inregistrata cu succes.
        </h1>
        <h2 className="text-sm">
          Un email de confirmare va ajunge in curand la adresa <b>{email}</b> in
          curand.
        </h2>
        <Button className="my-4" variant="success" size={"lg"}>
          Inapoi acasa
        </Button>
      </div>
    </div>
  );
};

export default OrderSuccessfulPage;
