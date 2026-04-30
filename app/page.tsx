import Image from "next/image";
import styles from "./page.module.css";
import Header from '@/components/Header/Header';
import ProductList from '@/components/ProductList/ProductList'

import { Product } from "@/types/product";

const productList: Product[] = [
    {name: "product1", price: 32},
    {name: "product2", price: 43},
    {name: "product3", price: 5646},
    {name: "product4", price: 54},
    {name: "product5", price: 4324}]


export default function Home() {
  return (
    <main>
      <Header />
      <div className="body">
        <h3>This is the main content (Body)</h3>
        <ProductList  products={productList} />
      </div>
    </main>
  );
}
