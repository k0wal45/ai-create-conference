const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gradient-to-tr from-primary from-30% via-secondary via-60% to-accent to-90%">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 py-16">
        <div className="flex flex-col justify-center items-start gap-8">
          <p className="font-semibold text-6xl">AI Create Logo</p>

          <p className="text-lg lg:text-2xl py-2 px-4 md:py-4 md:px-6 rounded-full border-2 border-white w-fit">
            29 Października 2024
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <p className="text-2xl">Organizator</p>

            <p className="mt-4">Przykładowa Firma</p>
            <p>ul. Ulica 6</p>
            <p>04-100 Warszawa</p>
            <p>KRS: 0000000000</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-2xl">Skontaktuj się z nami</p>

            <a href="mailto:kontakt@aicreate2024.pl" className="mt-4">
              email@email.pl
            </a>
            <div className="underline">Polityka prywatności</div>
            <div className="underline">Regulamin konferencji</div>
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
