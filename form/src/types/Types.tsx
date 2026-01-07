export type PlanType = "Arcade" | "Advanced" | "Pro";
export type BillingType = "monthly" | "yearly";

export type AddOn = {
    id: string;
    title: string;
    monthlyPrice: number;
    yearlyPrice: number;
};