import React, { useRef, useState } from 'react'
import { Box, Button, Center, Checkbox, FormControl, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import {Link, useNavigate} from "react-router-dom"

export default function Login() {
  const [input,setInput]=useState({
    email:"",
    password:""
  })
  const sbtnRef=useRef(null)
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
    // console.log(input);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(input);
    sbtnRef.current.textContent="PROCESSING..."
    setTimeout(()=>{
      sbtnRef.current.textContent="SIGN IN"
      navigate("/")

    },2000)

  }
  return (
    <Box style={{fontFamily:"Helvetica",marginTop:"50px"}}>
      <Center>
      <Stack>
      <VStack as="header"  mt={8}>
        <Image boxSize="44px" h="17px" mb={4}  src='https://s3.nikecdn.com/unite/app/953/images/swoosh_black_2x.png' />
        {/* <Box maxW='350px'><Heading as="h1" mt="0" >YOUR ACCOUNT  FOR EVERYTHING NIKE</Heading></Box> */}
        <Heading style={{fontSize:"26px",lineHeight:"26px",fontWeight:"700"}} as="h1" mb="0" mt={4}  >YOUR ACCOUNT FOR</Heading>
        <Heading style={{fontSize:"26px",lineHeight:"26px"}} as="h1" mt="0" >EVERYTHING NIKE</Heading>
      </VStack>
      
      <form  onSubmit={handleSubmit}>
          <FormControl mt={5} mb={4}>
            <Stack spacing={4} >
            <Input type="email" size="md" onChange={handleChange}  name='email' placeholder='Email address' />
            <Input type="password" size="md" onChange={handleChange} name='password' placeholder='Password' />
            <HStack justify="space-between" style={{marginTop:"30px"}} >
            <Checkbox colorScheme="gray" defaultChecked><Text style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d"}} as="p" >Keep me signed in</Text></Checkbox>
            <Text style={{fontSize:"13px",lineHeight:"14px",color:"#bcbcbc"}} as="p">Forgotten your password?</Text>
            </HStack>
            <VStack spacing={0} style={{marginBottom:"10px",marginTop:"30px"}} >
            <Text ml={5} mr={5}  style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d"}} as="p" >By logging in, you agree to Nike's <Text as='u'>Privacy Policy</Text> and</Text>
            <Text ml={5} mr={5}  style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d"}} as="u" >Terms of Use.</Text>
            </VStack>
            <Button ref={sbtnRef} type='submit' style={{backgroundColor:"black",color:"white"}} variant='solid'>SIGN IN</Button>
            
            </Stack>
          </FormControl>
      </form>
      <Text mt={8} align="center" style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d"}}>Not a Member ?<Link to="/signup"><Text as='u' style={{color:"black"}}  >Join Us</Text></Link> </Text>
      </Stack>
      </Center>
    </Box>
  )
}
