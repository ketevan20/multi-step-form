import { useRef } from "react";
import Buttons from "../Buttons/Buttons"
import Container from "../Container/Container"
import SideBar from "../SideBar/SideBar"
import Finish from "../Finish/Finish";
import type { FormikProps } from "formik";
import { useSteps } from "../../context/StepContext";

const MainWrapper = () => {
  const { currentStep, isCompleted, goNext, goBack, complete, goTo } = useSteps();
  const formRef = useRef<FormikProps<any> | null>(null);

  const submitForm = async () => {
    const errors = await formRef.current?.validateForm();
    const isValid = Object.keys(errors || {}).length === 0;

    if (!isValid) {
      formRef.current?.handleSubmit();
      goTo(1);
    }

    return isValid;
  };

  async function handleNextClick() {
    const isValid = await submitForm();

    if (!isValid) return;

    if (currentStep < 4) goNext();
    else complete();
  }

  function handleBackClick() {
    goBack();
  }

  return (
    <div className="bg-white w-235 max-w-[90%] h-[80vh] max-h-150 flex rounded-[15px] max-sm:max-w-full max-sm:h-full max-sm:max-h-full max-sm:block max-sm:bg-transparent">
      <div className="flex-1 p-4 max-sm:p-0 max-sm:w-full">
        <SideBar isSelected={currentStep} handleStepClick={goTo} />
      </div>
      <div className="flex-2 p-4 flex items-center justify-center max-sm:py-0">
        {
          isCompleted == false ?
            <div className="max-w-112.5 w-full h-full flex flex-col justify-between max-sm:max-w-full">
              <Container step={currentStep} formRef={formRef} />
              <Buttons isSelected={currentStep} handleStepClick={handleNextClick} handleBackClick={handleBackClick} />
            </div>
            :
            <Finish />
        }
      </div>
    </div>
  )
}

export default MainWrapper