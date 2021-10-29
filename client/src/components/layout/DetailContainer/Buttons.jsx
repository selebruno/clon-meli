import React from "react";
import { Stack, Button } from "@chakra-ui/react";

export default function Buttons() {
  return (
    <>
      <Stack paddingTop={3}>
        <Button
          _hover={{ backgroundColor: "#2968c8" }}
          backgroundColor="#3483fa"
          color="white"
        >
          Comprar ahora
        </Button>
        <Button
          _hover={{ backgroundColor: "#d2e4fe" }}
          backgroundColor="#e4edfa"
          color="#3483fa"
        >
          Agregar al carrito
        </Button>
        <Button
          _hover={{ backgroundColor: "#e9f2fe" }}
          backgroundColor="white"
          color="#3483fa"
        >
          Comprar con Mercado Crédito
        </Button>
      </Stack>
    </>
  );
}
