import React, { ReactNode } from "react";
import Logo from "../logo/logo";
import Link from "next/link";
import styles from "./header.module.css";

interface Props {
    children?: ReactNode
}

const Header = ({children}: Props) => (
    <header className={styles.main}>
      <Link href="#"><Logo /></Link>
      <div>
        {children}
      </div>
    </header>
)

export default Header;
