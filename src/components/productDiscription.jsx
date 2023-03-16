import { useSelector,useDispatch } from "react-redux"
import { Card, Stack,Text,Image,Heading,CardHeader, CardBody, CardFooter,Link } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { getData } from "../redux/prod/action";

function ProductDiscription(){
    const dispatch =useDispatch();
    const { id } = useParams();

    const fullData=useSelector((storeData)=>{
        return storeData.productReducer.shoes
    })
    console.log("id",id)
    console.log(fullData)

    //  useEffect(()=>{
    // dispatch(getData(id))
    //  },[])
   
   
    return(
        <div>
            <h1>{fullData.Price}</h1>




    {/* {fullData.map((ele,i)=>{

<Card
direction={{ base: 'column', sm: 'row' }}
overflow='hidden'
variant='outline'
>
<Image
  objectFit='cover'
  maxW={{ base: '100%', sm: '200px' }}
  src={ele.Image}
  alt='Caffe Latte'
/>

<Stack>
  <CardBody>
    <Heading size='md'>{ele.Title}</Heading>

    <Text py='2'>
     {ele.Title1}
    </Text>
    <Text py='2'>
     {ele.Price}
    </Text>
    <Text py='2'>
    incl. of taxes

(Also includes all applicable duties)
    </Text>
    <Text py='2'>
    

(Also includes all applicable duties)
    </Text>
  </CardBody>

  <CardFooter>
  <Image
  objectFit='cover'
  maxW={{ base: '100%', sm: '50px' }}
  src={ele.Image}
  alt='Caffe Latte'
/>
  </CardFooter>
</Stack>
</Card>
            })}
     */}






        </div>
    )
}
export default ProductDiscription