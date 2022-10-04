import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            YENİ LEZZETLERİ KEŞFETMEK İÇİN DOĞRU YERDESİN...
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ŞUBELERİMİZ</h1>
          <p className={styles.text}>
            1654  ESENYURT #304.
            <br /> ISTANBUL, 85022
            <br /> (212) 867-1010
          </p>
          <p className={styles.text}>
            2356 BEŞİKTAŞ #235.
            <br /> ISTANBUL, 85022
            <br /> (212) 867-1011
          </p>
          <p className={styles.text}>
            1614 SARIYER #104.
            <br /> ISTANBUL, 85022
            <br /> (212) 867-1012
          </p>
          <p className={styles.text}>
            1614 KURUÇEŞME #125.
            <br /> ISTANBUL, 85022
            <br /> (212) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ÇALIŞMA SAATLERİ</h1>
          <p className={styles.text}>
           PAZARTESİ-CUMA
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            CUMARTESİ-PAZAR
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
