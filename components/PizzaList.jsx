import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ŞEHRİN EN İYİ PİZZASI</h1>
      <p className={styles.desc}>
      Uygun Fiyatlı Pizzalar Türkiye'nin Yerli Pizzası PizzaYALIM'da! Online Sipariş Ver ya da Sana En Yakın PizzaLazza Şubesini Bul. Pizza Takip Hizmeti. Üst Seviye Gıda Hijyeni. Para Puan İndirimleri. Online Ödeme İmkanı. Temassız Teslimat.
      </p>
      <div className={styles.wrapper}>
      {pizzaList.map((pizza) => (
        <PizzaCard key={pizza._id} pizza={pizza} />
      ))}
      </div>
    </div>
  );
};

export default PizzaList;
