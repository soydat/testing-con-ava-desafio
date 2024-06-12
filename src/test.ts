import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});
test("Testeo la clase User y sus métodos", (t) => {
  const usuario = new User ("Nombre");
  t.is(usuario.name, "Nombre");

  const producto = new Product("leche", 1200);
  usuario.addProduct(producto);
  t.is(usuario.products.length, 1);
  t.is(usuario.products[0], producto);
});
