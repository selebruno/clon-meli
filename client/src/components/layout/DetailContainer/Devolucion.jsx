import React from "react";
import { Stack, Text, Icon } from "@chakra-ui/react";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function Devolucion() {
  return (
    <>
      <Stack spacing={0}>
        <Stack justifyContent="center">
          <Text color="#00a650">
            <Icon as={RiArrowGoBackLine} color="#00a650" /> Devolución Gratis
          </Text>
        </Stack>
        <Stack paddingLeft="5" spacing={0}>
          <Text color="blackAlpha.600" fontSize="13">
            Tenés 30 días desde que lo recibís..
          </Text>
          <Text cursor="pointer" color="#3483fa" fontSize="xs">
            Conocer más
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
