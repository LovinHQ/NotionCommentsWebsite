const SectionTag = ({ text }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="accent-border flex h-10 items-center justify-center rounded-full px-6">
        <span className="accent-text text-base font-bold tracking-[4px]">
          {text}
        </span>
      </div>
    </div>
  )
}

export default SectionTag
