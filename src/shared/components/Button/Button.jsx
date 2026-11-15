import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  selected = false,
  onClick,
  className,
  href,
}) {
  const classNames = clsx(
    'buttonText',
    css.btn,
    css[`btn-${variant}`],
    { [css.selected]: selected },
    className
  );

  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick}>
        {children}
      </a>
    );
  }

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
