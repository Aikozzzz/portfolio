export default function SectionTitle({ id, title, children }) {
  return (
    <header className="section-heading" data-reveal>
      <h2 id={id}>{title}</h2>
      {children}
    </header>
  )
}
