import React from "react";
import { Stack, Image, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Stack
      marginTop={20}
      spacing={5}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        height="5rem"
        width="6rem"
        src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635254238/busqueda_olgwwp.png"
      />
      <Text fontSize="25px" fontWeight="medium">
        No hay publicaciones que coincidan con tu búsqueda.
        <UnorderedList>
          <ListItem>
            <Text fontSize="15px" fontWeight="light">
              Revisá la ortografía de la palabra.
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="15px" fontWeight="light">
              Utilizá palabras más genéricas o menos palabras.
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="15px" fontWeight="light">
              Navegá por las categorías para encontrar un producto similar
            </Text>
          </ListItem>
        </UnorderedList>
      </Text>
    </Stack>
  );
}
