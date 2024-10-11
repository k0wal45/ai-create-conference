interface Props {
  name: string;
  cost: number;
  desc: string;
  link: string;
}
const PricingCard = ({ name, cost, desc, link }: Props) => {
  return (
    <div className=" w-[23rem] p-8 rounded-xl flex flex-col items-center justify-center gap-8 group relative overflow-hidden h-[36rem] hover:scale-105 duration-500">
      <h5 className="text-6xl font-bold text-start h-32 flex items-center">
        {name}
      </h5>
      <p className="text-6xl py-4 border-y-2 border-white w-full border-dashed">
        {cost}
        <span className="text-xl"> zł / netto + VAT</span>
      </p>
      <p className="text-center text-2xl font-light">{desc}</p>
      <a
        href={link}
        className="px-6 py-2 text-xl bg-white text-secondary rounded-full hover:scale-110 hover:font-bold active:scale-100 duration-200 "
      >
        Kup Bilet
      </a>
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-primary to-primary/0 translate-x-[-110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
      <div className="absolute group-even:bg-accent bg-secondary inset-0 z-[-2]"></div>
    </div>
  );
};

export default PricingCard;
