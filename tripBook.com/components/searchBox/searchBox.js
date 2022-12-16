import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
const SearchBox = () => {
  return (
    <>
      <Box
        width={"100%"}
        backgroundColor={"#003580"}
        //  height={"200px"}
        height={{
          base: "150px",
          sm: "160px",
          md: "200px",
          lg: "200px",
          xl: "200px",
          "2xl": "200px",
        }}
        //  border={{ base:"8px solid red", sm:'5px solid green', md: '2px solid teal', lg: '2px solid black' , xl:'3px solid red' , '2xl':'4px solid grey' }}
        pt="35px"
      >
        <Box width={"95%"} margin={"auto"}>
          <Text
            color={"white"}
            fontSize={["20px", "25px", "30px", "45px"]}
            textAlign={"start"}
            fontWeight="bold"
          >
            Find your next stay
          </Text>
          <Text
            color={"white"}
            fontSize={["12px", "15px", "18px", "22px"]}
            textAlign={"start"}
          >
            Search low prices on hotels, homes and much more...
          </Text>
        </Box>
      </Box>
      <Box
        display={{
          base: "block",
          sm: "block",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
        width={{
          base: "",
          sm: "100%",
          md: "98%",
          lg: "",
          xl: "88%",
          "2xl": "90%",
        }}
        //  border={{ base:"8px solid red", sm:'5px solid green', md: '2px solid teal', lg: '2px solid black' , xl:'3px solid red' , '2xl':'4px solid grey' }}
        margin={"auto"}
        marginTop={"-20px"}
        backgroundColor={"white"}
        height={"auto"}
        border="4px solid #febb02"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon marginTop={"10px"} color={"gray.400"} />}
          />
          <Input
            type="tel"
            placeholder="Where are you going?"
            borderRight={"4px solid #febb02"}
            height="50px"
            borderRadius={"0px"}
          />
        </InputGroup>
        <Box display={"flex"}>
          <Input
            // borderColor={"yellow"}
            borderRight="0"
            borderRadius={"0px"}
            placeholder="Check-In"
            size="sm"
            type="date"
            aria-hidden={true}
            height={"auto"}
            // display={{ base:"block" , sm:"block" , md:"flex" , lg:"flex" , xl : "flex" , '2xl' : "flex"}}
          />{" "}
          <Input
            borderRight={"4px solid #febb02"}
            borderRadius={"0px"}
            borderLeft={"none"}
            placeholder="Check-Out"
            size="sm"
            type="date"
            height={"auto"}
            // display={{ base:"block" , sm:"block" , md:"flex" , lg:"flex" , xl : "flex" , '2xl' : "flex"}}
          />
        </Box>
        {/*  */}
        <Pop />
        <Button
          paddingLeft={"60px"}
          paddingRight={"60px"}
          height={"50px"}
          colorScheme="blue"
          fontSize={{ sm: "20px" }}
          width={{
            base: "100%",
            sm: "100%",
            md: "100px",
            lg: "100px",
            xl: "100px",
            "2xl": "100px",
          }}
          borderRadius="0"
          fontWeight={"bold"}
        >
          Search
        </Button>
      </Box>
    </>
  );
};

export default SearchBox;

function Pop() {
  const [adult, setAdult] = useState(0);
  const [children, setchildren] = useState(0);
  const [room, setroom] = useState(0);
  const handleIncre = () => {
    setAdult((prev) => prev + 1);
  };

  const handledec = () => {
    setAdult((prev) => prev - 1);
  };
  const handlechildrenIncre = () => {
    setchildren((prev) => prev + 1);
  };
  const handlechildrenDec = () => {
    setchildren((prev) => prev - 1);
  };
  const handleroomIncre = () => {
    setroom((prev) => prev + 1);
  };
  const handleroomDec = () => {
    setroom((prev) => prev - 1);
  };
  return (
    <Popover>
      <PopoverTrigger>
        <Box
          display={{
            base: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "true",
            "2xl": "flext",
          }}
          w="auto"
          justifyContent={"space-evenly"}
          alignItems="center"
          textAlign={"center"}
          borderRight={"4px solid #febb02"}
          gap="10px"
        >
          <Text>{adult} adult</Text>
          <Text>{children} children</Text>
          <Text>{room} rooms</Text>
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader color={"white"}>Header</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Adult</Text>
            <Button
              disabled={adult === 0}
              onClick={handledec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{adult}</Text>
            <Button
              onClick={handleIncre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Children</Text>
            <Button
              disabled={children === 0}
              onClick={handlechildrenDec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{children}</Text>
            <Button
              onClick={handlechildrenIncre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Room</Text>
            <Button
              disabled={room === 0}
              onClick={handleroomDec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{room}</Text>
            <Button
              onClick={handleroomIncre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}