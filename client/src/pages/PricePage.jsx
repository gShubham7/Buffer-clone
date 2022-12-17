import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import Navbar from "../components/prakash/Components/Navbar/Navbar";

const Pricing = () => {
  return (
    <Box marginBottom="30px">
      <Heading
        marginTop="40px"
        textAlign="center"
        fontWeight="600"
        fontSize={{ lg: "36px", sm: "28px" }}
        lineHeight={{ lg: "50px", sm: "38px" }}
      >
        Publish Flawlessly. <br /> Analyze Effortlessly. Engage Authentically.
      </Heading>
      <br />
      <Text
        textAlign="center"
        fontWeight="400"
        fontSize={{ lg: "32px", sm: "24px" }}
        lineHeight={{ lg: "45px", sm: "34px" }}
      >
        We’ve built simpler social media tools for busy people. Enjoy our free
        plan as <br /> you get started, or trial our full toolkit priced to make
        marketing your business <br /> on social affordable.
      </Text>
      <br />
      <br />
      <Box>
        <Center>
          <Tabs w="100%" isLazy>
            <Center>
              <TabList>
                <Tab>Monthly </Tab>
                <Tab>Yearly</Tab>
              </TabList>
            </Center>
            <TabPanels>
              {/* initially mounted */}
              <TabPanel>
                <Box
                  p="40px 40px"
                  display="flex"
                  mb="1%"
                  flexDirection={{ lg: "row", sm: "column" }}
                  justifyContent={{ lg: "space-between" }}
                  gap="5px"
                >
                  <Box border="solid 1px black" textAlign="left" p="15px">
                    <Heading>Free</Heading>
                    <br />
                    <Text>
                      For individuals and businesses getting started with social
                      media.
                    </Text>
                    <Heading>$ 0</Heading>
                    <Text>
                      Manage up to three channels Billed at<b> $0/year </b>
                    </Text>
                    <Button
                      marginTop={5}
                      colorScheme="blue"
                      bg="blue"
                      variant="solid"
                      w="100%"
                    >
                      Get Started
                    </Button>
                    <Text marginTop={2}>
                      <i class="bi bi-check-lg"></i>
                      Basic publishing tools
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Landing page builder
                    </Text>
                    <br />
                    <Link> See all features</Link>
                  </Box>
                  <Box textAlign="left" p="15px" border="solid 1px black">
                    <Heading>Essentials</Heading>
                    <br />
                    <Text>
                      For professionals who use publishing, analytics &
                      engagement tools.
                    </Text>
                    <Heading>
                      $ 6<Text fontSize="20px"> /month per channel </Text>
                    </Heading>
                    <br />
                    <Text>
                      Add additional channels for $5/month Billed at{" "}
                      <b> $72 $60/year</b>
                    </Text>
                    <Button
                      marginTop={5}
                      colorScheme="blue"
                      bg="blue"
                      variant="solid"
                      w="100%"
                    >
                      Try free for 14 Days
                    </Button>
                    <Text marginTop={2}>
                      <i class="bi bi-check-lg"></i>
                      Planning & publishing tools
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Analytics tools
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Engagement tools
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Landing page builder
                    </Text>
                    <br />
                    <Link> See all features</Link>
                  </Box>
                  <Box textAlign="left" p="15px" border="solid 1px black">
                    <Heading>Team</Heading>
                    <br />
                    <Text>
                      For teams who want unlimited user seating, collaboration,
                      and reporting.
                    </Text>
                    <Heading>
                      $ 12 <Text fontSize="20px"> /month per channel </Text>
                    </Heading>
                    <br />
                    <Text>
                      Add additional channels fo
                      <b>r $10 /month Billed at $144 $120/year</b>
                    </Text>
                    <Button
                      marginTop={5}
                      colorScheme="blue"
                      bg="blue"
                      variant="solid"
                      w="100%"
                    >
                      Try free for 14 Days
                    </Button>
                    <Text marginTop={2}>
                      <i class="bi bi-check-lg"></i>
                      Essentials features, plus:
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Unlimited team members & clients
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Draft collaboration tools
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Easy, clear exportable reports
                    </Text>
                    <br />
                    <Link> See all features</Link>
                  </Box>
                  <Box textAlign="left" p="15px" border="solid 1px black">
                    <Heading>Agency</Heading>
                    <br />
                    <Text>
                      For marketing agencies with 10 or more social channels.
                    </Text>
                    <Heading>
                      $ 120{" "}
                      <Text fontSize="20px"> /month for 10 channels </Text>
                    </Heading>
                    <br />
                    <Text>
                      Add additional channels for $10 $5/month Billed at{" "}
                      <b> $1440 $1200/year</b>
                    </Text>
                    <Button
                      marginTop={5}
                      colorScheme="blue"
                      bg="blue"
                      variant="solid"
                      w="100%"
                    >
                      Try free for 14 Days
                    </Button>
                    <Text marginTop={2}>
                      <i class="bi bi-check-lg"></i>
                      Team features, plus:
                      <br />
                      <i class="bi bi-check-lg"></i>
                      ustom access & permissions
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Agency-friendly pricing
                    </Text>
                    <br />
                    <Link> See all features</Link>
                  </Box>
                </Box>
              </TabPanel>
              {/* initially not mounted */}
              <TabPanel w="100%">
                <Box p="15px" display="flex" m="auto" gap={5}>
                  <Box textAlign="left" p="15px" border="solid 1px">
                    <Heading>Free</Heading>
                    <br />
                    <Text>
                      For individuals and businesses getting started with social
                      media.
                    </Text>
                    <Heading>$ 0</Heading>
                    <Text>
                      Manage up to three channels Billed at<b> $0/year </b>
                    </Text>
                    <Button
                      marginTop={5}
                      colorScheme="blue"
                      bg="blue"
                      variant="solid"
                      w="100%"
                    >
                      Get Started
                    </Button>
                    <Text marginTop={2}>
                      <i class="bi bi-check-lg"></i>
                      Basic publishing tools
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Landing page builder
                    </Text>
                    <br />
                    <Link> See all features</Link>
                  </Box>
                  <Box textAlign="left" p="15px" border="solid 1px black">
                    <Heading>Essentials</Heading>
                    <br />
                    <Text>
                      For professionals who use publishing, analytics &
                      engagement tools.
                    </Text>
                    <Heading>
                      $ 5<Text fontSize="20px"> /month per channel </Text>
                    </Heading>
                    <br />
                    <Text>
                      Add additional channels for $5/month Billed at{" "}
                      <b> $72 $60/year</b>
                    </Text>
                    <Button
                      marginTop={5}
                      colorScheme="blue"
                      bg="blue"
                      variant="solid"
                      w="100%"
                    >
                      Try free for 14 Days
                    </Button>
                    <Text marginTop={2}>
                      <i class="bi bi-check-lg"></i>
                      Planning & publishing tools
                      <br />
                      {/* <i class="bi bi-check-lg"></i> */}
                      Analytics tools
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Engagement tools
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Landing page builder
                    </Text>
                    <br />
                    <Link> See all features</Link>
                  </Box>
                  <Box textAlign="left" p="15px" border="solid 1px black">
                    <Heading>Team</Heading>
                    <br />
                    <Text>
                      For teams who want unlimited user seating, collaboration,
                      and reporting.
                    </Text>
                    <Heading>
                      $ 10 <Text fontSize="20px"> /month per channel </Text>
                    </Heading>
                    <br />
                    <Text>
                      Add additional channels fo
                      <b>r $10 /month Billed at $144 $120/year</b>
                    </Text>
                    <Button
                      marginTop={5}
                      colorScheme="blue"
                      bg="blue"
                      variant="solid"
                      w="100%"
                    >
                      Try free for 14 Days
                    </Button>
                    <Text marginTop={2}>
                      <i class="bi bi-check-lg"></i>
                      Essentials features, plus:
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Unlimited team members & clients
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Draft collaboration tools
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Easy, clear exportable reports
                    </Text>
                    <br />
                    <Link> See all features</Link>
                  </Box>
                  <Box textAlign="left" p="15px" border="solid 1px black">
                    <Heading>Agency</Heading>
                    <br />
                    <Text>
                      For marketing agencies with 10 or more social channels.
                    </Text>
                    <Heading>
                      $ 100{" "}
                      <Text fontSize="20px"> /month for 10 channels </Text>
                    </Heading>
                    <br />
                    <Text>
                      Add additional channels for $10 $5/month Billed at{" "}
                      <b> $1440 $1200/year</b>
                    </Text>
                    <Button
                      marginTop={5}
                      colorScheme="blue"
                      bg="blue"
                      variant="solid"
                      w="100%"
                    >
                      Try free for 14 Days
                    </Button>
                    <Text marginTop={2}>
                      <i class="bi bi-check-lg"></i>
                      Team features, plus:
                      <br />
                      <i class="bi bi-check-lg"></i>
                      custom access & permissions
                      <br />
                      <i class="bi bi-check-lg"></i>
                      Agency-friendly pricing
                    </Text>
                    <br />
                    <Link> See all features</Link>
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Box>
      <Box p="100px" color="white" bg="blue">
        <Center>
          <Heading>
            140,000+ people like you use <br /> Buffer to build their brand on
            <br />
            social media every month
          </Heading>
        </Center>
        <br />
        <br />
        <Button p="30px" colorScheme="orange" bg="tomato">
          Get Started Now
        </Button>
      </Box>
    </Box>
  );
};
export default Pricing;
