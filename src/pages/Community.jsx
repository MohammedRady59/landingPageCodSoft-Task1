import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import photo from "../assets/Images/rafiki.svg";

function Community() {
  return (
    <Box mt={"50px"} px={{ base: 4, md: 10, lg: 30, xl: 40 }}>
      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "center", lg: "start" }}
        >
          <Text
            fontSize={{
              base: "1.8rem",
              md: "2rem",
              lg: "2.1rem",
              xl: "2.5rem",
            }}
            fontWeight={"semibold"}
          >
            The unseen of spending three
            <br />
            <Box as="span" color={"green.400"}>
              years at Pixelgrade
            </Box>
          </Text>

          <Text fontSize={{ base: "0.7rem", md: "0.7rem", lg: "1rem" }} mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </Text>
          <Button
            zIndex={10}
            color={"white"}
            bg={"green.500"}
            _hover={{
              bg: "green.700",
            }}
            mt={4}
          >
            Register Now
          </Button>
        </Box>
        <Box display={{ base: "none", md: "flex" }}>
          <Image src={photo} alt="rafiki" w={"40rem"} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Community;
