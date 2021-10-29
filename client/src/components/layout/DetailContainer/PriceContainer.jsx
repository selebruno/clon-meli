import React from "react";
import { FiTruck } from "react-icons/fi";
import { AiFillThunderbolt, AiOutlineDown } from "react-icons/ai";
import { Stack, Text, Icon } from "@chakra-ui/react";

export default function PriceContainer({ price }) {
  return (
    <>
      <Stack spacing={0}>
        <Text fontSize="xx-large" fontWeight="light">
          ${price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
        </Text>
        <Text maxWidth="80%">
          en 12x {(price / 12).toFixed(2)} pagando con Mercado Crédito
        </Text>
        <Text cursor="pointer" color="#3483fa" fontSize="small">
          Ver los medios de pago
        </Text>
      </Stack>
      <Stack spacing={0}>
        <Stack direction="row" alignItems="center">
          <Text>
            <Icon width={4} height={4} as={FiTruck} /> Envío a todo el país
          </Text>
          <Text
            color="#00a650"
            fontWeight="extrabold"
            fontSize="sm"
            fontFamily="sans-serif"
          >
            <Icon as={AiFillThunderbolt} />
            <em>FULL </em>
            <Icon
              height={3}
              width={3}
              color="blackAlpha.600"
              as={AiOutlineDown}
            />
          </Text>
        </Stack>
        <Stack paddingLeft="5" spacing={0}>
          <Text color="blackAlpha.600" fontSize="13">
            Conocé los tiempos y las formas de envío.
          </Text>
          <Text cursor="pointer" color="#3483fa" fontSize="xs">
            Calcular cuándo llega
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
