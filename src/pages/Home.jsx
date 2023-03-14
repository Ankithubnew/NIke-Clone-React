import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import vid from "../assets/Nike-video.mp4";
import { ClothSection } from "../components/home/ClothSection";
import { getClothData, getShoeData } from "../redux/features/home/actions";
import { Error } from "../components/loading/Error.jsx";
import { Loading } from "../components/loading/Loading.jsx";


function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, clothData } = useSelector(
    (state) => state.homeReducer
  );
  const handleSection = () => {
    navigate("/allProducts");
  };

  const handlePath = () => {
    navigate("/allProducts");
  };

  useEffect(() => {
    dispatch(getClothData());
    dispatch(getShoeData());
  }, []);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <Box width={"100%"}>
      <Box width={"89%"} m="auto" objectFit={"cover"}>
  <Image mb
    src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1077,c_limit/0ee6e720-f5e4-4ef4-a8fe-9997e16879c5/nike-just-do-it.jpg"
    alt="image" style={{ marginBottom: '20px' }}
  />
  
</Box>
<Box
        width={"89%"}
        m={"auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={["left", "left", "left", "center"]}
        justifyContent={"center"}
        mt={6}
        mb={9}
        textAlign={["left", "left", "left", "center"]}
      >
        <Box>
          <Text mb={-3}>Nike Invincible</Text>
          <Heading
            letterSpacing={"-3px"}
            fontSize={"72px"}
            fontFamily={"heading"}
          >
            FEEL IT TO BELIEVE IT
          </Heading>
          <Text>
            Introducing Lightweight ZoomX cushioning through every--run in the
            Nike Incincible 3.
          </Text>
        </Box>
        <HStack mt={5}>
          <Button
            bgColor={"black"}
            color={"white"}
            p={"6px 20px"}
            borderRadius={30}
            alignItems={"center"}
            fontWeight={0}
            _hover={{
              bgColor: "black",
            }}
            onClick={handlePath}
          >
            Shop
          </Button>
          <Button
            bgColor={"black"}
            color={"white"}
            p={"6px 20px"}
            borderRadius={30}
            alignItems={"center"}
            fontWeight={0}
            _hover={{
              bgColor: "black",
            }}
          >
            Watch
          </Button>
        </HStack>
      </Box>
      

      <Box width={"89%"} m="auto" objectFit={"cover"}>
        <AspectRatio ratio={1.92 / 1}>
          <video
            autostart="autostart"
            autoPlay="autoPlay"
            preload="auto"
            role="application"
            tabIndex="-1"
            loop={"active"}
            playsInline={"playInline"}
          >
            <source src={vid} type="video/mp4"></source>
          </video>
        </AspectRatio>
      </Box>
      <Box
        width={"89%"}
        m={"auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={["left", "left", "left", "center"]}
        justifyContent={"center"}
        mt={6}
        mb={9}
        textAlign={["left", "left", "left", "center"]}
      >
        <Box>
          <Text mb={-3}>Phantom GX 'Link'</Text>
          <Heading
            letterSpacing={"-2px"}
            fontSize={"68px"}
            fontFamily={"heading"}
            fontWeight={"bold"}
          >
           MORE COLOR.
          </Heading>
          <Heading
            letterSpacing={"-2px"}
            fontSize={"68px"}
            fontFamily={"heading"}
            fontWeight={"bold"}
          >
           MORE PRECISION.
          </Heading>
          <Text>
           Phontom GX's precision, powered by Gripknit.
          </Text>
        </Box>
        <HStack mt={5}>
          <Button
            bgColor={"black"}
            color={"white"}
            p={"6px 20px"}
            borderRadius={30}
            alignItems={"center"}
            fontWeight={0}
            _hover={{
              bgColor: "black",
            }}
            onClick={handlePath}
          >
            Shop
          </Button>
        </HStack>
      </Box>
      <Text
        m={"auto"}
        width={"89%"}
        fontSize={"24px"}
        textAlign={"left"}
        fontWeight={"500"}
        mb={[-5, 0, -5, "-87px", 0]}
      >
        Featuerd
      </Text>
      <Box
        display={"flex"}
        flexDirection={["column", "column", "row", "row"]}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        width={"90%"}
        m={"auto"}
        maxHeight={"max-content"}
      >
        <Box
          background={
            "url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/a57ccd32-6782-414c-bcd2-5a2ff23671c1/nike-just-do-it.png) center/contain no-repeat"
          }
          width={["100%", "100%", "50%", "50%"]}
          height={["280px", "380px", "400px", "650px"]}
          minHeight={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            color={"white"}
            wordWrap={"break-word"}
            width={["100%", "80%", "90%", "90%"]}
            height={["80%", "70%", "50%", "64%", "85%"]}
            textAlign="left"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <Text>Valentine's Day Looks</Text>
            <Text fontSize={"24px"}>Partner Up and Reach those Goals</Text>
            <HStack mt={5}>
              <Button
                fontWeight={0}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={handlePath}
              >
                Explore
              </Button>
              <Button
                fontWeight={0}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={handlePath}
              >
                Top 10 Gifts
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box
          background={
            "url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/c1c2541d-f4b2-4fc0-b12b-dec2514661c2/nike-just-do-it.png) center/contain no-repeat"
          }
          width={["100%", "100%", "50%", "50%"]}
          height={["280px", "380px", "400px", "650px"]}
          minHeight={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            color={"white"}
            wordWrap={"break-word"}
            width={["100%", "80%", "90%", "90%"]}
            height={["80%", "70%", "50%", "64%", "85%"]}
            textAlign="left"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <Text>Nike App Early Access</Text>
            <Text fontSize={"24px"}>Nike Air Dunk Jumbo</Text>
            <HStack mt={5}>
              <Button
                fontWeight={0}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={handlePath}
              >
                Get It First
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box>
        {clothData.map((data, index) => (
          <ClothSection handleSection={handleSection} key={index} {...data} />
        ))}
      </Box>
    </Box>
  );
}
export default Home;
