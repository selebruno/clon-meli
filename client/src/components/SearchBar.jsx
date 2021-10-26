import React, { useState } from "react";
import {Container, Stack, Box, Image, Text, Input, Icon, StackDivider,Button} from "@chakra-ui/react";
import {AiOutlineSearch,AiOutlineDown} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {IoCartOutline} from "react-icons/io5"
import { Link,useHistory } from 'react-router-dom'
import { resetDetail, resetProduct } from "../redux/actions";
import { useDispatch } from "react-redux";





export default function SearchBar() {

    const dispatch = useDispatch()
    const history = useHistory()
    const [input,setInput] = useState("")
 

    function handleChange(event){
        setInput(event.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(resetDetail())
        history.push(`/items?search=${input}`)
    }

    function handleReset(e){
      dispatch(resetProduct())
    }

    return (
      <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <Box 
        backgroundColor="primary.500" 
        paddingTop={3}
        paddingBottom={1.5} 
        boxShadow="sm">
        <Container  maxWidth="container.xl" >
          <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={12} flex={1}>
            <Link to='/'>
                <Image 
                cursor="pointer"
                onClick={(e)=> handleReset(e)}
                src="https://res.cloudinary.com/dbduj98i3/image/upload/v1634924370/logo_y1ctl4.png"
                objectFit="contain" 
                height={8}
                />
             </Link>
             <Stack 
                padding={1} 
                boxShadow="md"
                borderRadius="sm"
                backgroundColor="white"
                maxWidth={600}
                maxHeight="2.5rem"
                width="100%" 
                direction="row" 
                alignItems="center"
                divider={<StackDivider />}>
                <Input
                onChange={(e)=>handleChange(e)}
                paddingX={2}
                fontSize="14px"
                placeholder="Buscar productos,marcas y más..."
                fontWeight="thin"
                variant="unstyled"/>
                <Button type="submit" backgroundColor="transparent" width="1rem" _hover="backgroundColor=transparent">
                <Icon
                as={AiOutlineSearch} 
                cursor="pointer"  
                width={6} 
                height={5} 
                color="gray.400">
                </Icon> 
              </Button>
            </Stack>
            </Stack>
            <Stack 
            direction="row" 
            alignItems="center" 
            color="blackAlpha.700" 
            spacing={3}>
              <Image 
              src="https://res.cloudinary.com/dbduj98i3/image/upload/v1634935208/D_NQ_877425-MLA47306668299_082021-OO_xlu2tw.webp" 
              height="2.2rem"
              width="19rem"
              />
            </Stack>
          </Stack>
           <Stack  direction="row" justifyContent="space-between" alignItems="baseline">
           <Stack  direction="row" spacing={12} alignItems="baseline" >
             <Stack alignItems="center" direction="row" spacing={1}>
               <Icon color="blackAlpha.800" cursor="pointer"  as={GoLocation} width={6} height={6}/>
               <Stack spacing={0} >
                 <Text lineHeight="normal" fontSize="11" color="blackAlpha.500">Enviar a </Text>
                 <Text  lineHeight="normal"  fontSize="12.5px">Rafaela,Vieytes 14</Text>
               </Stack>
             </Stack>
             <Stack cursor="pointer" direction="row" fontSize="12.5px" color="blackAlpha.600" spacing={5}>
               <Text>Categorias <Icon height={3} width={3} as={AiOutlineDown}/></Text>
               <Text>Ofertas</Text>
               <Text>Historial</Text>
               <Text>Supermercado</Text>
               <Text>Moda</Text>
               <Text>Vender</Text>
               <Text>Ayuda</Text>
             </Stack>
            </Stack>
             <Stack  cursor="pointer" direction="row" spacing={6} color="blackAlpha.700" fontSize="12.5px" alignItems="center">
               <Text>
                 Creá tu cuenta
               </Text>
               <Text>
                 Ingresá
               </Text>
               <Text>
                 Mis compras
               </Text>
               <Icon as={IoCartOutline} width={6} height={6}/>
               </Stack>
           </Stack>
          </Stack>
        </Container>
          </Box>
        <Box>
        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          </Container>
        </Box>
        </form>
      </>
  );
};
