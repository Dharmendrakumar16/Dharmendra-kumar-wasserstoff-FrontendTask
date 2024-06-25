import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <img src={"ide-image.png"} />
        <li>Welcome to My IDE</li>
        <li>My IDE </li>
      </ul>
    </nav>
  );
};

export default Header;
