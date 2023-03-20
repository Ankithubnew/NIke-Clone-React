
import { Box,Input } from "@chakra-ui/react";
import { PaymentForm } from "../components/checkout/PaymentForm";
// import { PaymentForm } from "../components/checkout/PaymentForm";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
  import { useState } from "react";


export const  Payment=()=>{
    const [e,setE]=useState(false);
    const onClick=()=>{
        setE(true);
    }
    return(
        <>
         <Box
                p={'20px'}
                my={'30px'}
                mx={'auto'}
                maxW={'1200px'}
                display={'flex'}
                gap={['40px', '40px', '40px', '10%', '10%']}
                gridTemplateColumns={['100%', '100%', '100%', '55% 35%', '60% 30%']}
                flexDirection={'column'}
            >
                {e?<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Application submitted!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for submitting your application. Our team will get back to you soon.
  </AlertDescription>
</Alert>:""}
                <PaymentForm  />

                {/* <CheckoutOrderSummary /> */}
                {/* <PlaceOrderBtn  /> */}
                <Input
                onClick={onClick}
                as={'button'}
                type={'submit'}
                h={"60px"}
                bg={'#edf2f7'}
                color={'black'}
                border={`1px solid #cecdce`}
                borderRadius={"50px"}
                w={"100%"}
                fontSize={"17px"}
                // mt={'20px'}
                _hover={{ borderColor: 'black' }}
            >
                Place Order
            </Input>
            </Box>
    </>
    );
};