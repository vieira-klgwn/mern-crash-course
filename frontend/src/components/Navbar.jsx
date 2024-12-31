import React from 'react'
import { Button, Container, Flex, HStack, Text, useColorMode} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiPlusSquare } from "react-icons/fi";
import { IoMoon, IoSunny } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Navbar = () => {
  const {colorMode,toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} > 
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row" }}>
        <Text
          fontSize = {{base: "22", sm: "28"}}
          fontWeight = {"bold"}
          textTransform={"uppercase"}
          textAlign={"Center"}
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          
        >
          <Link to={"/"}> Product Store 🛒</Link>
        </Text>
        <HStack spacing={4} alignItems={"center"}>
          <Link to={"/create"}>
          <Button>
            <FiPlusSquare fontSize={20}/>
          </Button>
          <Button onClick={toggleColorMode}>
             {colorMode =="light" ? <IoMoon /> : <LuSun />}
          </Button>
          
          </Link>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
