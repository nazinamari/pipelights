import css from './Button.module.css';

export default function Button({
  children,
  variant = 'primary', // primary | default | link
  type = 'button', // button | submit | reset
  disabled = false,
  active = false,
  onClick,
  className = '',
}) {
  // формуємо клас за variant + active
  const classNames = `${css.btn} ${css[`btn-${variant}`]} ${active ? css.active : ''} ${className}`;

  return (
    <button
      className={classNames}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
