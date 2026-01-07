type ButtonsType = {
  isSelected: number;
  handleStepClick: () => void;
  handleBackClick: () => void;
}

const Buttons = ({isSelected, handleStepClick, handleBackClick}: ButtonsType) => {
  return (
    <div className="w-full bg-white flex justify-between mt-20 max-sm:absolute bottom-0 right-0 left-0 text-[16px] font-medium leading-[120%] tracking-normal max-sm:p-4" style={{justifyContent: isSelected == 1 ? "end" : ""}}>
        { isSelected != 1 && <button onClick={() => handleBackClick()} className="text-[rgba(150,153,170,1)] hover:cursor-pointer hover:text-[rgba(2,41,89,1)]">Go Back</button> }
        <button onClick={handleStepClick} type="button" className="bg-[rgba(2,41,89,1)] hover:bg-[rgba(146,140,255,1)] px-6 py-4 rounded-lg text-white">{isSelected == 4 ? "Confirm" : "Next Step"}</button>
    </div>
  )
}

export default Buttons