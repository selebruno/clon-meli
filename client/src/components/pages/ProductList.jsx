import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Stack, Image } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom'
import { getProducts, searchUpdateFalse } from '../../redux/actions';
import Products from '../layout/Products';
import NotFound from '../layout/NotFound'


export default function ProductList() {

    const products = useSelector(state => state.products)
    const searchUpdate = useSelector(state => state.searchUpdate)
    const dispatch = useDispatch()
    

    
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    

    useEffect(() => {  
        dispatch(getProducts(query.get('search')));
        dispatch(searchUpdateFalse())
    },[searchUpdate]);
 
   

    return (
        <>
          <Image 
          src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635354560/banner_sq2hnb.png"
          />
        {     
            products.length > 0 ? 
            products.map(el => {
                return (
                     <Stack alignItems="left" marginLeft="50vh">          
                 <Products
                 id={el.items.map(item=> item.id)}
                 picture={el.items.map(item => item.picture)}
                 price={el.items.map(item => item.price.amount)}
                 title={el.items.map(item => item.title)}
                 free_shipping={el.free_shipping}
                 address={el.author.address}
                 />
                 </Stack>
                 )    
                })
                : 
                products.error?
                <NotFound />
                :
               <Stack 
               position="absolute" 
               top="20vh" 
               left="90vh" 
               width="3rem" 
               height="3rem" 
               marginTop="6vh">
                <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635287448/loading-buffering_x968rg.gif" />
              </Stack>
            }       
            </>            
    )
}
