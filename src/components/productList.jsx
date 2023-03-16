import { useSelector,useDispatch } from "react-redux";
import { getData } from "../redux/prod/action";

import { Card, Stack,Text,Image,Heading,CardHeader, CardBody, CardFooter,Link } from '@chakra-ui/react'


function ProductList() {
const fullData=useSelector((storeData)=>{
    return storeData.productReducer.shoes
})
const dispatch =useDispatch();

dispatch(getData())
// onClick={()=>{dispatch(getData(ele.id))}}

return(
    <div style={{padding:"40px"}}>
  <div style={{display:"flex", justifyContent:"Space-between"}} className="container1">
    <div><h2>Men's(1082)</h2></div>
    
    <div style={{gap:"30px"}}>
      <button>Hide Filters</button>
      <select placeholder='Sort By'>
        
      <option value='option2'>Sort By</option>
      <option value='option1'>Price: High-Low</option>
      <option value='option2'>Price: Low-High</option>
      </select>
    </div>
  </div>
  <div className="container2" style={{display:"flex",justifyContent:"space-between"}}>
     <div className="container21" style={{width:"250px"}}>
        <h4>Shoes</h4>
        <h4>Hoodies & Sweatshirts</h4>
        <h4>Trousers</h4>
        <h4>Jackets</h4>
        <h4>Tops & Tshirts</h4>
        <h4>Shorts</h4>
        <h4>Tracksuits</h4>
        <h4>Shocks</h4>
        <h4>Accesories & Equihpment</h4>
     </div>
     <div className="container22" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",padding:"10px"}}>
        {fullData.map((ele,i)=>{
            return( <div >

       


  <Card maxW='sm' >
  <CardBody >
    <Link href={`/product/${ele.id}`}>
    <Image  
    boxSize='300px'
      src={ele.Image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    </Link>
   
    <Stack mt='6' spacing='3'>
    <Text color='brown' >
      {ele.productcard__messaging}
      </Text>
      <Text size='sm'>{ele.Title}</Text>
      <Text color='grey' >
      {ele.Title1}
      </Text>
      <Text color='grey' >
      {ele.productcard__productcount}
      </Text>
      <Text  fontSize='2xl'>
      {ele.Price}
      </Text>
    </Stack>
  </CardBody>
  
</Card>
        </div>)

        })}
        
     </div>
  </div>
</div>
)
}

export default ProductList;