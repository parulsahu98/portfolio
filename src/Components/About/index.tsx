import {
  Flex,
  List,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";

const AboutComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isLaptop] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      mx={isMobile ? 0 : 12}
      my={isMobile ? 12 : 20}
      justifyContent={"space-between"}
      id="about"
    >
      {!isLaptop && (
        <Image
          src="/images/mak.svg"
          alt="hero image"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width={400}
          height={200}
        />
      )}
      <Flex
        flexDir={"column"}
        alignItems={"flex-start"}
        width={isLaptop ? "100%" : "50%"}
      >
        <Text
          as={isMobile ? "h2" : "h3"}
          textAlign={isMobile ? "center" : "left"}
          mb={4}
          w={"100%"}
        >
          Who am I?
        </Text>
        <Text as={"h6"}>
        As a highly skilled software developer with extensive experience in designing, developing, and deploying enterprise-level applications, I bring a strong proficiency in multiple programming languages and software development methodologies. My expertise spans a range of database management systems, and I am adept at solving complex problems with innovative solutions. I excel in collaborative, team-based environments and am committed to delivering high-quality software solutions that meet and exceed organizational goals.I have Ability to translate Your business requirements into technical solutions With My expertise that stands out in today’s competitive market.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutComponent;
