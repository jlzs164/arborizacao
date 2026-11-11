function InfoCard({ icon, title, children, link, linkLabel }) {
  return (
    <article className="info-card">
      <div className="info-card-heading">
        <h3>{title}</h3>
      </div>
      <div className="info-card-content">{children}</div>
      {link && (
        <a className="text-link" href={link}>
          {linkLabel || "Saiba mais"} <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}

export default InfoCard;
