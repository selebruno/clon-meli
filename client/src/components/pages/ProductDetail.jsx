import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getProductDetail, resetProduct } from '../../redux/actions'
import { Stack,Text,Image} from "@chakra-ui/react"
import DetailPriceContainer from "../layout/DetailPriceContainer";



export default function ProductDetail(props) {

    const dispatch = useDispatch()  
    const detail = useSelector(state => state.detail)
 
  

    useEffect(() => {
      dispatch(resetProduct())
      dispatch(getProductDetail(props.match.params.id)) 
    }, [dispatch,props.match.params.id]);


    return (
      <>
       {
         detail  ?
         <Stack 
         width="100%" 
         padding="2rem" 
         alignItems="center" 
         backgroundColor="#E6e6e5" 
         border="solid 1.3px #D6d6d6">
         <Stack 
         direction="row" 
         alignSelf="flex-start" 
         paddingLeft="7vh">
            { detail.categories.path.map((el,index,arr) =>          
          <Text 
          cursor="pointer" 
          fontSize="sm" 
          color="blackAlpha.600">{el.name + (index !== (arr.length-1) ? ' > ' : '')}</Text>
            )} 
         </Stack>
        <Stack 
        marginTop="20"  
        backgroundColor="white" 
        alignItems="center" 
        width="94%" 
        height="100%" 
        padding="2rem" 
        border="solid 1px #D6d6d6" 
        borderRadius="6">
          <Stack 
          direction="column" 
          position="absolute"
          left="18vh"
          spacing={12}
          >
         {detail && detail.item.pictures.slice(0,4).map(el =>
         <Stack  width="8vh" height="8vh">
          <Image src={el} />
          </Stack>
          )}
          </Stack>
        <Stack direction="row" >
          <Stack  
          spacing={2} 
          paddingRight="15vh"
          paddingLeft="15vh"  
          alignItems="center">
        <Image 
        marginBottom="1rem" 
        src={ detail && detail.item.pictures[0]}>
        </Image>
        <Stack 
        padding={4} 
        maxWidth="37rem" 
        border="solid 1px  #D6d6d6" 
        borderRadius="6">
        <Text 
        fontSize="sm" 
        color="blackAlpha.600">{detail.item.description && detail.item.description}</Text>
        </Stack>
        </Stack>
          <Stack>
           <DetailPriceContainer 
           condition={detail && detail.item.condition}
           sold_quantity={detail && detail.item.sold_quantity}
           title={ detail && detail.item.title}
           categories={detail.categories.name}
           price={detail.item.price.amount}
           available_quantity={detail.item.available_quantity}
           />
          </Stack>
        </Stack>
        </Stack>
       </Stack>
        :  
        <Stack 
        position="absolute" 
        top="20vh" left="90vh" 
        width="3rem" height="3rem" 
        marginTop="6vh">
        <Image src="https://res.cloudinary.com/dbduj98i3/image/upload/v1635287448/loading-buffering_x968rg.gif" />
       </Stack>
     
       }
       </>
      )
    };
    
    