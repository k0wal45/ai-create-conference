import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gradient-to-tr from-primary from-30% via-secondary via-60% to-accent to-90%">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 py-16">
        <div className="flex flex-col justify-center items-start gap-8">
          <Image
            width={800}
            height={200}
            src="/assets/img/aiCreate.png"
            alt="aI Create logo"
            className="h-8 md:h-10 lg:h-16 w-auto object-contain"
          />
          <p className="text-lg lg:text-2xl py-2 px-4 md:py-4 md:px-6 rounded-full border-2 border-white w-fit">
            29 Października 2024
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <p className="text-2xl">Organizator</p>

            <p className="mt-4">W.M. Murator Projekt</p>
            <p>ul. Dęblińska 6</p>
            <p>04-187 Warszawa</p>
            <p>KRS: 0000079969</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-2xl">Skontaktuj się z nami</p>

            <a href="mailto:kontakt@aicreate2024.pl" className="mt-4">
              kontakt@aicreate2024.pl
            </a>
            <a
              href="/documents/POLITYKA_PRYWATNOSCI_AICREATE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Polityka prywatności
            </a>
            <a
              href="/documents/REGULAMIN_KONFERENCJI_AICREATE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Regulamin konferencji
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          " flex w-full flex-col items-center justify-between gap-8 p-4 text-xl lg:flex-row lg:px-12 text-center bg-primary"
        }
      >
        <p className="cursor-default">©{year} aI Create</p>
        <p className="text-base">
          Created by:{" "}
          <a
            href="https://lunarisweb.pl/"
            className="underline hover:text-secondary duration-200"
          >
            Lunaris Web
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
