import React from 'react'
import { useSelector } from 'react-redux'
import {Container, Stack, Box, Image, Text, Input, Icon, StackDivider} from "@chakra-ui/react";


export default function ProductList() {

const products = useSelector(state => state.products)


    return (
        <Stack>
           
            {products.map( el => {
               return (   
                   <>   
                      <Stack direction="row" justifyContent='left' alignItems='center' marginTop='2rem' spacing={2}>
                         <Stack marginLeft='12.5rem' >
                          <Stack marginRight='2rem' margin={4} width='10rem' height='10rem'>
                              <Image  src={el.items.map(item => item.picture)} />
                          </Stack>
                          </Stack>
                          <Stack margin={4}  height='10rem'>
                              <Text fontSize='x-large' fontWeight='normal'>${el.items.map(item => item.price.amount)}</Text>
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
                          </Stack>
                      </Stack>
                   </>
                )
                })
            }
         
           
           
            
        </Stack>
    )
}
