import styles from "./navbar.module.scss";
import { ReactComponent as GeneralIcon } from "@icons/general_icon.svg";
import { ReactComponent as HistoryIcon } from "@icons/history_icon.svg";
import { ReactComponent as ChartsIcon } from "@icons/charts_icon.svg";
import Logo from "./Logo";

export default function Navbar() {
  const navItems = [
    {
      id: "general",
      label: "Ogólne",
      href: "/",
      Icon: GeneralIcon,
    },
    {
      id: "history",
      label: "Historia",
      href: "/history",
      Icon: HistoryIcon,
    },
    {
      id: "charts",
      label: "Wykresy",
      href: "/charts",
      Icon: ChartsIcon,
    },
  ];

  const renderNavItems = navItems.map(({ id, label, href, Icon }) => (
    <li key={id}>
      <a className={styles.navLink} href={href}>
        <Icon />
        {label}
      </a>
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navBar}>
        <Logo />
        <ul className={styles.navList}>{renderNavItems}</ul>
      </nav>
    </div>
  );
}
