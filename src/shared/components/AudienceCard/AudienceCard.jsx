import css from './AudienceCard.module.css';

export default function AudienceCard({ icon, title }) {
  return (
    <div className={css.card}>
      <span className={css.icon} aria-hidden="true">
        {icon}
      </span>

      <h3 className={`headingSubsection ${css.title}`}>{title}</h3>
    </div>
  );
}
