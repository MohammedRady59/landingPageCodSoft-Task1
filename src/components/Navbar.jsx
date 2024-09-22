import icon from "../assets/Images/icon.png";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Features", "Community", "Blog", "Pricing"];

const NavLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <Box
      as="a"
      fontSize={{ base: "12px", md: "17px" }}
      px={2}
      py={1}
      fontWeight={"medium"}
      /*       w={"100px"}
       */ rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position={"fixed"}
        inset={0}
        zIndex={40}
        h={16}
        bg={"white"}
        px={{ base: 4, md: 10, lg: 30, xl: 40 }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems={"center"} gap={2}>
              <Image src={icon} />
              <Text fontWeight={"bold"} fontSize={{ base: "17px", md: "25px" }}>
                Nextcent
              </Text>
            </Flex>
          </HStack>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Button color={"white"} bg={"green.400"}>
              Register Now
            </Button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
