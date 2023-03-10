import Switch from "../../baseUI/Switch"

const Section = ({title, children, ...props}) => {
  return <section className="pt-[30px] px-10">
    <div className="flex items-center gap-5 px-10">
      <h2 className="font-semibold text-2xl font-heading">{title}</h2>
      <Switch 
        {...props}
      />
    </div>
    <div className="pt-5">
      {children}
    </div>
  </section>
}

export default Section;