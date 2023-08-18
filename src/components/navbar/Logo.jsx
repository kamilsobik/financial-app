import styles from "./logo.module.scss";
import { ReactComponent as LogoSvg } from "@images/logo.svg";

export default function Logo() {
  return (
  <a href="/" className={styles.logoLink}>
    <LogoSvg />;
  </a>
  )
}
