"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Flex, Text, Link, Divider, useMediaQuery } from "@chakra-ui/react";
import AchievementsSection from "@/Components/Achievements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import AboutComponent from "@/Components/About";
import FooterComponent from "@/Components/Footer";
import TechStacks from "@/Components/TechStack";
import ProjectComponent from "@/Components/Projects/indext";
import ServicesComponent from "@/Components/Services";
import { sendGAEvent } from "@next/third-parties/google";

const HomeConponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleGTag = () => {
    sendGAEvent({ event: "buttonClicked", value: "me" });
  };

  return (
    <Flex width={"100%"} px={isMobile ? 6 : 12} flexDir={"column"}>
      <Flex
        width={"inherit"}
        py={isMobile ? 10 : 24}
        flexDir={isMobile ? "column" : "row"}
      >
        <motion.div
          style={{ width: "fit-content" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>
            Hello, I&apos;m <br></br>
            <TypeAnimation
              sequence={[
                "Parul Sahu",
                2000,
                "Full Stack developer",
                2000,
                "Database developer",
                2000,
                "Freelancer",
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <Text
            width={isMobile ? "100%" : "70%"}
            as={"h5"}
            mt={isMobile ? 4 : 0}
          >
           Innovative full-stack experienced developer, dedicated to crafting seamless end-to-end solutions. Focused on delivering integrated, high-performance systems that drive successful user experiences and project goals.
            {/* <button onClick={handleGTag}>Click GA</button> */}
          </Text>
          <Flex gap={4} my={8}>
            <Link
              target="_blank"
              href="https://www.instagram.com/parul_sahu96/"
            >
              <AiFillInstagram size={40} />
            </Link>
            <Link target="_blank" href="https://github.com/parulsahu98/">
              <FaGithub size={40} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/parul-sahu-68973621a/"
            >
              <FaLinkedin size={40} />
            </Link>
            <Link
              target="_blank"
              href="https://www.upwork.com/freelancers/~012c441db77af2d399?mp_source=share"
            >
              <FaSquareUpwork size={40} />
            </Link>
          </Flex>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Flex flexDir={"column"} alignItems={isMobile ? "inherit" : "center"}>
            {!isMobile && (
              <Image
                src="/images/avatar_aigen.png"
                // src="/images/mak.svg"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={500}
                height={400}
              />
            )}
            <Flex gap={4} mt={8}>
              <Link
                target="_blank"
                variant={"button"}
                href="https://www.linkedin.com/in/parul-sahu-68973621a/"
              >
                HIRE ME
              </Link>
              <Link
                variant={"button"}
                href="Parul_Sahu.pdf"
                target="_blank"
              >
                <span>Download CV</span>
              </Link>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
      {/* <AchievementsSection /> */}
      <TechStacks />
      <Divider />
      <AboutComponent />
      <Divider />
      <ServicesComponent />
      {/* <Divider /> */}
      <ProjectComponent />
      <Divider />
      <FooterComponent />
    </Flex>
  );
};

export default HomeConponent;
