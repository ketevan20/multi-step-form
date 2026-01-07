import TextContainer from "../TextContainer/TextContainer"
import { useSubscription } from "../../context/SubscriptionContext";
import type { PlanType } from "../../types/Types";

type PlanButtonTypes = {
  image: string;
  selectedPlan: PlanType;
  price: number;
  time: string;
}


const PlanButton = ({ image, selectedPlan, price, time }: PlanButtonTypes) => {
  const { plan, billing, setPlan, setPrice } = useSubscription();
  const isSelected = selectedPlan === plan;

  return (
    <button onClick={() => { setPlan(selectedPlan); setPrice(price) }} className={`flex-1 h-40 p-4 flex flex-col gap-4 items-start justify-between border rounded-lg max-md:g-20 max-md:flex-row max-md:justify-normal max-sm:items-center hover:cursor-pointer hover:border-[rgba(72,62,255,1)] ${isSelected ? 'bg-[rgba(248,249,255,1)] border-[rgba(72,62,255,1)]' : 'border-[rgba(214,217,230,1)]'}`}>
      <img className="max-w-full" src={image} alt="" />
      <div className="text-left">
        <p className="text-[rgba(2,41,89,1)] text-[16px] font-medium leading-[120%] tracking-normal">{selectedPlan}</p>
        <p className="text-[rgba(150,153,170,1)] text-[14px] font-normal leading-[120%] tracking-normal">${price}/{time}</p>
        {billing == 'yearly' && <p className="text-[rgba(2,41,89,1)] text-[12px] font-normal leading-[120%] tracking-normal mt-2">2 months free</p>}
      </div>
    </button>
  );
}


const Plan = () => {
  const { billing, toggleBilling, setPrice, price } = useSubscription();

  return (
    <>
      <TextContainer title="Select your plan" text="You have the option of monthly or yearly billing." />

      <div className="w-full flex gap-4.5 max-md:flex-col max-md:gap-2">
        <PlanButton image="/images/icon-arcade.svg" selectedPlan="Arcade" price={billing == 'yearly' ? 90 : 9} time={billing == 'yearly' ? "yr" : "mo"} />
        <PlanButton image="/images/icon-advanced.svg" selectedPlan="Advanced" price={billing == 'yearly' ? 120 : 12} time={billing == 'yearly' ? "yr" : "mo"} />
        <PlanButton image="/images/icon-pro.svg" selectedPlan="Pro" price={billing == 'yearly' ? 150 : 15} time={billing == 'yearly' ? "yr" : "mo"} />
      </div>

      <div className="w-full mt-8 py-3.5 bg-[rgba(248,249,255,1)] flex items-center justify-center gap-6 rounded-lg">
        <p className={`${billing == 'yearly' ? "text-[rgba(150,153,170,1)]" : "text-[rgba(2,41,89,1)]"} text-[14px] font-bold leading-[120%] tracking-[1px] max-sm:tracking-normal max-sm:leading-[150%]`}>Monthly</p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" onChange={() => { toggleBilling(); setPrice(billing == 'yearly' ? price / 10 : price * 10) }} />
          <div
            className="w-11 h-6 rounded-full
           bg-[rgba(2,41,89,1)]
           peer-focus:outline-none
           peer-checked:bg-[rgba(2,41,89,1)]
           transition-colors"
          ></div>
          <div
            className="absolute left-1 top-1
           w-4 h-4 bg-white rounded-full
           transition-transform
           peer-checked:translate-x-5"
          ></div>
        </label>
        <p className={`${billing == 'monthly' ? "text-[rgba(150,153,170,1)]" : "text-[rgba(2,41,89,1)]"} text-[14px] font-bold leading-[120%] tracking-[1px] max-sm:tracking-normal max-sm:leading-[150%]`}>Yearly</p>
      </div>
    </>
  )
}

export default Plan