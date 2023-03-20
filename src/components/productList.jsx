import { useSelector,useDispatch } from "react-redux";
import { getData } from "../redux/prod/action";
import { productAction } from "../redux/prod/action";

import { useEffect,useState } from "react";
import { Card, Stack,Text,Image,Heading,CardHeader, CardBody, CardFooter,Link,Box } from '@chakra-ui/react'


function ProductList() {

const [page,setPage]=useState(1)
const dispatch =useDispatch();
useEffect(()=>{
  handleFilter()
},[page])


const fullData=useSelector((storeData)=>{
  return storeData.productReducer.shoes
})
console.log("fullData",fullData)
//       axios.get(`http://localhost:8080/shoes`)

// http://localhost:8080/shoes?Title1_like=Men%27s%20Shoes

// http://localhost:8080/shoes?Title1_like=Women%27s%20Shoes



function handleMen(){
  getData(`http://localhost:8080/shoes?_page=${page}&_limit=9&Title1_like=Men%27s%20Shoes`)
}

function handleWomen(){
  getData(`http://localhost:8080/shoes?_page=${page}&_limit=9&Title1_like=Women%27s%20Shoes`)
}




function handleFilter(){
  let sorting=document.getElementById("filter").value

  console.log("sorting",sorting)
if(sorting=="htl"){
  getData(`http://localhost:8080/shoes?_page=${page}&_limit=9&_sort=Price&_order=desc`)
}
else if(sorting=="lth"){
  getData(`http://localhost:8080/shoes?_page=${page}&_limit=9&_sort=Price&_order=asc`)
}
// else if(sorting=="option"){
//   getData(`http://localhost:8080/shoes`)
// }
else{
  getData(`http://localhost:8080/shoes?_page=${page}&_limit=9`)
}

// else if(handleMen){
//   getData(`http://localhost:8080/shoes?Title1_like=Men%27s%20Shoes`)
// }
// else if(handleWomen){
//   getData(`http://localhost:8080/shoes?Title1_like=Women%27s%20Shoes`)
// }
}
async function getData(URL){
  let res=await fetch(URL);
  
  let data=await res.json();
 
  
  console.log(data);
  dispatch(productAction(data))
}







return(
    <div style={{padding:"40px"}}>
  <div style={{display:"flex", justifyContent:"Space-between"}} className="container1">
    <div><h2>Men's(1082)</h2></div>
    
    <div style={{gap:"30px"}}>
      <button>Hide Filters</button>

      <select id="filter" placeholder='Sort By' onChange={handleFilter}>
        
      <option value='option' >Sort By</option>
      <option value='htl'>Price: High-Low</option>
      <option value='lth'>Price: Low-High</option>
      </select>
    </div>
  </div>
  <div className="container2" style={{display:"flex",justifyContent:"space-between"}}>
     <div style={{width:"250px"}}>
      <div><h4>Shoes</h4>
        <h4>Hoodies & Sweatshirts</h4>
        <h4>Trousers</h4>
        <h4>Jackets</h4>
        <h4>Tops & Tshirts</h4>
        <h4>Shorts</h4>
        <h4>Tracksuits</h4>
        <h4>Shocks</h4>
        <h4>Accesories & Equihpment</h4></div>
        <hr/>
      <div>
        <div>
          <h4>Gender</h4>
        </div>
        <Stack >
          <Box> <input style={{width:"20px",height :"20px"}} id="men" type="checkbox" value="Men" onClick={handleMen}/><label>Men</label></Box>
       
          <Box> <input style={{width:"20px",height :"20px"}} id="women" type="checkbox" value="Women" onChange={handleWomen} /><label>Women</label></Box>
        </Stack>
      </div>


      <hr style={{marginTop:"30px",marginBottom:"30px"}}/>
      <div>
        <h4 style={{marginBottom:"20px"}} >Size</h4>
      <div >
        <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",borderRadius:"3px",margin:"6px"}}>UK 6</button>
      <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 6.5</button>
      <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 7</button>
      </div>

      <div >
        <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 7.5</button>
      <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 8</button>
      <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 8.5</button>
      </div>
      
      <div>
        <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 9</button>
        <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 9.5</button>
        <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 4</button>
        </div>

        <div>
        <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 9</button>
        <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 9.5</button>
        <button style={{width:"60px",height:"40px",background:"white",border:" solid grey 1px",margin:"6px",borderRadius:"3px"}}>UK 10</button>
        
      </div>
    </div>
    <hr style={{marginTop:"40px",marginBottom:"30px"}}/>

    <div>
        <h4 style={{marginBottom:"20px"}} >Size</h4>
      <div >
        <button style={{width:"40px",height:"40px",background:"white", color:"white",border:" solid grey 1px",borderRadius:"50%",margin:"12px"}}>UK 6</button>
      <button style={{width:"40px",height:"40px",background:"black",color:"black",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 6.5</button>
      <button style={{width:"40px",height:"40px",background:"brown",color:"brown",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 7</button>
      </div>

      <div >
        
        <button style={{width:"40px",height:"40px",background:"blue",color:"blue",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 7.5</button>
      <button style={{width:"40px",height:"40px",background:"tomato",color:"tomato",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 8</button>
      <button style={{width:"40px",height:"40px",background:"green",color:"green",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 8.5</button>
      </div>
      
      <div>
        <button style={{width:"40px",height:"40px",background:"brown",color:"brown",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 9</button>
        <button style={{width:"40px",height:"40px",background:"yellow",color:"yellow",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 9.5</button>
        <button style={{width:"40px",height:"40px",background:"pink",color:"pink",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 4</button>
        </div>

        <div>
        <button style={{width:"40px",height:"40px",background:"red",color:"red",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 9</button>
        <button style={{width:"40px",height:"40px",background:"white",color:"white",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 9.5</button>
        <button style={{width:"40px",height:"40px",background:"black",color:"black",border:" solid grey 1px",margin:"12px",borderRadius:"50%"}}>UK 10</button>
        
      </div>
    </div>
    <hr style={{marginTop:"40px",marginBottom:"30px"}}/>
        
     </div>
     
     <div className="container22" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",padding:"10px"}}>

        {fullData.map((ele,i)=>{
            return( <div >

       


  <Card maxW='sm' >
  <CardBody  m="10px" mb="60px">
    <Link href={`/product/${ele.id}`}>
    <Image  
    boxSize='300px'
      src={ele.Image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    </Link>
   
    <Stack mt='2' spacing='3'>
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
      <Text  fontSize='2xl'>MRP : ₹ 
      {ele.Price}
      </Text>
    </Stack>
  </CardBody>
  
</Card>
        </div>)

        })}
        
     </div>
  </div>
  <div>
            <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>&nbsp;&nbsp;
            <button>{page}</button>&nbsp;&nbsp;
            <button  onClick={()=>setPage(page+1)}>Next</button>
        </div>
</div>
)
}

export default ProductList;