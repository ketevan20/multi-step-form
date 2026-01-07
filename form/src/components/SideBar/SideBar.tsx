import { memo } from "react";

type StepsType = {
    step: number;
    text: string;
    isSelected: boolean;
    handleClick: (step: number) => void;
}

const Steps = memo(({ step, text, isSelected, handleClick }: StepsType) => {
    return (
        <button onClick={() => { handleClick(step) }} className="flex gap-4 items-center text-left max-sm:items-start max-sm:my-8">
            <div className="w-8.25 h-8.25 bg-transparent border-[1.5px] border-white flex items-center justify-center rounded-full text-white" style={{ backgroundColor: isSelected ? "rgba(190, 226, 253, 1)" : "transparent", border: isSelected ? "none" : "", color: isSelected ? "rgba(2, 41, 89, 1)" : "white" }}>{step}</div>
            <div className="max-sm:hidden">
                <p className="text-[rgba(171,188,255,1)] text-[12px] font-normal tracking-normal uppercase leading-[120%]">Step {step}</p>
                <p className="text-white text-[14px] leading-[120%] tracking-[1px] font-bold">{text.toLocaleUpperCase()}</p>
            </div>
        </button>
    );
})

type SideBarType = {
    isSelected: number;
    handleStepClick: (step: number) => void;
}

const SideBar = ({isSelected, handleStepClick}: SideBarType) => {
    return (
        <div className="w-full h-full px-8 py-10 bg-[url('/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover rounded-[10px] flex flex-col gap-8 overflow-auto max-sm:flex-row max-sm:justify-center max-sm:p-0 max-sm:gap-4 max-sm:bg-[url('/images/bg-sidebar-mobile.svg')] max-sm:rounded-none max-sm:h-43 max-md:px-4">
            <Steps step={1} text={"your info"} isSelected={isSelected == 1} handleClick={handleStepClick} />
            <Steps step={2} text={"Select plan"} isSelected={isSelected == 2} handleClick={handleStepClick} />
            <Steps step={3} text={"add-ons"} isSelected={isSelected == 3} handleClick={handleStepClick} />
            <Steps step={4} text={"summary"} isSelected={isSelected == 4} handleClick={handleStepClick} />
        </div>
    )
}

export default SideBar