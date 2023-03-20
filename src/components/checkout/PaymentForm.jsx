import { Box, Flex, Input, Text ,Select,Button,Checkbox} from "@chakra-ui/react";


export const PaymentForm = ({onChange}) => {
    return (
        <>
            <Box>
                <Text fontSize={'20px'} fontWeight={600} mb={'20px'}>Have a promo code?</Text>
                <Input onChange={onChange} type={'text'} name={'code'} placeholder={'City/Promo code*'} />
                <Text fontSize={'20px'} fontWeight={600} mb={'20px'}>How would you like to pay?</Text>
                <Select placeholder='Select option'>
  <option value='option1'>Card payment</option>
  <option value='option2'>Cash On Delivery</option>
</Select>
<Text fontSize={'20px'} fontWeight={600} mb={'20px'}>Enter your payment Details</Text>
<Flex flexDirection={'column'} gap={'20px'}>
<Input onChange={onChange} type={'text'} name={'code'} placeholder={'Name On Card'} size='md' />
<Input onChange={onChange} type={'text'} name={'code'} placeholder={'Card number*'} size='md'/>
<Flex gap={'20px'}>
                        <Input onChange={onChange} type={'text'} name={'MM/YY'} placeholder={'MM/YY'} />
                        <Input onChange={onChange} type={'number'} name={'cvv'} placeholder={'CVV'} />
                    </Flex>
                    <Checkbox >
                    By clicking Place Order, you agree to the eShopWorld Terms and Conditions.
                    </Checkbox>
                    </Flex>
            </Box>
           
        </>
    );
};