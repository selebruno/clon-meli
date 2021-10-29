import React from "react";
import { Stack, Text, Icon } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";

export default function Stock({ available_quantity }) {
  return (
    <>
      <Stack paddingTop={5}>
        <Text fontWeight="medium" fontSize="15">
          Stock disponible
        </Text>
        <Stack direction="row" spacing={1} alignItems="center" paddingTop={3}>
          <Text fontSize="15" fontWeight="normal">
            Cantidad: <b>1 unidad</b>{" "}
            <Icon
              height={3}
              width={3}
              color="#3483fa"
              cursor="pointer"
              as={AiOutlineDown}
            />
          </Text>
          <Text fontSize="xs" color="blackAlpha.600">
            ({available_quantity} disponibles)
          </Text>
        </Stack>
        <Text color="#00a650" fontSize="12.5">
          Ahorrá en el envío comprando 4 o más unidades
        </Text>
      </Stack>
    </>
  );
}
