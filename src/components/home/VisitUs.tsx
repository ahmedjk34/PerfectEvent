import styles from "../../styles/pages/home.module.scss";

type Props = {};

function VisitUs({}: Props) {
  return (
    <div className={styles.visitUs}>
      <h1 className={styles.title}>Visit Us!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29619.795387093156!2d-104.6590332472178!3d38.255958388363474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1704376150610!5m2!1sen!2s"
        width="80%"
        height="500px"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default VisitUs;
