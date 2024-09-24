import icon1 from "../assets/Images/Group 1.svg";
import icon2 from "../assets/Images/Group 2.svg";
import icon3 from "../assets/Images/Group 3.svg";
import icon4 from "../assets/Images/Group 4.svg";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

function Proudct() {
  return (
    <Box bg={"gray.100"} py={20} mt={50}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={{ base: "column", md: "row" }}
        px={{ base: 4, md: 10, lg: 30, xl: 40 }}
      >
        <Box>
          <Text
            fontSize={{
              base: "1.8rem",
              md: "2rem",
              lg: "2.1rem",
              xl: "2.5rem",
            }}
            fontWeight={"semibold"}
          >
            Helping a local
            <br />
            <Box as="span" color={"green.400"}>
              business reinvent itself
            </Box>
          </Text>

          <Text fontSize={{ base: "0.7rem", md: "0.7rem", lg: "1rem" }} mt={4}>
            We reached here with our hard work and dedication
          </Text>
        </Box>
        <Box p={8}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            wrap={"wrap"}
          >
            <Flex
              alignItems={"center"}
              w={{ base: "100%", md: "48%" }}
              gap={4}
              mt={10}
            >
              <Box>
                <Image src={icon1} alt="group1" w={"50px"} />
              </Box>
              <Box>
                <Text fontWeight={"bold"} fontSize={"1.1rem"}>
                  2,245,341
                </Text>
                <Text fontSize={"1.1rem"} mt={2}>
                  Members
                </Text>
              </Box>
            </Flex>
            <Flex
              alignItems={"center"}
              w={{ base: "100%", md: "48%" }}
              gap={4}
              mt={10}
            >
              <Box>
                <Image src={icon2} alt="group2" w={"50px"} />
              </Box>
              <Box>
                <Text fontWeight={"bold"} fontSize={"1.1rem"}>
                  46,328
                </Text>
                <Text fontSize={"1.1rem"} mt={2}>
                  Clubs
                </Text>
              </Box>
            </Flex>
            <Flex
              alignItems={"center"}
              w={{ base: "100%", md: "48%" }}
              gap={4}
              mt={10}
            >
              <Box>
                <Image src={icon3} alt="group3" w={"50px"} />
              </Box>
              <Box>
                <Text fontWeight={"bold"} fontSize={"1.1rem"}>
                  828,867
                </Text>
                <Text fontSize={"1.1rem"} mt={2}>
                  Event Bookings
                </Text>
              </Box>
            </Flex>
            <Flex
              alignItems={"center"}
              w={{ base: "100%", md: "48%" }}
              gap={4}
              mt={10}
            >
              <Box>
                <Image src={icon4} alt="group4" w={"50px"} />
              </Box>
              <Box>
                <Text fontWeight={"bold"} fontSize={"1.1rem"}>
                  1,926,436
                </Text>
                <Text fontSize={"1.1rem"} mt={2}>
                  Payments
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Proudct;
