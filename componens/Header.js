import { Annie_Use_Your_Telescope } from "@next/font/google";
import { GitHub } from "react-feather";

import styles from "../styles/Header.module.css";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });

function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <h1 className={`${annie.className} ${styles.heading}`}>Olaksaj.se</h1>
      <GitHub size={32} color="#888" />
    </header>
  );
}

export default Header;
