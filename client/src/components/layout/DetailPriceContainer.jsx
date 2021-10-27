import React from "react";
import { Stack, Text, Icon, Button } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineDown,
  AiOutlineTrophy,
} from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BiCheckShield } from "react-icons/bi";

export default function DetailPriceContainer({
  condition,
  title,
  sold_quantity,
  categories,
  price,
  available_quantity,
}){
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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
    </Stack>
  );
}
