import { useSteps } from "../../context/StepContext";
import { useSubscription } from "../../context/SubscriptionContext"
import TextContainer from "../TextContainer/TextContainer"

const Summary = () => {
  const { goTo } = useSteps();
  const { plan, billing, price, addOns } = useSubscription();

  function calculateSum() {
    let sum = price;
    sum += addOns.length ? addOns.reduce((total, item) => total + (billing == 'monthly' ? item.monthlyPrice : item.yearlyPrice), 0) : 0;
    return sum;
  }

  return (
    <div>
      <TextContainer title="Finishing up" text="Double-check everything looks OK before confirming." />
      <div className="w-full bg-[rgba(248,249,255,1)] p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[rgba(2,41,89,1)] font-medium text-[16px] leading-[120%] tracking-normal">{plan} ({billing})</p>
            <button onClick={() => goTo(2)} className="text-[rgba(150,153,170,1)] text-[14px] leading-[120%] hover:text-[rgba(72,62,255,1)]">Change</button>
          </div>
          <p className="text-[rgba(2,41,89,1)] text-[16px] font-bold leading-[120%]">${price}/{billing == 'monthly' ? "mo" : "yr"}</p>
        </div>

        {
          addOns.length ?
            <div className="flex flex-col gap-4 mt-4 pt-4 pb-2 border-t border-[rgba(150,153,170,1)]">{addOns.map((item) =>
              <div key={item.id} className="w-full flex justify-between"><p className="text-[rgba(150,153,170,1)] text-[14px] font-normal leading-[120%]">{item.title}</p> <p className="text-[rgba(2,41,89,1)] text-[14px] font-normal leading-[120%]">+${billing == 'yearly' ? item.yearlyPrice : item.monthlyPrice}/{billing == 'yearly' ? 'yr' : 'mo'}</p></div>)}
            </div>
            :
            ""
        }
      </div>
      
      <div className="w-full p-4 mt-7 flex items-center justify-between">
        <p className="text-[rgba(150,153,170,1)] text-[14px] font-normal leading-[120%]">Total (per {billing == 'monthly' ? "month" : 'year'})</p>
        <p className="text-[rgba(72,62,255,1)] text-[20px] font-bold leading-[120%]">+${calculateSum()}/{billing == 'yearly' ? 'yr' : 'mo'}</p>
      </div>

    </div>
  )
}

export default Summary