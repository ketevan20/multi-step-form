import { useSubscription } from "../../context/SubscriptionContext";
import type { AddOn } from "../../types/Types";
import TextContainer from "../TextContainer/TextContainer"

type AddOnTypes = AddOn & {
  text: string;
}

const AddOn = ({ id, title, text, monthlyPrice, yearlyPrice }: AddOnTypes) => {
  const { billing, toggleAddOn } = useSubscription();

  const addOn = {
    id: id,
    title: title,
    monthlyPrice: monthlyPrice,
    yearlyPrice: yearlyPrice
  }

  return (
    <label htmlFor={id} className="group has-checked:bg-[rgba(248,249,255,1)] has-checked:border-[rgba(72,62,255,1)] w-full px-6 py-4 rounded-lg border border-[rgba(214,217,230,1)] flex gap-6 items-center max-sm:gap-4">
      <input
        className="peer w-5 h-5 accent-[rgba(72,62,255,1)]"
        type="checkbox"
        name="onlineServices"
        id={id}
        onChange={() => toggleAddOn(addOn)}
      />
      <div className="cursor-pointer">
        <p className="text-[rgba(2,41,89,1)] text-[16px] font-medium leading-[120%] tracking-normal max-sm:text-[14px]">{title}</p>
        <p className="text-[rgba(150,153,170,1)] text-[14px] font-normal leading-[120%] tracking-normal mt-2 max-sm:text-[12px]">{text}</p>
      </div>
      <div className="flex-1 text-right text-[rgba(72,62,255,1)] font-medium max-sm:text-[12px]">
        {billing == "monthly" ? `+$${monthlyPrice}/mo` : `+$${yearlyPrice}/yr`}
      </div>
    </label>
  );
}


const AddOns = () => {
  return (
    <>
      <TextContainer title="Pick add-ons" text="Add-ons help enhance your gaming experience." />
      <form className="flex flex-col gap-4">
        <AddOn id="onlineServices" title="Online service" text="Access to multiplayer games" yearlyPrice={10} monthlyPrice={1} />
        <AddOn id="lagerStorage" title="Larger storage" text="Extra 1TB cloud save" yearlyPrice={20} monthlyPrice={2} />
        <AddOn id="customizableProfile" title="Customizable profile" text="Custom theme on your profile" yearlyPrice={20} monthlyPrice={2} />
      </form>

    </>
  )
}

export default AddOns