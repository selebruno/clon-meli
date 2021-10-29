import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Products from "../../layout/Products/Products";
import NotFound from "../../layout/NotFound/NotFound";
import { getProducts } from "../../../redux/actions/actions";


export default function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const search = query.get("search")


  useEffect(() => {
    dispatch(getProducts(search));
  }, [search]);

  return (
    <>
      <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635354560/banner_sq2hnb.png" />
      {products === "Error" ? (
        <NotFound />
      ) : products.length > 0 ? (
        products.map((el) => {
          return (
            <Stack alignItems="left" marginLeft="35vh">
              <Products
                id={el.items.map((item) => item.id)}
                picture={el.items.map((item) => item.picture)}
                price={el.items.map((item) => item.price.amount)}
                title={el.items.map((item) => item.title)}
                free_shipping={el.free_shipping}
                address={el.author.address}
              />
            </Stack>
          );
        })
      ) : (
        <Stack alignItems="center" justifyContent="center">
        <Stack
          width="3rem"
          height="3rem"
          marginTop="6vh"
        >
          <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635287448/loading-buffering_x968rg.gif" />
        </Stack>
        </Stack>
      )}
    </>
  );
}
