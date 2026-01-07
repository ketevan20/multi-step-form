import type { FormikProps } from "formik"
import AddOns from "../AddOns/AddOns"
import PersonalInfo from "../PersonalInfo/PersonalInfo"
import Plan from "../Plan/Plan"
import Summary from "../Summary/Summary"
import { useState } from "react"
import { SubscriptionContext } from "../../context/SubscriptionContext"

type ContainerType = {
  step: number;
  formRef: React.RefObject<FormikProps<any> | null>;
}

const Container = ({ step, formRef }: ContainerType) => {
  const [plan, setPlan] = useState<"Arcade" | "Advanced" | "Pro" | null>("Arcade");
  const [price, setPrice] = useState(9);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [addOns, setAddOns] = useState<any[]>([]);

  const toggleBilling = () => {
    setBilling((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  const toggleAddOn = (addOn: any) => {
    setAddOns((prev) =>
      prev.some((a) => a.id === addOn.id)
        ? prev.filter((a) => a.id !== addOn.id)
        : [...prev, addOn]
    );
  };

  return (
    <SubscriptionContext.Provider
      value={{
        plan,
        billing,
        price,
        addOns,
        setPlan,
        setPrice,
        toggleBilling,
        toggleAddOn,
      }}
    >
      <div className='w-full overflow-y-auto p-1 bg-white max-sm:px-6 max-sm:py-8 max-sm:rounded-[10px] max-sm:relative -top-20 max-sm:mb-4'>
        <div style={{ display: step == 1 ? 'block' : 'none' }}><PersonalInfo formRef={formRef} /></div>
        <div style={{ display: step == 2 ? 'block' : 'none' }}><Plan /></div>
        <div style={{ display: step == 3 ? 'block' : 'none' }}><AddOns /></div>
        <div style={{ display: step == 4 ? 'block' : 'none' }}><Summary /></div>
      </div>
    </SubscriptionContext.Provider>
  )
}

export default Container