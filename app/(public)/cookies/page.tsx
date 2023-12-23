import {
  Ban,
  Cookie,
  Download,
  HelpCircle,
  Info,
  LineChart,
  UserCog,
  Waypoints,
} from "lucide-react";
import React from "react";

type Props = {};

const PoliticsPage = (props: Props) => {
  const sections = [
    {
      icon: <HelpCircle className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8" />,
      question: "Ce sunt cookie-urile?",
      info: [
        `La fel ca în practica obișnuită a aproape tuturor site-urilor profesionale, acest site utilizează
        cookie-uri, care sunt fișiere mici descărcate pe computerul dumneavoastră pentru a îmbunătăți
        experiența de utilizare. Această pagină descrie informațiile pe care le colectăm, modul în care le
        utilizăm și de ce uneori trebuie să stocăm aceste cookie-uri. Vom explica, de asemenea, cum
        puteți preveni stocarea acestor cookieuri, însă aceasta poate afecta anumite elemente ale
        funcționalității site-ului.`,
        `Pentru informații mai generale despre cookie-uri, consultați articolul Wikipedia despre Cookie-
        urile HTTP.`,
      ],
    },
    {
      icon: <Download className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8" />,
      question: "Cum utilizăm cookie-urile?",
      info: [
        `Folosim cookie-uri din diverse motive, detaliate mai jos. Din păcate, în majoritatea cazurilor nu
          există opțiuni standard în industrie pentru dezactivarea cookie-urilor fără a dezactiva complet
          funcționalitatea și caracteristicile pe care le adaugă acest site. Este recomandat să lăsați toate
          cookie-urile activate dacă nu sunteți sigur dacă aveți nevoie de ele sau nu, în cazul în care
          acestea sunt folosite pentru a furniza un serviciu pe care îl utilizați.`,
      ],
    },
    {
      icon: <Ban className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8" />,
      question: "Dezactivarea cookie-urilor",
      info: [
        `Puteți preveni setarea cookie-urilor ajustând setările browserului dumneavoastră (consultați
            Ajutorul browserului folosit pentru a face acest lucru). Rețineți că dezactivarea cookie-urilor va
            afecta funcționalitatea acestui site și a multor alte siteuri pe care le vizitați. Dezactivarea cookie-
            urilor va duce, de obicei, la dezactivarea anumitor funcționalități și caracteristici ale acestui site.
            Prin urmare, se recomandă să nu dezactivați cookie-urile.`,
      ],
    },
    {
      icon: <UserCog className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8" />,
      question: "Cookie-urile pe care le folosim",
      info: [
        `Cookie-uri legate de cont: Dacă creați un cont, vom utiliza cookie-uri pentru gestionarea
          procesului de înregistrare și administrare generală. Aceste cookie-uri sunt, de obicei, șterse când
          vă deconectați, însă în unele cazuri ar putea rămâne pentru a vă aminti preferințele site-ului
          când sunteți deconectat.`,
        `Cookie-uri legate de autentificare: Utilizăm cookie-uri atunci când sunteți autentificat, astfel
          încât să putem reține acest fapt. Acest lucru vă împiedică să vă autentificați de fiecare dată când
          vizitați o pagină nouă. Aceste cookie-uri sunt de obicei eliminate sau șterse când vă deconectați
          pentru a vă asigura că puteți accesa doar funcționalitățile și zonele restricționate atunci când
          sunteți autentificat.`,
        `Cookie-uri legate de newslettere sau abonamente prin e-mail: Acest site oferă servicii de
          newsletter sau abonament prin e-mail, iar cookie-uri pot fi folosite pentru a reține dacă sunteți
          deja înregistrat și dacă să afișăm anumite notificări valabile doar pentru utilizatorii
          înregistrați/neînregistrați.`,
        `Cookie-uri legate de sondaje: Din când în când, oferim sondaje și chestionare pentru a vă
          oferi informații interesante, instrumente utile sau pentru a înțelege mai precis baza noastră de
          utilizatori. Aceste sondaje pot utiliza cookie-uri pentru a vă reține dacă ați participat deja la un
          sondaj sau pentru a vă oferi rezultate precise după ce schimbați paginile.`,
        `Cookie-uri legate de formulare: Atunci când trimiteți date printr-un formular, cum ar fi cele
          găsite pe paginile de contact sau formularele de comentarii, cookie-uri pot fi setate pentru a vă
          reține detaliile de utilizator pentru corespondențe viitoare.`,
        `Cookie-uri legate de preferințele site-ului: Pentru a vă oferi o experiență excelentă pe acest
          site, oferim funcționalitatea de a seta preferințele pentru modul în care rulează acest site atunci
          când îl utilizați. Pentru a vă aminti preferințele, avem nevoie să setăm cookie-uri, astfel încât
          aceste informații să poată fi apelate ori de câte ori interacționați cu o pagină afectată de
          preferințele dumneavoastră.`,
      ],
    },
    {
      icon: <Waypoints className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8" />,
      question: "Cookie-uri terțe",
      info: [
        `În unele cazuri speciale, folosim și cookie-uri furnizate de terțe părți de încredere. Secțiunea
          următoare detaliază ce cookie-uri terțe s-ar putea întâlni prin intermediul acestui site.`,
        `- Google Analytics: Acest site utilizează Google Analytics, una dintre cele mai răspândite și de
          încredere soluții de analiză de pe web, pentru a ne ajuta să înțelegem modul în care utilizați
          site-ul și modalitățile în care putem îmbunătăți experiența dumneavoastră. Aceste cookie-uri
          pot urmări Informații precum timpul petrecut pe site și paginile vizitate, astfel încât să putem
          continua să producem conținut captivant.`,
        `Pentru mai multe informații despre cookie-urile Google Analytics, consultați pagina oficială
          Google Analytics.`,
      ],
    },
    {
      icon: <LineChart className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8" />,
      question: "Analize terțe",
      info: [
        `Analizele terțe sunt folosite pentru a urmări și măsura utilizarea acestui site, astfel
          încât să putem continua să producem conținut captivant. Aceste cookie-uri pot urmări
          informații precum timpul petrecut pe site sau paginile vizitate, ceea ce ne ajută să înțelegem
          cum putem îmbunătăți site-ul pentru dumneavoastră.`,
        `- Cookie-uri pentru teste: Din când în când, testăm caracteristici noi și facem modificări subtile la modul
          în care site-ul este livrat. Atunci când încă testăm caracteristici noi, aceste cookie-uri pot fi folosite
          pentru a vă asigura că primiți o experiență consecventă pe site, garantând în același timp că înțelegem
          care sunt optimizările apreciate cel mai mult de către utilizatori.`,
        `- Cookie-uri pentru publicitate comportamentală: Folosim reclame pentru a compensa costurile de
          funcționare ale acestui site și pentru a finanța dezvoltări ulterioare. Cookie-urile pentru publicitate
          comportamentală folosite de acest site sunt concepute pentru a vă furniza cele mai relevante reclame
          posibile prin urmărirea anonimă a intereselor dumneavoastră și prezentând lucruri similare care ar putea
          să vă intereseze.`,
        `- Cookie-uri de urmărire a afiliaților: Mai mulți parteneri fac publicitate în numele nostru, iar cookie-urile
          de urmărire a afiliaților ne permit pur și simplu să vedem dacă clienții noștri au ajuns pe site prin
          intermediul unuia dintre site-urile partenerilor noștri, astfel încât să-i putem credita în mod
          corespunzător și, dacă este cazul, să le permitem partenerilor noștri de afiliere să ofere orice bonus pe
          care l-ar putea oferi pentru o achiziție.`,
        `- Butoane și/sau plugin-uri pentru rețelele de socializare: Utilizăm butoane și/sau plugin-uri pentru
          rețelele de socializare pe acest site, care vă permit să vă conectați cu rețeaua dumneavoastră socială în
          diverse moduri. Pentru ca acestea să funcționeze, rețele de socializare vor seta cookie-uri prin
          intermediul site-ului nostru, care pot fi folosite pentru a îmbunătăți profilul dumneavoastră pe site-ul lor
          sau pentru a contribui la datele pe care le dețin în diverse scopuri, așa cum este evidentiat în politicile lor
          de confidențialitate respective.`,
      ],
    },
    {
      icon: <Info className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8" />,
      question: "Mai multe informații",
      info: [
        `Sperăm că aceste explicații v-au fost de ajutor, și așa cum s-a menționat anterior, dacă există ceva de care
          nu sunteți sigur dacă aveți nevoie sau nu, este de obicei mai sigur să lăsați cookie-urile activate în cazul
          în care interacționează cu una dintre funcționalitățile pe care le utilizați pe site-ul nostru.`,
      ],
    },
  ];
  return (
    <div className="max-w-[1200px]">
      <div className="flex flex-col items-center gap-2 my-10">
        <h1 className="text-[1.35rem] sm:text-2xl font-bold md:text-4xl">
          Politica de Cookies
        </h1>
        <h2 className="text-[1.35rem] sm:text-2xl font-bold md:text-3xl">
          TheWineShop
        </h2>
        <Cookie className="mx-auto w-12 h-12 md:w-16 md:h-16" />
      </div>
      <div className="mt-10">
        {sections.map((s, index) => (
          <div key={index} className="flex flex-col gap-8 my-12">
            <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-2">
              <h3 className="text-center font-bold text-2xl md:text-3xl">
                {s.question}
              </h3>
              {s.icon}
            </div>
            {s.info?.map((i, index) => (
              <li key={index} className="italic md:text-[1.15rem] list-inside">
                {i}
              </li>
            ))}
          </div>
        ))}
        <p className="font-semibold text-center text-[1.30rem] mb-16">
          Cu toate acestea, dacă căutați mai multe informații, ne puteți
          contacta la:{" "}
          <a
            href="mailto:office@thewineshop.ro"
            className="text-blue-500 hover:text-blue-800 active:text-blue-800 underline"
          >
            office@thewineshop.ro
          </a>
        </p>
      </div>
    </div>
  );
};

export default PoliticsPage;
