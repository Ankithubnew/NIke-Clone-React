import {
  Box,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useMediaQuery,
} from "@chakra-ui/react";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nikeLogo } from "./constants/images";

import { Category, NavIcon } from "./navbar/CategoryAndIcon";
import { SideDrawer } from "./navbar/SideDrawer";


export const Navbar = () => {
  
  const [isLargerThanSm] = useMediaQuery("(min-width: 640px)");
  return (
    <>
      {isLargerThanSm && (
      <Box h={"36px"} bg={"#f5f5f5"}>
        <Center
          h={"36px"}
          justifyContent={"right"}
          mr={"40px"}
          fontSize={"16px"}
          cursor={"pointer"}
        > 
          <Menu >
          <MenuButton  px={2} size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }}>
                Find a Store |
              </MenuButton>
          <MenuButton  px={2} size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }}>
                Help |
              </MenuButton>
          <MenuButton  px={2} size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }}>
                Join us |
              </MenuButton >
      
              <MenuButton  px={2} size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }}>
                Actions |
              </MenuButton>
              <MenuButton size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }}>
                Sign In
              </MenuButton>
        </Menu>
         
         {/* Here paste your auth Sign up link below line is example*/}
         {/*!token ? <Auth /> : <Logout />*/}

          
        </Center>
      </Box>
     )}
     

      <Flex h={"60px"} flexDirection={"row"} px={"20px"}>
        <Box w={"80px"}>
          <Link to={"/"}>
            <Image src={nikeLogo} />
          </Link>
        </Box>

        <Spacer />

        <Box display={["none", "none", "flex", "flex", "flex"]}>
          <Category
            name={"/"}
            text={"Home"}
            link={"/"}
          />
          <Category
            
            name={"allProducts"}
            text={"All Products"}
            link={"/allProducts"}
          />
          <Category
            
            name={"men"}
            text={"Men"}
            link={"/men"}
          />
          <Category
            
            name={"women"}
            text={"Women"}
            link={"women"}
          />
          <Category
            
            name={"kids"}
            text={"Kids"}
            link={"/kids"}
          />
        </Box>

        <Spacer />

        <Center position={"relative"} mr={"10px"}>
          <Link to={"/favourite"}>
            <NavIcon iconName={RiHeartLine} />
          </Link>
        </Center>

        <Center position={"relative"} mr={"10px"}>
          <Link to={"/cart"}>
            <NavIcon iconName={RiShoppingBagLine} />
            <Box
              position={"absolute"}
              top={0.5}
              right={-0.4}
              borderRadius={"50%"}
              width={"25px"}
              height={"25px"}
              textAlign={"center"}
              zIndex={-1}
              bg='#c00'
              display={"flex"}
              flexDirection="column"
              alignContent={"center"}
              justifyContent={"center"}
              color={"white"}
              opacity={0.89}
            >
              <Text></Text>
            </Box>
          </Link>
        </Center>

        <Box display={["flex", "flex", "none", "none", "none"]}>
          <Center mr={"10px"}>
            <SideDrawer  />
          </Center>
        </Box>
      </Flex>

      <Box h={["10px", "20px", "30px", "40px", "40px"]}></Box>
    </>
  );
};

export default Navbar;
