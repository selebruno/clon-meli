import React from "react";
import { Stack } from "@chakra-ui/react";
import TitleContainer from "./TitleContainer";
import PriceContainer from "./PriceContainer";
import Stock from "./Stock";
import Devolucion from "./Devolucion";
import Buttons from "./Buttons";
import CompraProtegida from "./CompraProtegida";

export default function DetailPriceContainer({
  condition,
  title,
  sold_quantity,
  categories,
  price,
  available_quantity,
}) {
  return (
    <Stack
      paddingLeft="5"
      paddingRight="5"
      alignItems="left"
      marginTop="1rem"
      marginRight="0.7rem"
      width={320}
      borderRadius="6"
      height={title.length > 45 ? 850 : 800}
      border="solid 1px #D6d6d6"
    >
      <TitleContainer
        condition={condition}
        sold_quantity={sold_quantity}
        categories={categories}
        title={title}
      />
      <PriceContainer price={price} />
      <Stock available_quantity={available_quantity} />
      <Devolucion />
      <Buttons />
      <CompraProtegida />
    </Stack>
  );
}
