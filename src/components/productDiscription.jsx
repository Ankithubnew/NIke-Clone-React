import { useSelector,useDispatch } from "react-redux"
import { Card,Select, Center,Stack,Text,Image,Heading,CardHeader, CardBody, CardFooter,Link,Box,Spacer,Flex,Button ,ButtonGroup } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { idData } from "../redux/prod/action";
import { useEffect } from "react";

function ProductDiscription(){
    const dispatch =useDispatch();
    const { id } = useParams();

    const fullData=useSelector((storeData)=>{
        return storeData.productReducer.shoes
    })
    console.log("id",id)
    console.log( "fullData",fullData)


    // let Data=fullData.filter((ele,i)=>ele.id==id)
    // console.log("Data",Data)
   useEffect(()=>{
    dispatch(idData(id))
   
   },[])

   function addToBag(){
    
    const users=JSON.parse(localStorage.getItem("nikeprod"))||[];
      users.push(fullData)
      localStorage.setItem("nikeprod",JSON.stringify(users));
   }
 
    
   
    return(
        <div>
          
      
      <div>

<Flex>
      <Box
      w="180%"
      direction={{ base: 'column', sm: 'row' }}
       overflow='hidden'
      variant='outline'
      p='100px'

      // border="solid brown 5px"
     >
     <Image
 
  // maxW={{ base: '80%', sm: '160px' }}
  w="700px"
  src={fullData.Image}
  alt='Caffe Latte'
  borderRadius='lg'
/>
</Box>

<Stack>
  <Box mb="70px">
  <Box p='70px'>
    <Heading size='md'>{fullData.Title}</Heading>

    <Text py='2'>
     {fullData.Title1}
    </Text>
    <Text py='2'>
     {fullData.Price}
    </Text>
    <Text py='2' color="grey">
    incl. of taxes


    </Text>
    <Text  color="grey">
    

(Also includes all applicable duties)
    </Text>
    <Image
    boxSize='80px'
  src={fullData.Image}
  alt='Caffe Latte'
/>
<Flex>
    <Text>Select Size</Text>
    <Spacer/>
    <Text>Size Guide</Text>
   
  </Flex>
 
   


  

     <div>
      <div style={{}}>
        <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",borderRadius:"3px",margin:"4px"}}>UK 6</button>
      <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 6.5</button>
      <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 7</button>
      </div>

      <div ><button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 7.5</button>
      <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 8</button>
      <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 8.5</button>
      </div>
      
      <div>
        <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 9</button>
        <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 9.5</button>
        <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 4</button>
        </div>

        <div>
        <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 9</button>
        <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 9.5</button>
        <button style={{width:"120px",height:"50px",background:"white",border:" solid grey 1px",margin:"4px",borderRadius:"3px"}}>UK 10</button>
        </div>
     </div>
<button onClick={addToBag} style={{width:"100%",height:"60px",background:"black",color:"white",borderRadius:"20px",marginTop:"10px"}}>Add To Bag</button>
<button style={{width:"100%",height:"60px",background:"white",color:"black",borderRadius:"20px",marginTop:"10px",border:" solid grey 1px"}}>Favourite</button>
<Center mt="20px" fontSize='18px'color='grey'>This product is excluded from site promotions</Center>

    <Center fontSize='18px' color='grey'>and discounts.</Center>
    <Center  mt="50px"  fontSize='18px'>Get that speed you need, just like Russ. Inspired by Russell Westbrook's latest signature shoe, the outsole of the Jordan One Take 4 wraps up nearly to the midsole so you can start, stop or change direction in an instant. Meanwhile, energy-returning Zoom Air cushioning in the forefoot keeps you goin' (and goin' and goin').</Center>
<ul>
  <li>Colour Shown: Black/White/Metallic Gold</li>
  <li>Style: DO7192-007</li>

  
</ul>
  </Box>

  <Box pl="70px">
  <Stack>
 <Link fontSize="20px"color="Black"href={fullData.productcard__linkoverlay_URL}>View Product Details</Link>
       
    <select style={{width:"400px",height:"80px",border:"solid grey 1px",borderRight:"white",borderLeft:"white",fontSize:"20px"}}>
   

    
    <option>Delivery & Returns</option>
  </select>

  <select style={{width:"400px",height:"80px",border:"solid grey 1px",borderRight:"white",borderLeft:"white",marginTop:"-6px",fontSize:"20px"}}>
    <option>Reviews (0)</option>
  </select>

  <select style={{width:"400px",height:"60px",border:"solid grey 1px",borderRight:"white",borderLeft:"white",marginTop:"-6px",fontSize:"20px"}}>
    <option>Product Information</option>
  </select>
    </Stack>
  </Box>
  </Box>
</Stack>

</Flex>

      </div>
</div>
    )
}
export default ProductDiscription