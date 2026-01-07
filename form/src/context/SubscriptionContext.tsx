import { createContext, useContext } from "react";
import type { AddOn, BillingType, PlanType } from "../types/Types";

type SubscriptionContextType = {
    plan: PlanType | null;
    billing: BillingType;
    price: number;
    addOns: AddOn[];
    setPlan: (plan: PlanType) => void;
    setPrice: (price: number) => void;
    toggleBilling: () => void;
    toggleAddOn: (addOn: AddOn) => void;
}

export const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);

  if (!context) {
    throw new Error(
      "useSubscription must be used within SubscriptionProvider"
    );
  }

  return context;
};