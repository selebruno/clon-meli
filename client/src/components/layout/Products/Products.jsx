import React from "react";
import { Stack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Products({
  id,
  picture,
  price,
  title,
  free_shipping,
  address,
}) {
  return (
    <Stack padding={10}>
      <Link to={`/items/${id}`}>
        <Stack
          direction="row"
          justifyContent="left"
          alignItems="center"
          marginTop="2rem"
          spacing={10}
        >
          <Stack>
            <Stack width="16rem" height="11rem" alignItems="center">
              <Image height="inherit" width="fit-content" src={picture} />
            </Stack>
          </Stack>
          <Stack margin={4} height="10rem">
            <Text fontSize="x-large" fontWeight="normal">
              ${price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
            </Text>
            <Text>{title}</Text>

            {free_shipping ? (
              <Text
                fontSize="xs"
                fontWeight="medium"
                paddingLeft={0.5}
                paddingRight={0.5}
                backgroundColor="#E6F7EE"
                maxWidth="7.2rem"
                color="#00A650"
                borderRadius="sm"
              >
                Llega gratis mañana
              </Text>
            ) : null}

            <Text fontSize="sm" color="blackAlpha.600">
              {address}
            </Text>
          </Stack>
        </Stack>
      </Link>
    </Stack>
  );
}
