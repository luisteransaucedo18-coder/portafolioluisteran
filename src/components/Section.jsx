export function Section({ id, label, title, children, centered = false }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className={`section-label ${centered ? 'section-label--center' : ''}`}>{label}</div>
        <h2 className={`section-title ${centered ? 'section-title--center' : ''}`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function Divider() {
  return <div className="section-divider" />;
}
