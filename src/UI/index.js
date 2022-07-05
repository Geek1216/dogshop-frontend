export function PrimaryBtn({ children, className }) {
  return (
    <a href="/" className={`${className}`}>
      <button className="primary-btn">{children}</button>
    </a>
  );
}
