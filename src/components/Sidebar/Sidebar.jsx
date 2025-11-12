export default function Sidebar({ close }) {
  return (
    <aside
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '250px',
        background: '#eee',
        boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
        padding: '1rem',
      }}
    >
      <button type="button" onClick={close}>
        Close
      </button>
      <p>I am Sidebar</p>
    </aside>
  );
}
