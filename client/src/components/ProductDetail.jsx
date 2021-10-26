import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getProductDetail, resetProduct } from '../redux/actions'
import { Stack,Text,Image,Icon,Button } from "@chakra-ui/react"
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillStar,AiOutlineStar,AiOutlineDown,AiOutlineTrophy} from "react-icons/ai"
import {FiTruck} from "react-icons/fi"
import {AiFillThunderbolt} from "react-icons/ai"
import {RiArrowGoBackLine} from "react-icons/ri"
import {BiCheckShield} from "react-icons/bi"



export default function ProductDetail(props) {

    const dispatch = useDispatch()  
    const detail = useSelector(state => state.detail)
 
  

    useEffect(() => {
      dispatch(resetProduct())
      dispatch(getProductDetail(props.match.params.id)) 
    }, []);


    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } 


    return (
      <>
       {
         detail  ?
         <Stack width="100%" padding="2rem" alignItems="left" backgroundColor="#E6e6e5" marginTop="-2" border="solid 1.3px #D6d6d6">
         <Stack direction="row">
            { detail.categories.path.map((el,index,arr) =>          
          <Text cursor="pointer" fontSize="sm" color="blackAlpha.600">{el.name + (index != (arr.length-1) ? ' > ' : '')}</Text>
            )} 
         </Stack>
        <Stack marginTop="20" backgroundColor="white" alignItems="center" width="94%" height="100%" padding="1rem" border="solid 1px #D6d6d6" borderRadius="6">
        <Stack direction="row" >
          <Stack  spacing={2} paddingLeft={10} paddingRight={10} alignItems="center">
        <Image marginTop="2rem" marginBottom="1rem" src={ detail && detail.item.pictures[0]}></Image>
        <Stack padding={4} maxWidth="37rem" border="solid 1px  #D6d6d6" borderRadius="6">
        <Text fontSize="sm" color="blackAlpha.600">{detail.item.description}</Text>
        </Stack>
        </Stack>
          <Stack>
            <Stack paddingLeft="5" paddingRight="5" alignItems="left" marginTop="0.5rem" marginRight="0.7rem" width={320} borderRadius="6" height={detail.item.title.length > 45? 850 : 800} border="solid 1px #D6d6d6">
            <Icon
               position="relative"
               width={6}
               height={6}
               cursor="pointer"
               color="#3483fa"
               top="4rem" 
               left="15.5rem"
               as={AiOutlineHeart} />
            <Text color="blackAlpha.600" fontSize="sm">{detail && detail.item.condition === "new"? "Nuevo" : "Usado"}  | {detail && detail.item.sold_quantity} vendidos</Text>
            <Text
             maxWidth="85%" 
             fontWeight="medium" 
             fontSize="xl" 
             lineHeight="shorter"> {detail && detail.item.title} 
             </Text>
               <Stack direction="row"  cursor="pointer" alignItems="center" spacing={1}>
              <Icon color="#3483fa" as={AiFillStar}/>
              <Icon color="#3483fa" as={AiFillStar}/>
              <Icon color="#3483fa" as={AiFillStar}/>
              <Icon color="#3483fa" as={AiFillStar}/>
              <Icon color="#3483fa" as={AiOutlineStar}/>
              <Text color="blackAlpha.600" fontSize="sm">{randomInteger(1,20)} opiniones</Text>
              </Stack>
                {detail?.item.sold_quantity >= 150?  
              <Stack direction="row" alignItems="center">
                <Text cursor="pointer" color="white" backgroundColor="#f73" paddingLeft={1} fontWeight="semibold" borderRadius="sm" width="5.5rem" fontSize="xs">MÁS VENDIDO</Text>
                <Text  cursor="pointer" color="#3483fa" fontSize="xs">{randomInteger(1,12)}º en {detail.categories.name}</Text>
              </Stack>
                : null
              }
              <Stack spacing={0}>
              <Text fontSize="xx-large" fontWeight="light">${detail.item.price.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
              <Text maxWidth="80%">en 12x {detail && ((detail.item.price.amount)/12).toFixed(2)} pagando con Mercado Crédito</Text>
              <Text cursor="pointer" color="#3483fa" fontSize="small">Ver los medios de pago</Text>
              </Stack>
              <Stack  spacing={0}>
              <Stack direction="row" alignItems="center">
                <Text><Icon width={4} height={4} as={FiTruck}/> Envío a todo el país</Text><Text color="#00a650" fontWeight="extrabold" fontSize="sm" fontFamily="sans-serif"><Icon as={AiFillThunderbolt}/><em>FULL </em><Icon height={3} width={3} color="blackAlpha.600" as={AiOutlineDown}/></Text>
              </Stack>
                <Stack paddingLeft="5" spacing={0}>
                <Text  color="blackAlpha.600" fontSize="13">Conocé los tiempos y las formas de envío.</Text>
                <Text cursor="pointer" color="#3483fa" fontSize="xs">Calcular cuándo llega</Text>
                </Stack>
                </Stack>
                <Stack spacing={0}>
                <Stack justifyContent="center">
                <Text color="#00a650"><Icon as={RiArrowGoBackLine} color="#00a650" /> Devolución Gratis</Text>
                </Stack>
                <Stack paddingLeft="5" spacing={0}>
                <Text  color="blackAlpha.600" fontSize="13">Tenés 30 días desde que lo recibís..</Text>
                <Text cursor="pointer" color="#3483fa" fontSize="xs">Conocer más</Text>
                 </Stack>
                 </Stack>
                 <Stack paddingTop={5}>
                   <Text fontWeight="medium" fontSize="15">Stock disponible</Text>
                   <Stack direction="row" spacing={1} alignItems="center" paddingTop={3}>
                   <Text fontSize="15" fontWeight="normal">Cantidad: <b>1 unidad</b> <Icon height={3} width={3} color="#3483fa" cursor="pointer" as={AiOutlineDown}/></Text>
                   <Text fontSize="xs" color="blackAlpha.600">({detail.item.available_quantity} disponibles)</Text>
                   </Stack>
                   <Text  color="#00a650" fontSize="12.5" >Ahorrá en el envío comprando 4 o más unidades</Text>
                 </Stack>
                 <Stack paddingTop={3}>
                 <Button _hover={{backgroundColor:"#2968c8"}} backgroundColor="#3483fa" color="white">Comprar ahora</Button>
                 <Button _hover={{backgroundColor:"#d2e4fe"}} backgroundColor="#e4edfa" color="#3483fa">Agregar al carrito</Button>
                 <Button _hover={{backgroundColor:"#e9f2fe"}} backgroundColor="white" color="#3483fa">Comprar con Mercado Crédito</Button>
                 </Stack>
                   <Text color="#3483fa" fontSize="xs"><Icon width={4} height={4} color="blackAlpha.600" as={BiCheckShield}  />Compra Protegida</Text>
                   <Text color="#3483fa" fontSize="xs"><Icon width={4} height={4} color="blackAlpha.600" as={AiOutlineTrophy}  />Mercado Puntos</Text>                  
            </Stack>
        </Stack>
          </Stack>
          </Stack>
        </Stack>
        :  
        <Stack position="absolute" top="6rem" left="37rem" width="3rem" height="3rem" marginTop="6rem">
        <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635287448/loading-buffering_x968rg.gif" />
       </Stack>
       }
       </>
      )
    };
    
    