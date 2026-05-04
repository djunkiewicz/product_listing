// Styles
import styles from "./page.module.css";

// Types
import { Product } from "@/types/product.types";

// Components
import ShopPageClient from "@/components/ShopPageClient/ShopPageClient";


export default async function Home() {
    const response = await fetch(
    "https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise",
    {
        method: "GET",
        headers: {
        "x-api-key": process.env.API_KEY!,
        },
        cache: "no-store",
    }
    );
    const data = await response.json();
    const fetchedProducts: Product[] = data.products;
    const logoUrl: string = data.logo.url;
    return (
    <main>
      <ShopPageClient logoUrl={logoUrl} products={fetchedProducts}/>
    </main>
  );
}
