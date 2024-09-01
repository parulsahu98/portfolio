import { Flex, Link, Text } from "@chakra-ui/react";

const FooterComponent = () => {
  return (<>
    <Flex justifyContent={"center"} py={4} alignItems={"center"}>
      <Text ml={4} as={"h3"}>
      Ready to take your digital presence to the next level?
      </Text>
      </Flex>
      <Flex justifyContent={"center"} py={4} alignItems={"center"}>
      <Text  as={"h5"} pl={10} fontWeight={"bold"}>
      Reach out to me today and let's discuss how I can help you achieve your goals.
      </Text>
      </Flex>
      <Flex justifyContent={"center"} py={4} alignItems={"center"} gap={5}>
         <Text ml={4} as={"h5"}>dev.parul.sahu@gmail.com</Text>
      
   <Text ml={4} as={"h5"}> +91 9691437798 </Text>
      </Flex>
      <Flex justifyContent={"center"} py={4} alignItems={"center"}>
              <Link
                target="_blank"
                variant={"button"}
                href="https://www.linkedin.com/in/parul-sahu-68973621a/"
              >
                Let's get in touch 
              </Link>


      {/* <Text  as={"h6"} pl={2} fontWeight={"bold"}>
        भारत
      </Text> */}
    </Flex></>
  );
};
export default FooterComponent;
