import { StepProvider } from "../../context/StepContext"
import MainWrapper from "../MainWrapper/MainWrapper"

const Content = () => {
  return (
    <div className="relative w-full h-full min-h-screen bg-[rgba(239,245,255,1)] font-['Ubuntu'] flex items-center justify-center max-sm:block">
      <StepProvider>
        <MainWrapper />
      </StepProvider>
    </div>
  )
}

export default Content