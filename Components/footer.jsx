import Link from "next/Link";
import styles from "../styles/linkPage.module.css";

export default function MyFooter(props) {
  return (
    <footer className={styles.footer}>
      <Link href="/">Link 1 for ShopDjango!</Link>
      <Link href="/">Link 2 Goes Home!</Link>
      <Link href="/">Link 3 Goes to the same place!</Link>
    </footer>
  )
}
