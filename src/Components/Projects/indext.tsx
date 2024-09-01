

import { Flex, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { ImProfile } from "react-icons/im";

const ProjectComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isLaptop] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      mx={isMobile ? 0 : 12}
      my={isMobile ? 12 : 20}
      flexDir={"column"}
      id="projects"
    >
      <Text
        as={isMobile ? "h2" : "h3"}
        mb={12}
        textAlign={"center"}
        width={"100%"}
      >
        Projects
      </Text>
      <Flex
        justifyContent={"center"}
        gap={10}
        flexWrap={isLaptop ? "wrap" : "nowrap"}
      >
        {/* Card for STUDEO */}
        <Flex
          border={"1px #5d5d5d solid"}
          flexDir={"column"}
          px={4}
          py={8}
          alignItems={"center"}
          width="300px" // Set a fixed width
          height="400px" // Set a fixed height
        >
          <Text as={"h3"} fontWeight={"bold"}>
            STUDEO
          </Text>
          <Text as={"h6"} fontWeight={"bold"}>
            Full Stack Developer
          </Text>
          <Text as={"h6"} mt={4} overflow= "auto">
            STUDEO is a time-saving solution designed to enhance math revision,
            providing students with an efficient pathway to improve their grades
            and gain access to prestigious universities. The platform offers a
            user-friendly interface that allows for quick navigation through
            various math topics, ensuring that students can focus on what
            matters most in their studies. The app is accessible on multiple
            platforms, including a dedicated website and mobile applications,
            making it convenient for students to study anytime and anywhere.
          </Text>
          <Link
            href="https://web.studeoapp.fr/"
            as={"h4"}
            fontWeight={"bold"}
            color="blue.500"
            mt={4}
          >
            Link
          </Link>
        </Flex>

        {/* Card for FAMHIVES */}
        <Flex
          border={"1px #5d5d5d solid"}
          flexDir={"column"}
          px={4}
          py={8}
          alignItems={"center"}
          width="300px" // Set a fixed width
          height="400px" // Set a fixed height
        >
          <Text as={"h3"} fontWeight={"bold"}>
            FAMHIVES
          </Text>
          <Text as={"h6"} fontWeight={"bold"}>
            Full Stack Developer
          </Text>
          <Text as={"h6"} mt={4} overflow= "auto">
            FAMHIVES is a sophisticated family management system designed to
            help users effortlessly map and navigate their family lineage. With
            a robust backend infrastructure, it offers a user-friendly interface
            for organizing and visualizing family data. This platform enables
            individuals to explore their family history and connect with
            relatives, ensuring accurate and accessible information. FAMHIVES is
            accessible on multiple platforms, making it convenient for users to
            manage their family records anytime and anywhere.
          </Text>
          <Link
            href="https://famhives.com/#/home"
            as={"h4"}
            fontWeight={"bold"}
            color="blue.500"
            mt={4}
          >
            Link
          </Link>
        </Flex>

        {/* Card for Other Projects */}
        <Flex
          border={"1px #5d5d5d solid"}
          flexDir={"column"}
          px={4}
          py={8}
          alignItems={"left"}
          width="300px" // Set a fixed width
          height="400px" // Set a fixed height
        >
          <Text as={"h3"} fontWeight={"bold"}  alignItems={"center !important"}>
            Other Projects
          </Text>
          <Text as={"h5"} mt={4} alignItems={"left"}>
            * SafeAp (MERN Developer)
          </Text>
          <Text as={"h5"} alignItems={"left"}>
            * TPI (Transfer Pricing Import) (MERN Developer)
          </Text>
          <Text as={"h5"} alignItems={"left"}> 
            * Baxter (Python Developer)
          </Text>
          <Text as={"h5"} alignItems={"left"}>
           * Automated Teller Machine (Java Developer)
          </Text>
          <Text as={"h5"} alignItems={"left"}>
            * My Personal Portfolio
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectComponent;