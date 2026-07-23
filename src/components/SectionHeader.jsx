export default function SectionHeader({ eyebrow, title, description, align = 'left', id }) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
