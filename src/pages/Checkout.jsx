
// import { CheckoutOrderSummary } from "../components/checkout/CheckoutOrderSummary";
import { CheckoutForm } from "../components/checkout/CheckoutForm";
import { Box,Input } from "@chakra-ui/react";

export const Checkout = ({ onClick }) => {

    return (
        <>
            <Box
                p={'20px'}
                my={'30px'}
                mx={'auto'}
                maxW={'1200px'}
                display={'grid'}
                gap={['40px', '40px', '40px', '10%', '10%']}
                gridTemplateColumns={['100%', '100%', '100%', '55% 35%', '60% 30%']}
            >
                <CheckoutForm  />

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
                Continue
            </Input>
            </Box>
        </>
    );
};