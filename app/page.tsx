import Divider from "@/components/Divider";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Home() {
  const hosues = [
    {
      imageUrl: "/homepage1.png",
      imageAlt: "Image of Marchesi de' Cordano",
      name: `Marchesi de' Cordano`,
      location: "Abruzzo, Italia",
      reversed: false,
      description:
        "Crama Marchesi de' Cordano este conceput ă ca un loc de întâlnire și împărtășire, păstrând credința în filozofia pe care Francesco D'Onofrio vrea să o transmită prin produsele sale. Arhitectura pivniței prezintă o structură inovatoare, realizată în întregime din lemn, caldă și primitoare, care găzduiește degustări și întâlniri și de la care pornește un bogat itinerar de vizită.",
    },
    {
      imageUrl: "/homepage2.png",
      imageAlt: "Image of Casa Di Terra",
      name: "Casa Di Terra",
      location: "Toscana, Italia",
      reversed: true,
      description:
        "Casa di Terra a fost înființată în 1950 de către bunicul proprietarului actual, Giuliano și Gessica, frate și soră, în Bolgheri, în inima Toscanei. Aceste terenuri, odată dedicate culturilor tradiționale (cereale, horticultură, ulei de măsline, vin) au lăsat an de an mai mult spațiu podgoriilor până la decizia finală din 2001 de a pune energia moșiei în marcarea vinului.",
    },
  ];
  return (
    <main className="md:max-w-3xl mx-8 md:mx-auto">
      <section className="mx-auto">
        <Image
          src={"/homepage.png"}
          width={1000}
          height={1000}
          alt="Sortimente de vin intr-o camara"
          className="px-8 md:max-w-[800px] md:mx-auto"
        />
      </section>
      <Divider />
      <section>
        <div className="relative mx-8 mt-8 md:max-w-[600px] md:mx-auto">
          <Image
            src={"/quotesStart.svg"}
            alt="quotes"
            width={100}
            height={100}
            className="absolute w-8 -left-5 -top-10 md:-left-12 md:-top-2"
          />
          <blockquote className="font-semibold">
            Este bine să ne amintim că există cinci motive pentru a bea vin:
            sosirea unui prieten, setea actuală sau viitoare, excelența vinului,
            sau din orice alt motiv
          </blockquote>
          <Image
            src={"/quotesEnd.svg"}
            alt="quotes"
            width={100}
            height={100}
            className="absolute w-8 right-0 -bottom-8 md:-bottom-3 md:-right-6"
          />
        </div>
        <div className="mt-16 md:max-w-[700px]">
          <h1 className="text-[1.25rem] font-semibold mb-4 md:text-2xl">
            Bine ați venit la TheWineShop
          </h1>
          <p className="text-[.75rem]">
            Produsele noastre rafinate sunt un adevărat privilegiu pentru
            pasionații de vin, fiind o poartă către lumea vinurilor cu adevărat
            excelente. Fie că sunteți somelier experimentat sau începător
            entuziast, vă invităm să descoperiți emoția pură a gustului în
            fiecare sticlă Thewineshop! Din regiuni pitorești ale Italiei,
            cramele precum "Marchesi de' Cordano”, "Casa Di Terra" și "Podere
            Don Cataldo” aduc la viață tradiția și pasiunea în fiecare strop de
            licor vinicol.
          </p>
        </div>
        <div className="my-8 flex flex-col ">
          {hosues.map((h) => (
            <div
              className={`px-8 text-center my-4 flex flex-col ${
                h.reversed ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 w-full items-center md:mx-auto`}
            >
              <div className="w-64 mx-auto lg:m-0">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={h.imageUrl}
                    alt={h.imageAlt}
                    fill
                    className="mb-4 object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="max-w-md">
                <h3 className="font-semibold text-[1.25rem] mt-4">{h.name}</h3>
                <p className="italic my-2">{h.location}</p>
                <p className="text-[0.75rem]">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:max-w-3xl">
          <h2 className="text-xl font-semibold my-2">
            Descoperiți povestea fiecărui pahar de vin
          </h2>
          <p className="text-[0.75rem]">
            Fiecare etichetă spune o poveste unică, iar înțelegerea acestei
            povestiri este cheia spre adevăratul privilegiu al cunoașterii
            vinurilor. Pentru cei ce încep această călătorie, Thewineshop devine
            ghidul lor în lumea vinurilor de excepție, deschizând uși către
            rafinament și descoperire. În sticlele noastre, veți găsi nu doar
            vin, ci povestea și pasiunea ce transformă fiecare degustare într-o
            experiență memorabilă.
          </p>
        </div>
      </section>
      <hr className="m-4 md:mx-12" />
    </main>
  );
}
