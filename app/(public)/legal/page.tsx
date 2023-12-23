import { P } from "@upstash/redis/zmscore-fa7fc9c8";
import { FileLock2, FileText, List, PenLine, ShieldAlert, ShieldCheck, UserCog } from "lucide-react";
import React from "react";

type Props = {};

const PoliticsPage = (props: Props) => {
  const sections = [
    {
      icon: <FileText className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8" />,
      question: "Ce informații colectăm?",
      desc: `Colectăm informații personale de la dumneavoastră atunci când creați un cont, plasați o comandă,
            utilizați site-ul nostru web sau comunicați cu noi. Informațiile personale pe care le colectăm pot include:`,
      info: [
        `Informații de contact, cum ar fi numele, adresa de e-mail, numărul de telefon și adresa de livrare.`,
        `Informații de plată, cum ar fi numărul cardului de credit sau debit și data expirării.`,
        `Informații despre comenzile dumneavoastră, cum ar fi produsele pe care le-ați comandat, data și ora
            comenzii și adresa de livrare.`,
        `Informații despre utilizarea site-ului nostru web, cum ar fi paginile pe care le-ați vizitat, produsele pe
            care le-ați vizualizat și acțiunile pe care le-ați efectuat.`,
        `Colectăm aceste informații pentru a ne putea îndeplini obligațiile contractuale față de dumneavoastră,
            pentru a vă oferi produsele și serviciile pe care le doriți, pentru a ne îmbunătăți produsele și serviciile și
            pentru a vă oferi o experiență personalizată.`,
      ],
    },
    {
      icon: <UserCog className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8" />,
      question: `Cum folosim informațiile dumneavoastră personale?`,
      desc: `Folosim informațiile dumneavoastră personale pentru următoarele scopuri:`,
      info: [
        `Pentru a procesa comenzile dumneavoastră. Avem nevoie de informațiile dumneavoastră de contact și
        de plată pentru a procesa comenzile dumneavoastră și pentru a vă livra produsele.`,
        `Pentru a vă oferi o experiență personalizată. Utilizăm informațiile despre comenzile dumneavoastră și
        despre utilizarea site-ului nostru web pentru a vă oferi o experiență personalizată, care să vă ajute să
        găsiți produsele care vă interesează.`,
        `Pentru a vă trimite comunicări de marketing. Vă putem trimite comunicări de marketing prin e-mail sau
        SMS, despre produsele și serviciile noastre. Dacă vă abonați la buletinul nostru informativ, vom folosi
        informațiile dumneavoastră de contact pentru a vă trimite buletinul informativ. Vă puteți dezabona în
        orice moment făcând clic pe linkul de dezabonare din orice e-mail pe care îl primiți de la noi.`,
      ],
    },
    {
      icon: <ShieldAlert />,
      question: `Cui divulgăm informațiile dumneavoastră personale?`,
      desc: `Nu divulgăm informațiile dumneavoastră personale unor terți, cu excepția cazului în care:`,
      info: [
        `Aveți permisiunea dumneavoastră explicită.`,
        `Este necesar pentru a procesa o comandă sau pentru a vă oferi o anumită facilitate sau serviciu. De
        exemplu, dacă ne solicitați să vă livrăm produsele la o adresă de livrare, vom divulga informațiile
        dumneavoastră de contact și de livrare companiei de transport.`,
        `Este necesar să respectăm o obligație legală sau o hotărâre judecătorească.`,
      ],
    },
    {
      icon: <FileLock2 />,
      question: `Cum vă protejăm informațiile personale?`,
      desc: `Luăm măsuri de securitate adecvate pentru a proteja informațiile dumneavoastră personale împotriva
        accesului, utilizării, divulgării, modificării sau distrugerii neautorizate. Aceste măsuri includ:`,
      info: [
        `Accesul la informațiile dumneavoastră personale este limitat la angajații autorizați care au nevoie de
        aceste informații pentru a vă oferi servicii.`,
        `Informațiile dumneavoastră personale sunt stocate pe servere securizate.`,
        `Utilizăm tehnologii de securitate, cum ar fi criptarea, pentru a proteja informațiile dumneavoastră
        personale atunci când sunt transmise pe internet.`,
      ],
    },
    {
        icon: <List />,
        question: `Cum vă puteți exercita drepturile dumneavoastră?`,
        desc: `Aveți următoarele drepturi cu privire la informațiile dumneavoastră personale:`,
        info: [`Dreptul de acces: Ați putea solicita o copie a informațiilor dumneavoastră personale pe care le deținem.`, `Dreptul la rectificare: Ați putea solicita ca informațiile dumneavoastră personale să fie corectate dacă
        sunt inexacte sau incomplete.`, `Dreptul la ștergere: Ați putea solicita ca informațiile dumneavoastră personale să fie șterse, dacă nu mai
        sunt necesare pentru scopurile pentru care au fost colectate.`, `Dreptul la restricționarea prelucrării: Ați putea solicita ca prelucrarea informațiilor dumneavoastră
        personale să fie restricționată, dacă contestați exactitatea acestora sau dacă credeți că prelucrarea este
        ilegală.`, `Dreptul la portabilitatea datelor: Ați putea solicita ca informațiile dumneavoastră personale să vă fie
        furnizate într-un format structurat, utilizat în mod obișnuit și care poate fi citit automat.`, `Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați la adresa de e-mail
        office@thewineshop.ro`]
    },
    {
        icon: <PenLine />,
        question: `Modificări ale politicii de confidențialitate`,
        desc: `The Wine Shop își rezervă dreptul de a modifica această politică de confidențialitate din când în când.
        Orice modificări vor fi postate pe această pagină.`,
        info: null,
    }
  ];
  return (
    <div className="max-w-[1200px]">
      <div className="flex flex-col items-center gap-2 my-10">
        <h1 className="text-[1.35rem] sm:text-2xl font-bold md:text-4xl">
          Politica de Confidențialitate
        </h1>
        <h2 className="text-[1.35rem] sm:text-2xl font-bold md:text-3xl">TheWineShop</h2>
        <ShieldCheck className="mx-auto w-12 h-12 md:w-16 md:h-16" />
      </div>
      <p className="text-center font-semibold md:text-[1.3rem]">
        The Wine Shop se angajează să protejeze confidențialitatea clienților
        săi. Considerăm că confidențialitatea este un drept fundamental și ne
        luăm foarte în serios responsabilitatea de a proteja informațiile
        dumneavoastră personale.
      </p>
      <div className="mt-10">
        {sections.map((s, index) => (
          <div key={index} className="flex flex-col gap-8 my-12">
            <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-2">
              <h3 className="text-center font-bold text-2xl md:text-3xl">
                {s.question}
              </h3>
              {s.icon}
            </div>
            <p className="font-semibold md:text-[1.3rem]">{s.desc}</p>
            {s.info?.map((i, index) => (
              <li key={index} className="italic md:text-[1.15rem] list-inside">
                {i}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoliticsPage;
