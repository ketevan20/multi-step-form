type TextContainerTypes = {
    title: string;
    text: string;
}
const TextContainer = ({title, text}: TextContainerTypes) => {
    return (
        <div className='mb-10 max-md:mb-8 max-sm:mb-6'>
            <h1 className='text-[rgba(2,41,89,1)] text-[32px] font-bold max-sm:text-[24px]'>{title}</h1>
            <p className='text-[rgba(150,153,170,1)] leading-[150%] text-[16px] font-normal mt-2'>{text}</p>
        </div>
    )
}

export default TextContainer