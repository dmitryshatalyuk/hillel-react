export function NavMenu(props) {
  const navItems = props.items.map((item) => <li>{item}</li>);
  return (
    <nav className="navigation">
      <ul>{navItems}</ul>
    </nav>
  );
}
