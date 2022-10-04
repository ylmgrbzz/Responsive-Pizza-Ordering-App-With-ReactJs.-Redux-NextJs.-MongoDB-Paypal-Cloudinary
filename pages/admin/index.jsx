import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";

const Index = ({products}) => {
    const [pizzaList, setPizzaList] = useState(products);
    const handleDelete = async (id) => {
        console.log(id);
        try {
          const res = await axios.delete(
            "http://localhost:3000/api/products/" + id
          );
          setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>ÜRÜNLER</h1>
        <table className={styles.table}>
        
          <tbody  >
            <tr className={styles.trTitle}>
              <th>RESİM</th>
              <th>ID</th>
              <th>BAŞLIK</th>
              <th>FİYAT</th>
              <th>DÜZENLE YADA SİL</th>
            </tr>
          </tbody>
          {pizzaList.map(product =>(
          <tbody key={product._id}>
            <tr className={styles.trTitle}>
              <td>
                <Image
                  src="/img/pizza.png"
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt=""
                />
              </td>
              <td>{product._id}</td>
              <td>{product.title}</td>
              <td>₺{product.prices}</td>
              <td>
                <button className={styles.button}>DÜZENLE</button>
                <button
                  className={styles.button}
                    onClick={() => handleDelete(product._id)}
                >
                  SİL
                </button>
              </td>
            </tr>
            </tbody>
            ))}

        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>SİPARİŞLER</h1>

        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>ID</th>
              <th>MÜŞTERİ</th>
              <th>TOTAL</th>
              <th>ÖDEME DURUMU</th>
              <th>DURUM</th>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.trTitle}>
              <td>987654321</td>
              <td>YALIM GÜRBÜZ</td>
              <td>₺50</td>
              <td>ÖDENDİ</td>
              <td>HAZIRLANIYOR</td>
              <td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
  
    if (myCookie.token !== process.env.TOKEN) {
      return {
        redirect: {
          destination: "/admin/login",
          permanent: false,
        },
      };
    }
  const productRes = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      products: productRes.data,
    },
  };
};
export default Index;
