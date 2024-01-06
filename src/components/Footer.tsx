import styles from "../styles/pages/footer.module.scss";
type Props = {};

function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <h3>Copyright © 2024 perfect event - All Rights Reserved.</h3>
      <h4>Made by ahmedjk34 on Github</h4>
    </div>
  );
}

export default Footer;
