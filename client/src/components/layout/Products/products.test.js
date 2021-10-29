import React from "react";
import Products from "./Products";

import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as data from "../../../../products.json";
import { Image } from "@chakra-ui/react";
import { Link,BrowserRouter } from "react-router-dom";

const picture = data.products.map(el => el.items.map(el => el.picture))

configure({ adapter: new Adapter() });

describe("<Products />", () => {
  let products;

  beforeEach(() => {
    products = mount(
      <BrowserRouter>
        <Products
          id={data.products.map((el) => el.items.map((el) => el.id))}
          picture={data.products.map((el) => el.items.map((el) => el.picture))}
          price={data.products.map((el) =>
            el.items.map((el) => el.price.amount)
          )}
          title={data.products.map((el) => el.items.map((el) => el.title))}
          free_shipping={data.products.map((el) =>
            el.items.map((el) => el.free_shipping)
          )}
          address={data.products.map((el) => el.author.address)}
        />
      </BrowserRouter>
    );
  });

  it("Deberia renderizar un Link a cada producto cuando se clickea", () => {
    expect(products.find(Link).length).toBeGreaterThanOrEqual(1);
  });

  it("Deberia renderizar una serie de componentes de Stack", () => {
    expect(products.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("Deberia renderizar una serie de componentes de Stack", () => {
    expect(products.find("p").length).toBeGreaterThanOrEqual(1);
  });

  it("Deberia renderizar las imagenes que recibe como props", () => {
    expect(products.find(Image).props().src).toStrictEqual(picture);
  });
});
