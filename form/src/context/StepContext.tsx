import { createContext, useContext, useState } from "react";

type StepContextType = {
  currentStep: number;
  goNext: () => void;
  goBack: () => void;
  goTo: (step: number) => void;
  complete: () => void;
  isCompleted: boolean;
};

const StepContext = createContext<StepContextType | null>(null);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const goNext = () => setCurrentStep(s => Math.min(s + 1, 4));
  const goBack = () => setCurrentStep(s => Math.max(s - 1, 1));
  const goTo = (step: number) => setCurrentStep(step);
  const complete = () => setIsCompleted(true);

  return (
    <StepContext.Provider
      value={{ currentStep, goNext, goBack, goTo, complete, isCompleted }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useSteps = () => {
  const ctx = useContext(StepContext);
  if (!ctx) throw new Error("useSteps must be used inside StepProvider");
  return ctx;
};
