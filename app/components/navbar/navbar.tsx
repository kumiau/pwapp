import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => (
  <ul className={styles.main}>
    <li>
      <Link href="/posts">
        Publicaciones
      </Link>
    </li>
    <li>
      <Link href="#">
        Directorio
      </Link>
    </li>
    <li>
      <Link href="#">
        Eventos
      </Link>
    </li>
    <li>
      <Link href="#">
        Visita
      </Link>
    </li>
    <li>
      <Link href="#">
        Contáctanos
      </Link>
    </li>
  </ul>
);

export default Navbar;
