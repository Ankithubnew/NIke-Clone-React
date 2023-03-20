import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';

import { Checkout } from './pages/Checkout';
// import { Payment } from './pages/Payment';
// import { PaymentForm } from './components/checkout/PaymentForm';
// import { Payment } from './pages/Payment';
// import ModalComp from './components/checkout/ModalComp';


function App() {
  return (
    <ChakraProvider  >
      
     <Checkout/>
      {/* <Payment /> */}
      {/* <PaymentForm /> */}
      {/* <ModalComp /> */}
    </ChakraProvider>
  );
}

export default App;
