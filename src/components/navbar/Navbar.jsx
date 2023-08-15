export default function Navbar() {
  const navItems = [
    {
      id: "general",
      label: "Ogólne",
      href: "/general",
    },
    {
      id: "history",
      label: "Historia",
      href: "/history",
    },
    {
      id: "charts",
      label: "Wykresy",
      href: "/charts",
    },
  ];

  return (
    <nav>
      <ul>
        {navItems.map(({ id, label, href }) => (
          <li key={id}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
