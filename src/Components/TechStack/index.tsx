"use client";

import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaGithub, FaJava } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiChakraui,
  SiHtml5,
  SiJavascript,
  SiSass,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiAngular,
  SiAmazonaws,
  SiJenkins,
  SiDocker,
  SiPython,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const techStacks = [
  { icon: <SiNodedotjs size={40} />, label: "Node.js" },
  { icon: <FaJava size={40} />, label: "Java" },
  { icon: <SiPython size={40} />, label: "Python" },
  { icon: <SiJavascript size={40} />, label: "JavaScript" },
  { icon: <SiTypescript size={40} />, label: "TypeScript" },
  { icon: <SiAngular size={40} />, label: "Angular" },
  { icon: <RiReactjsLine size={40} />, label: "ReactJS" },
  { icon: <SiHtml5 size={40} />, label: "HTML" },
  { icon: <DiCss3 size={40} />, label: "CSS" }, 
  { icon: <SiPostgresql size={40} />, label: "PostgreSQL" },
  { icon: <SiMysql size={40} />, label: "MySQL" },
  { icon: <SiMongodb size={40} />, label: "MongoDB" },
  { icon: <SiRedis size={40} />, label: "Redis" },
  { icon: <SiAmazonaws size={40} />, label: "AWS" },
  { icon: <SiJenkins size={40} />, label: "Jenkins" },
  { icon: <SiDocker size={40} />, label: "Docker" },
  { icon: <TbBrandRedux size={40} />, label: "Redux" },
  { icon: <FaGithub size={40} />, label: "GitHub" },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: (index: any) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
};

export default function TechStacks() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box my={20} mx={isMobile ? 0 : 12}>
      <Flex flexDir={"column"} alignItems="center">
        <h2 style={{ textAlign: "center" }}>Technologies I Use</h2>
        <Flex
          wrap="wrap"
          justifyContent="center"
          mt={12}
          gap={isMobile ? "20px" : "40px"}
        >
          {techStacks.map((tech, index) => (
            <motion.div
              key={tech.label}
              variants={fadeInAnimationVariants}
              initial="initial"
              animate="animate"
              custom={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // border: "1px #5d5d5d solid",
                padding: "16px",
                // borderRadius: "1px",
                // background: "black",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div style={{ transform: "rotateY(0deg)",display: "center" }}>
                {tech.icon}
                <Text as={"h6"} pt={2}>
                  {tech.label}
                </Text>
              </div>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}