export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};
export type ProductId = Product['id'];
export type ProductProps = {
    product: Product;
  };
  