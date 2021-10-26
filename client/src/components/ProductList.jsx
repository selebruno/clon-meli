import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {UnorderedList, Stack, ListItem, Image, Text} from "@chakra-ui/react";
import { Link,useLocation } from 'react-router-dom'
import { getProducts } from '../redux/actions';


export default function ProductList() {

const products = useSelector(state => state.products)
const dispatch = useDispatch()

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  console.log(query.get('search'))



  useEffect(() => {  
    dispatch(getProducts(query.get('search')))
  }, []);




    return (
        <Stack>          
         {     
             products.length > 0 ? products.map( el => {
               return (      
                   <Stack   padding={10}>
                   <Link to={"/items/" + el.items.map(item => item.id)}>
                      <Stack direction="row" justifyContent='left' alignItems='center' marginTop='2rem' spacing={30}>
                         <Stack marginLeft='12.5rem' >
                          <Stack  width='11rem' height='11rem'>
                              <Image  height="inherit" width="fit-content" src={el.items.map(item => item.picture)} />
                          </Stack>
                          </Stack>
                          <Stack margin={4}  height='10rem'>
                              <Text fontSize='x-large' fontWeight='normal'>${el.items.map(item => item.price.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))}
                              </Text>                           
                              <Text>{el.items.map(item => item.title)}</Text>
                             
                              {
                                  el.items.map(item =>{
                                      return(
                                           item.free_shipping ?
                                           <Text 
                                           fontSize='xs' 
                                           fontWeight='medium' 
                                           paddingLeft={0.5} 
                                           paddingRight={0.5}
                                           backgroundColor='#E6F7EE' 
                                           maxWidth='7.2rem' 
                                           color='#00A650'
                                           borderRadius='sm'
                                           >Llega gratis mañana</Text>
                                           : null
                                      )
                                  })
                              }
                               <Text  fontSize="sm" color="blackAlpha.600">{el.author.address}</Text>
                          </Stack>
                      </Stack>
                      </Link>
                      </Stack>
                )
                }) : 
               <Stack alignSelf="center" width="3rem" height="3rem" marginTop="6rem">
                <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635287448/loading-buffering_x968rg.gif" />
              </Stack>
                // <Stack marginTop={20} spacing={5} direction="row" alignItems="center" justifyContent="center">
                //     <Image height="5rem" width="6rem" src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635254238/busqueda_olgwwp.png"/>
                // <Text fontSize="20px" fontWeight="medium">
                //     No hay publicaciones que coincidan con tu búsqueda.
                //     <UnorderedList>
                //         <ListItem><Text fontSize="15px" fontWeight="light">Revisá la ortografía de la palabra.</Text></ListItem>
                //         <ListItem><Text fontSize="15px" fontWeight="light">Utilizá palabras más genéricas o menos palabras.</Text></ListItem>
                //         <ListItem><Text fontSize="15px" fontWeight="light">Navegá por las categorías para encontrar un producto similar</Text></ListItem>
                //     </UnorderedList>
           
                // </Text>
                // </Stack>
            } 
        
           
           
            
        </Stack>
    )
}
