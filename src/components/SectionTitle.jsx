export default function SectionTitle({ id, title, children }) {
  return (
    <header className="section-heading">
      <h2 id={id}>{title}</h2>
      {children}
    </header>
  )
}
