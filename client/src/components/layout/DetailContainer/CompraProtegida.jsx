import React from "react";
import { Text, Icon } from "@chakra-ui/react";
import { AiOutlineTrophy } from "react-icons/ai";
import { BiCheckShield } from "react-icons/bi";

export default function CompraProtegida() {
  return (
    <>
      <Text color="#3483fa" fontSize="xs">
        <Icon width={4} height={4} color="blackAlpha.600" as={BiCheckShield} />
        Compra Protegida
      </Text>
      <Text color="#3483fa" fontSize="xs">
        <Icon
          width={4}
          height={4}
          color="blackAlpha.600"
          as={AiOutlineTrophy}
        />
        Mercado Puntos
      </Text>
    </>
  );
}
