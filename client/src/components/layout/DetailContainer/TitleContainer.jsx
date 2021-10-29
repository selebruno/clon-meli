import React from "react";
import { AiOutlineHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Stack, Text, Icon } from "@chakra-ui/react";

export default function TitleContainer({
  condition,
  sold_quantity,
  title,
  categories,
}) {
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <>
      <Icon
        position="relative"
        width={6}
        height={6}
        cursor="pointer"
        color="#3483fa"
        top="4rem"
        left="15.5rem"
        as={AiOutlineHeart}
      />
      <Text color="blackAlpha.600" fontSize="sm">
        {condition === "new" ? "Nuevo" : "Usado"} | {sold_quantity} vendidos
      </Text>
      <Text
        maxWidth="85%"
        fontWeight="medium"
        fontSize="xl"
        lineHeight="shorter"
      >
        {" "}
        {title}
      </Text>
      <Stack direction="row" cursor="pointer" alignItems="center" spacing={1}>
        <Icon color="#3483fa" as={AiFillStar} />
        <Icon color="#3483fa" as={AiFillStar} />
        <Icon color="#3483fa" as={AiFillStar} />
        <Icon color="#3483fa" as={AiFillStar} />
        <Icon color="#3483fa" as={AiOutlineStar} />
        <Text color="blackAlpha.600" fontSize="sm">
          {randomInteger(1, 20)} opiniones
        </Text>
      </Stack>
      {sold_quantity >= 150 ? (
        <Stack direction="row" alignItems="center">
          <Text
            cursor="pointer"
            color="white"
            backgroundColor="#f73"
            paddingLeft={1}
            fontWeight="semibold"
            borderRadius="sm"
            width="5.5rem"
            fontSize="xs"
          >
            MÁS VENDIDO
          </Text>
          <Text cursor="pointer" color="#3483fa" fontSize="xs">
            {randomInteger(1, 12)}º en {categories}
          </Text>
        </Stack>
      ) : null}
    </>
  );
}
