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
}) {
  return (
    <button
      className={clsx(
        'buttonText',
        css.btn,
        css[`btn-${variant}`],
        {
          [css.selected]: selected,
        },
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
