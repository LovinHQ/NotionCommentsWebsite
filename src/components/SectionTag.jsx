const SectionTag = ({text}) => {
    return (
        <div className="flex justify-center items-center ">
            <div className="rounded-3xl px-6 py-2 bg-[var(--bg-base)] linear-text-border">
            <span className="linear-text">{text}</span>

            </div>
        </div>
    )
}

export default SectionTag;