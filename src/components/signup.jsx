import React, { useRef, useState } from 'react'
import { Box,Select,RadioGroup,Radio,Icon, Button,FormHelperText, Center, Checkbox, FormControl, Heading, HStack, Image, Input, Stack, Text, VStack, ButtonGroup, InputGroup, InputRightElement,FormErrorMessage } from '@chakra-ui/react'
import {CheckIcon, EmailIcon,ViewIcon,ViewOffIcon} from "@chakra-ui/icons"
import {Link, useNavigate} from "react-router-dom"

export default function Signup() {
  const [input,setInput]=useState({
    email:"",
    password:"",
    fname:"",
    lname:"",
    dob:"",
    country:"",
    gender:""
  })
  const [error,setError]=useState({
    email:"true",
    password:"true",
    fname:"true",
    lname:"true",
    dob:"true",
    country:"true",
    gender:"true"
  })
  const [button,setButton]=useState("");
  const sbtnRef=useRef(null)
  const [buttonType, setButtonType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const handleViewPasswordClick=()=>{
    if(showPassword){
      setButtonType("password");
    }else{
      setButtonType("text");
    }
    setShowPassword(!showPassword);
  };
  const handleChange=(e)=>{
    if(e.target.name==="email"){
      const eregex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      setError({...error,[e.target.name]:eregex.test(e.target.value)})
    }else if(e.target.name==="password"){
      const pregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|\W)[a-zA-Z\d\W]{8,}$/g;
      setError({...error,[e.target.name]:pregex.test(e.target.value)})
    }else if(e.target.name==="fname"){
      const fregex=/^[a-zA-Z]{3,}$/;
      setError({...error,[e.target.name]:fregex.test(e.target.value)})
    }else if(e.target.name==="lname"){
      const lregex=/^[a-zA-Z]{2,}$/;
      setError({...error,[e.target.name]:lregex.test(e.target.value)})
    }else  if(e.target.name==="dob"){
      setError({...error,[e.target.name]:e.target.value!==""})
    }else if(e.target.name==="gender"){
      setError({...error,[e.target.name]:e.target.value!==""})
    }
    setInput({...input,[e.target.name]:e.target.value})
    // console.log(input);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(input);
    // sbtnRef.current.textContent = "PROCESSING...";
    if(input.email===""){
      setError({...error,email:false})
    }else if(input.password===""){
      setError({...error,password:false})
    }else if(input.fname===""){
      setError({...error,fname:false})
    }else if(input.lname===""){
      setError({...error,lname:false})
    }else if(input.dob===""){
      setError({...error,dob:false})
    }else if(input.gender===""){
      // setError({...error,gender:false})
    }else{
      console.log("sucess")
      sbtnRef.current.textContent = "PROCESSING...";
      const users=JSON.parse(localStorage.getItem("nikecred"))||[];
      users.push(input)
      localStorage.setItem("nikecred",JSON.stringify(users));
      
      setTimeout(()=>{
        sbtnRef.current.textContent="JOIN US"
        navigate("/login")
      },2000)
    }
  }
  return (
    <Box style={{fontFamily:"Helvetica",marginTop:"50px"}}>
      <Center>
      <Stack>
      <VStack as="header"  mt={8}>
        <Image boxSize="44px" h="17px" mb={4}  src='https://s3.nikecdn.com/unite/app/953/images/swoosh_black_2x.png' />
        {/*  */}
        {/* {console.log(!error.email)} */}
        <Heading style={{fontSize:"26px",lineHeight:"26px",fontWeight:"700"}} as="h1" mb="0" mt={4}  >BECOME A NIKE MEMBER</Heading>
        <VStack spacing={0} style={{marginBottom:"10px",marginTop:"30px"}} >
            <Text ml={5} mr={5}  style={{fontSize:"14px",lineHeight:"22px",color:"#8d8d8d"}} as="p" >Create your Nike Member profile and get first</Text>
            <Text   style={{fontSize:"14px",lineHeight:"22px",color:"#8d8d8d"}} >access to the very best of Nike products, inspiration</Text>
            <Text   style={{fontSize:"14px",lineHeight:"22px",color:"#8d8d8d"}} >and community.</Text>
            </VStack>
      </VStack>
      <form  onSubmit={handleSubmit}>
          <FormControl mt={5} mb={4} isInvalid={false}>
            <Stack spacing={4} >
            <FormControl isInvalid={!error.email}>
              <Input type="email" size="md" onChange={handleChange}  name='email' placeholder='Email address' />
              {!error.email ? <FormErrorMessage>Please enter a valid email address</FormErrorMessage>:""}
              </FormControl>
              <FormControl isInvalid={!error.password}>
              <InputGroup>
              <Input type={buttonType} size="md" onChange={handleChange} name='password' placeholder='Password' />
              <InputRightElement>
              <Button
                size="sm"
                onClick={handleViewPasswordClick}
                variant="ghost"
                _focus={{ boxShadow: "none" }}
              >
                {input.password!=="" ? showPassword ? <ViewOffIcon /> : <ViewIcon />:""}
              </Button>
              </InputRightElement>
              </InputGroup>
                <FormErrorMessage>Password does not meet minimum requirements.</FormErrorMessage>
                {!error.password?<FormHelperText>Minimum of 8 characters 1 uppercase letter</FormHelperText>:""}
                {!error.password?<FormHelperText>1 lowercase letter 1 number</FormHelperText>:""}
              {/* <Input type="password" size="md" onChange={handleChange}  name='password' placeholder='Password' /> */}
              </FormControl>
              <FormControl isInvalid={!error.fname}>
            <Input type="text" size="md" onChange={handleChange} name='fname' placeholder='First Name' />
            {!error.fname ? <FormErrorMessage>Please enter a valid first name</FormErrorMessage>:""}
            </FormControl>
            <FormControl isInvalid={!error.lname}>
            <Input type="text" size="md" onChange={handleChange} name='lname' placeholder='Last Name' />
              {!error.lname ? <FormErrorMessage>Please enter a valid last name.</FormErrorMessage>:""}
            </FormControl>
            <FormControl isInvalid={!error.dob}>
            <Input type="text" onClick={(e)=>{e.target.type="date"}} size="md" onChange={handleChange} name='dob' placeholder='Date of Birth' />
              {!error.dob ? <FormErrorMessage>Please enter a valid date of birth.</FormErrorMessage>:""}
            </FormControl>
            <Select name='country' defaultValue="IN" onChange={handleChange} placeholder='Country/Region'>
            <option value="AF" >Afghanistan</option>
            <option value="AL" >Albania</option>
            <option value="DZ" >Algeria</option>
            <option value="AS" >American Samoa</option>
            <option value="AD" >Andorra</option>
            <option value="AO" >Angola</option>
            <option value="AI" >Anguilla</option>
            <option value="AQ" >Antarctica</option>
            <option value="AG" >Antigua and Barbuda</option>
            <option value="AR" >Argentina</option>
            <option value="AM" >Armenia</option>
            <option value="AW" >Aruba</option>
            <option value="AU" >Australia</option>
            <option value="AT" >Austria</option>
            <option value="AZ" >Azerbaijan</option>
            <option value="BS" >Bahamas</option>
            <option value="BH" >Bahrain</option>
            <option value="BD" >Bangladesh</option>
            <option value="BB" >Barbados</option>
            <option value="BY" >Belarus</option>
            <option value="BE" >Belgium</option>
            <option value="BZ" >Belize</option>
            <option value="BJ" >Benin</option>
            <option value="BM" >Bermuda</option>
            <option value="BT" >Bhutan</option>
            <option value="BO" >Bolivia</option>
            <option value="BA" >Bosnia and Herzegovina</option>
            <option value="BW" >Botswana</option>
            <option value="BV" >Bouvet Island</option>
            <option value="BR" >Brazil</option>
            <option value="IO" >British Indian Ocean Territory</option>
            <option value="BN" >Brunei Darussalam</option>
            <option value="BG" >Bulgaria</option>
            <option value="BF" >Burkina Faso</option>
            <option value="BI" >Burundi</option>
            <option value="KH" >Cambodia</option>
            <option value="CM" >Cameroon</option>
            <option value="CA" >Canada</option>
            <option value="CV" >Cape Verde</option>
            <option value="KY" >Cayman Islands</option>
            <option value="CF" >Central African Republic</option>
            <option value="TD" >Chad</option>
            <option value="CL" >Chile</option>
            <option value="CN" >China Mainland </option>
            <option value="CX" >Christmas Island</option>
            <option value="CC" >Cocos (Keeling) Islands</option>
            <option value="CO" >Colombia</option>
            <option value="KM" >Comoros</option>
            <option value="CG" >Congo</option>
            <option value="CD" >Congo, The DRC</option>
            <option value="CK" >Cook Islands</option>
            <option value="CR" >Costa Rica</option>
            <option value="CI" >Cote d'Ivoire</option>
            <option value="HR" >Croatia</option>
            <option value="CU" >Cuba</option>
            <option value="CY" >Cyprus</option>
            <option value="CZ" >Czech Republic</option>
            <option value="DK" >Denmark</option>
            <option value="DJ" >Djibouti</option>
            <option value="DM" >Dominica</option>
            <option value="DO" >Dominican Republic</option>
            <option value="TL" >East Timor</option>
            <option value="EC" >Ecuador</option>
            <option value="EG" >Egypt</option>
            <option value="SV" >El Salvador</option>
            <option value="GQ" >Equatorial Guinea</option>
            <option value="ER" >Eritrea</option>
            <option value="EE" >Estonia</option>
            <option value="ET" >Ethiopia</option>
            <option value="FK" >Falkland Islands (Malvinas)</option>
            <option value="FO" >Faroe Islands</option>
            <option value="FJ" >Fiji</option>
            <option value="FI" >Finland</option>
            <option value="FR" >France</option>
            <option value="GF" >French Guiana</option>
            <option value="PF" >French Polynesia</option>
            <option value="TF" >French Southern Territories</option>
            <option value="GA" >Gabon</option>
            <option value="GM" >Gambia</option>
            <option value="GE" >Georgia</option>
            <option value="DE" >Germany</option>
            <option value="GH" >Ghana</option>
            <option value="GI" >Gibraltar</option>
            <option value="GR" >Greece</option>
            <option value="GL" >Greenland</option>
            <option value="GD" >Grenada</option>
            <option value="GP" >Guadeloupe</option>
            <option value="GU" >Guam</option>
            <option value="GT" >Guatemala</option>
            <option value="GN" >Guinea</option>
            <option value="GW" >Guinea-Bissau</option>
            <option value="GY" >Guyana</option>
            <option value="HT" >Haiti</option>
            <option value="HM" >Heard and McDonald Islands</option>
            <option value="VA" >Holy See (Vatican City State)</option>
            <option value="HN" >Honduras</option>
            <option value="HK" >Hong Kong</option>
            <option value="HU" >Hungary</option>
            <option value="IS" >Iceland</option>
            <option value="IN"   >India</option>
            <option value="ID" >Indonesia</option>
            <option value="IR" >Iran (Islamic Republic of)</option>
            <option value="IQ" >Iraq</option>
            <option value="IE" >Ireland</option>
            <option value="IL" >Israel</option>
            <option value="IT" >Italy</option>
            <option value="JM" >Jamaica</option>
            <option value="JP" >Japan</option>
            <option value="JO" >Jordan</option>
            <option value="KZ" >Kazakhstan</option>
            <option value="KE" >Kenya</option>
            <option value="KI" >Kiribati</option>
            <option value="KP" >Korea, D.P.R.O.</option>
            <option value="KR" >Korea, Republic of</option>
            <option value="KW" >Kuwait</option>
            <option value="KG" >Kyrgyzstan</option>
            <option value="LA" >Laos</option>
            <option value="LV" >Latvia</option>
            <option value="LB" >Lebanon</option>
            <option value="LS" >Lesotho</option>
            <option value="LR" >Liberia</option>
            <option value="LY" >Libyan Arab Jamahiriya</option>
            <option value="LI" >Liechtenstein</option>
            <option value="LT" >Lithuania</option>
            <option value="LU" >Luxembourg</option>
            <option value="MO" >Macau</option>
            <option value="MK" >Macedonia</option>
            <option value="MG" >Madagascar</option>
            <option value="MW" >Malawi</option>
            <option value="MY" >Malaysia</option>
            <option value="MV" >Maldives</option>
            <option value="ML" >Mali</option>
            <option value="MT" >Malta</option>
            <option value="MH" >Marshall Islands</option>
            <option value="MQ" >Martinique</option>
            <option value="MR" >Mauritania</option>
            <option value="MU" >Mauritius</option>
            <option value="YT" >Mayotte</option>
            <option value="MX" >Mexico</option>
            <option value="FM" >Micronesia, Federated States of</option>
            <option value="MD" >Moldova, Republic of</option>
            <option value="MC" >Monaco</option>
            <option value="MN" >Mongolia</option>
            <option value="ME" >Montenegro</option>
            <option value="MS" >Montserrat</option>
            <option value="MA" >Morocco</option>
            <option value="MZ" >Mozambique</option>
            <option value="MM" >Myanmar (Burma)</option>
            <option value="NA" >Namibia</option>
            <option value="NR" >Nauru</option>
            <option value="NP" >Nepal</option>
            <option value="NL" >Netherlands</option>
            <option value="NC" >New Caledonia</option>
            <option value="NZ" >New Zealand</option>
            <option value="NI" >Nicaragua</option>
            <option value="NE" >Niger</option>
            <option value="NG" >Nigeria</option>
            <option value="NU" >Niue</option>
            <option value="NF" >Norfolk Island</option>
            <option value="MP" >Northern Mariana Islands</option>
            <option value="NO" >Norway</option>
            <option value="OM" >Oman</option>
            <option value="PK" >Pakistan</option>
            <option value="PW" >Palau</option>
            <option value="PA" >Panama</option>
            <option value="PG" >Papua New Guinea</option>
            <option value="PY" >Paraguay</option>
            <option value="PE" >Peru</option>
            <option value="PH" >Philippines</option>
            <option value="PN" >Pitcairn</option>
            <option value="PL" >Poland</option>
            <option value="PT" >Portugal</option>
            <option value="PR" >Puerto Rico</option>
            <option value="QA" >Qatar</option>
            <option value="RE" >Reunion</option>
            <option value="RO" >Romania</option>
            <option value="RU" >Russian Federation</option>
            <option value="RW" >Rwanda</option>
            <option value="KN" >Saint Kitts and Nevis</option>
            <option value="LC" >Saint Lucia</option>
            <option value="VC" >Saint Vincent and the Grenadines</option>
            <option value="WS" >Samoa</option>
            <option value="SM" >San Marino</option>
            <option value="ST" >Sao Tome and Principe</option>
            <option value="SA" >Saudi Arabia</option>
            <option value="SN" >Senegal</option>
            <option value="RS" >Serbia</option>
            <option value="SC" >Seychelles</option>
            <option value="SL" >Sierra Leone</option>
            <option value="SG" >Singapore</option>
            <option value="SK" >Slovakia (Slovak Republic)</option>
            <option value="SI" >Slovenia</option>
            <option value="SB" >Solomon Islands</option>
            <option value="SO" >Somalia</option>
            <option value="ZA" >South Africa</option>
            <option value="GS" >South Georgia and the South Sandwich Islands</option>
            <option value="SS" >South Sudan</option>
            <option value="ES" >Spain</option>
            <option value="LK" >Sri Lanka</option>
            <option value="SH" >St. Helena</option>
            <option value="PM" >St. Pierre and Miquelon</option>
            <option value="SD" >Sudan</option>
            <option value="SR" >Suriname</option>
            <option value="SJ" >Svalbard and Jan Mayen Islands</option>
            <option value="SZ" >Swaziland</option>
            <option value="SE" >Sweden</option>
            <option value="CH" >Switzerland</option>
            <option value="SY" >Syrian Arab Republic</option>
            <option value="TW" >Taiwan</option>
            <option value="TJ" >Tajikistan</option>
            <option value="TZ" >Tanzania, United Republic of</option>
            <option value="TH" >Thailand</option>
            <option value="TG" >Togo</option>
            <option value="TK" >Tokelau</option>
            <option value="TO" >Tonga</option>
            <option value="TT" >Trinidad and Tobago</option>
            <option value="TN" >Tunisia</option>
            <option value="TR" >Turkey</option>
            <option value="TM" >Turkmenistan</option>
            <option value="TC" >Turks and Caicos Islands</option>
            <option value="TV" >Tuvalu</option>
            <option value="UM" >U.S. Minor Islands</option>
            <option value="UG" >Uganda</option>
            <option value="UA" >Ukraine</option>
            <option value="AE" >United Arab Emirates</option>
            <option value="GB" >United Kingdom</option>
            <option value="US" >United States</option>
            <option value="UY" >Uruguay</option>
            <option value="UZ" >Uzbekistan</option>
            <option value="VU" >Vanuatu</option>
            <option value="VE" >Venezuela</option>
            <option value="VN" >Vietnam</option>
            <option value="VG" >Virgin Islands (British)</option>
            <option value="VI" >Virgin Islands (U.S.)</option>
            <option value="WF" >Wallis and Futuna Islands</option>
            <option value="EH" >Western Sahara</option>
            <option value="YE" >Yemen</option>
            <option value="ZM" >Zambia</option>
            <option value="ZW" >Zimbabwe</option>
            </Select>
            <FormHelperText><Text style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d",marginLeft:"30px"}}>Get a Nike Member Reward every year on your Birthday.</Text></FormHelperText>
            <FormControl isInvalid={!error.gender}>
              <ButtonGroup variant='outline'  justify="space-between" spacing={6}>
                <Button w={180} name="gender"  border={button==="male"?"1px solid black":"1px solid #e7e7e7"} leftIcon={button==="male"?<CheckIcon/>:""}  onClick={(e)=>{setInput({...input,[e.target.name]:e.target.value})
                setButton("male")}} value="male"  size="md">Male</Button>
                <Button w={180} name="gender" border={button==="female"?"1px solid black":"1px solid #e7e7e7"} leftIcon={button==="female"?<CheckIcon/>:""} onClick={(e)=>{setInput({...input,[e.target.name]:e.target.value})
                setButton("female")}} value="female" size="md">Female</Button>
              </ButtonGroup>
              {!error.gender ? <FormErrorMessage>Please select a preference.</FormErrorMessage>:""}
            </FormControl>
            <HStack  style={{marginTop:"30px"}} >
            <Checkbox colorScheme="gray" size="lg" >
              <VStack spacing={0}  >
              <Text style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d",marginLeft:"10px"}} as="p" >Sign up for emails to get updates from Nike on</Text>
              <Text style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d",marginLeft:"-10px"}} as="p" >products, offers and your Member benefits</Text>
              </VStack>
            </Checkbox>
            </HStack>
            <VStack spacing={1} style={{marginBottom:"10px",marginTop:"30px"}} >
            <Text ml={5} mr={5}  style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d"}} as="p" >By creating an account, you agree to Nike's <Text as='u'>Privacy Policy</Text></Text>
            <Text ml={5} mr={5}  style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d"}}  >and <Text as="u" >Terms of Use.</Text></Text>
            </VStack>
            <Button ref={sbtnRef} type='submit' style={{backgroundColor:"black",color:"white"}} variant='solid'>JOIN US</Button>
            </Stack>
          </FormControl>
      </form>
      <Text mt={8} align="center" style={{fontSize:"13px",lineHeight:"14px",color:"#8d8d8d"}}>Already a Member?<Link to="/login"><Text as='u' style={{color:"black"}}  >Sign In</Text></Link> </Text>
      </Stack>
      </Center>
    </Box>
  )
}
