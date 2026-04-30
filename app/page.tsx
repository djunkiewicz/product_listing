// Styles
import styles from "./page.module.css";

// Components
import Header from '@/components/Header/Header';
import ProductList from '@/components/ProductList/ProductList'

// Types
import { Product } from "@/types/product.types";

// NPM packages
import axios from "axios";


export default async function Home() {
    const response = await axios.get(
        "https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise",
        {
            headers: {
                "x-api-key": process.env.API_KEY!,
            },
        }
    );
    const fetchedProducts: Product[] = response.data.products;
    return (
    <main>
      <Header imgUrl={response.data.logo.url}/>
      <div className={styles.body}>
        <h3>This is the main content (Body)</h3>
        <ProductList  products={fetchedProducts} />
      </div>
    </main>
  );
}
