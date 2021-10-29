import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";

export default function HomeButtons() {
  return (
    <Stack
      border="1px solid #D6d6d6"
      padding={5}
      direction="row"
      width="100%"
      alignItems="center"
      justifyContent="space-around"
      marginTop="2rem"
    >
      <Stack cursor="pointer" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635284886/credit-card_tlyfij.svg" />
          <Text>Tarjeta de crédito</Text>
        </Stack>
        <Text fontSize="xs" color="#3483fa">
          Ver promociones bancarias
        </Text>
      </Stack>
      <Stack cursor="pointer" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635284886/credit-card_tlyfij.svg" />
          <Text>Tarjeta de débito</Text>
        </Stack>
        <Text fontSize="xs" color="#3483fa">
          Ver más
        </Text>
      </Stack>
      <Stack cursor="pointer" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635284882/mercado-creditsv2_y6xc17.svg" />
          <Text>Cuotas sin tarjeta</Text>
        </Stack>
        <Text fontSize="xs" color="#3483fa">
          Conocé Mercado Crédito
        </Text>
      </Stack>
      <Stack cursor="pointer" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635284886/credit-card_tlyfij.svg" />
          <Text>Efectivo</Text>
        </Stack>
        <Text fontSize="xs" color="#3483fa">
          Ver más
        </Text>
      </Stack>
      <Stack
        cursor="pointer"
        paddingBottom="1.6rem"
        paddingLeft="2rem"
        direction="row"
        alignItems="center"
      >
        <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635284900/view-more_loh57d.svg" />
      </Stack>
    </Stack>
  );
}
