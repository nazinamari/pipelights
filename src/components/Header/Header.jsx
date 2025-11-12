export default function Header({ onClick, isTabletOrDesktop }) {
  return (
    <div>
      {!isTabletOrDesktop && (
        <button type="button" onClick={onClick}>
          Burger
        </button>
      )}
      <p>I am header</p>
    </div>
  );
}
