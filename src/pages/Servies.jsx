import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import logo1 from "../assets/Images/Logo (1).svg";
import logo2 from "../assets/Images/Logo (2).svg";
import logo3 from "../assets/Images/Logo (3).svg";
import logo4 from "../assets/Images/Logo (4).svg";
import logo5 from "../assets/Images/Logo (5).svg";
import logo6 from "../assets/Images/Logo (6).svg";
import logo7 from "../assets/Images/Logo (7).svg";
import icon1 from "../assets/Images/Icon (1).svg";
import icon2 from "../assets/Images/Icon (2).svg";
import icon3 from "../assets/Images/Icon (3).svg";
function Servies() {
  return (
    <Box mt={"50px"} px={{ base: 4, md: 10, lg: 30, xl: 40 }}>
      <Box textAlign={"center"} color={"#4D4D4D"}>
        <Text
          fontSize={{ base: "1.8rem", md: "2.5rem", lg: "2.8rem" }}
          fontWeight={"bold"}
        >
          Our Clients
        </Text>
        <Text fontSize={{ base: "0.8rem", md: "0.8rem", lg: "1.1rem" }}>
          We have been working with some Fortune 500+ clients
        </Text>
      </Box>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
        mt={50}
      >
        <Image src={logo1} w={14} h={14} />
        <Image src={logo2} w={14} h={14} />
        <Image src={logo3} w={14} h={14} />
        <Image src={logo4} w={14} h={14} />
        <Image src={logo5} w={14} h={14} />
        <Image src={logo6} w={14} h={14} />
        <Image src={logo7} w={14} h={14} />
      </Flex>
      <Box textAlign={"center"} mt={50} color={"#4D4D4D"}>
        <Text
          fontSize={{ base: "1.2rem", md: "2.5rem", lg: "2.8rem" }}
          fontWeight={"bold"}
          w={"50%"}
          mx={"auto"}
        >
          Manage your entire community in a single system
        </Text>
        <Text fontSize={{ base: "0.8rem", md: "0.8rem", lg: "1.1rem" }} mt={4}>
          Who is Nextcent suitable for?
        </Text>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={35}
      >
        <Box textAlign={"center"}>
          <Image src={icon1} w={14} h={14} mx={"auto"} />
          <Heading
            color={"#4D4D4D"}
            fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2.1rem" }}
          >
            Membership <br /> Organisations
          </Heading>
          <Text w={"50%"} mx={"auto"} mt={4}>
            Our membership management software provides full automation of
            membership renewals and payments
          </Text>
        </Box>
        <Box textAlign={"center"}>
          <Image src={icon2} w={14} h={14} mx={"auto"} />
          <Heading
            color={"#4D4D4D"}
            fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2.1rem" }}
          >
            National <br /> Associations
          </Heading>
          <Text w={"40%"} mx={"auto"} mt={4}>
            Our membership management software provides full automation of
            membership renewals and payments
          </Text>
        </Box>
        <Box textAlign={"center"}>
          <Image src={icon3} w={14} h={14} mx={"auto"} />
          <Heading
            color={"#4D4D4D"}
            fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2.1rem" }}
          >
            Clubs And <br /> Groups
          </Heading>
          <Text w={"50%"} mx={"auto"} mt={4}>
            Our membership management software provides full automation of
            membership renewals and payments
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Servies;
