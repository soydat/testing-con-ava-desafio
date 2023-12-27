import test from "ava";
import { Product } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});
test("Testeo la clase User y sus métodos", (t) => {});
