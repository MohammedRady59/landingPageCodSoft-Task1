import { Box, Button, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box
      px={{ base: 4, md: 10, lg: 30, xl: 40 }}
      textAlign={"center"}
      mt={50}
      py={20}
      bg={"gray.100"}
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
        Pellentesque suscipit fringilla libero eu.
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
        Get Demo
      </Button>
    </Box>
  );
}

export default About;
