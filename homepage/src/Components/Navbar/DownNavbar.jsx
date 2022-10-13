import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuDivider,
  SimpleGrid,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
const links = [
  {
    path: "#",
    title: "Cars",
  },
  {
    path: "#",
    title: "Motorcycles",
  },
  {
    path: "#",
    title: "Mobile Phones",
  },
  {
    path: "#",
    title: "For Sale: Houses & Apartments",
  },
  {
    path: "#",
    title: "Scooters",
  },
  {
    path: "#",
    title: "Commercial & Other Vehicles",
  },
  {
    path: "#",
    title: "For Rent: Houses & Apartments",
  },
];

const styles = {
  _hover: {
    color: "red",
  },
};

const DownNavbar = () => {
  return (
    <Box>
      <HStack mt="5px" border="1px solid green">
        <Box>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              // borderWidth="1px"
              // _hover={{ bg: "gray.400" }}
              // _expanded={{ bg: "blue.400" }}
              // _focus={{ boxShadow: "outline" }}
              fontWeight="700"
            >
              ALL CATEGORIES
              <ChevronDownIcon fontSize="20px" />
            </MenuButton>
            <MenuList sixe="2xl">
              <SimpleGrid
                columns={[1, 2, 4]}
                spacing="50px"
                mx="2rem"
                my="1rem"
              >
                {/* 1st column */}

                <Box>
                  <Box _hover={{ color: "#319795" }}>
                    <Text as="b">
                      <Link to="#">OLX Autos (Cars)</Link>
                    </Text>
                  </Box>
                  <Box my="1rem">
                    <Box
                      as="b"
                      _hover={{ color: "#319795" }}
                      mt="3rem"
                      mb="1rem"
                    >
                      <Link to="#">Properties</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">For Sale: Houses & Apartments</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">For Rent: Houses & Apartments</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Lands & Plots</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">For Rent: Shops & Offices</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">For Sale: Shops & Offices</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">PG & Guest Houses</Link>
                    </Box>
                  </Box>
                  {/* second row */}
                  <Box my="15px">
                    <Box
                      as="b"
                      _hover={{ color: "#319795" }}
                      mt="3rem"
                      mb="1rem"
                    >
                      <Link to="#">Mobiles</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Mobile Phones</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Accessories</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Tablets</Link>
                    </Box>
                  </Box>
                </Box>

                {/* 2nd column */}

                <Box>
                  <Box>
                    <Box as="b" _hover={{ color: "#319795" }} mb="1rem">
                      <Link to="#">Jobs</Link>
                    </Box>

                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Data entry & Back office</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Sales & Marketing</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">BPO & Telecaller</Link>
                    </Box>

                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Delivery & Collection</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Teacher</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Cook</Link>
                    </Box>

                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Other</Link>
                    </Box>
                  </Box>
                  <Box mt="1rem">
                    <Box as="b" _hover={{ color: "#319795" }} mb="15px">
                      <Link to="#">Bikes</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Motorcycles</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Scooters</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Bicycles</Link>
                    </Box>
                  </Box>
                </Box>

                {/* 3rd column */}

                <Box>
                  <Box mb="15px">
                    <Box mb="15px" as="b" _hover={{ color: "#319795" }}>
                      <Link to="#">Electronics & Appliances</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">TVs, Video - Audio</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Kitchen & Other Appliances</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Computers & Laptops</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Washing Machines </Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Cameras & Lenses</Link>
                    </Box>
                  </Box>

                  <Box>
                    <Box mb="15px" as="b" _hover={{ color: "#319795" }}>
                      <Link to="#">Electronics & Appliances</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">TVs, Video - Audio</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Kitchen & Other Appliances</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Computers & Laptops</Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Washing Machines </Link>
                    </Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Link to="#">Cameras & Lenses</Link>
                    </Box>
                  </Box>
                </Box>

                {/* 4th column */}

                <Box>
                  <Box>
                    <Text as="b">FOLLOW US</Text>
                  </Box>
                </Box>
              </SimpleGrid>
            </MenuList>
          </Menu>
        </Box>
        <HStack shadow="md" lineHeight="3rem">
          {links.map((link) => (
            <Box
              className="navbox"
              _hover={{ color: "#23e5db" }}
              spacing="15px"
            >
              <Link style={{ textDecoration: "none" }} to={link.path}>
                {link.title}
              </Link>
            </Box>
          ))}
        </HStack>
      </HStack>
    </Box>
  );
};

export default DownNavbar;
