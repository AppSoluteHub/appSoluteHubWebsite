import { Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import styles from "./team.module.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Joan Asako",
      role: "Team Lead",
      img: "/images/joan.jpg",
    },
    {
      name: "Awele Offor",
      role: "Social media manager",
      img: "/images/awele_offor.jpg",
    },
    {
      name: "Akpa Victor",
      role: "Video Editor",
      img: "/images/akpaVictor.jpg",
    },
    {
      name: "Elijah Olarenwaju",
      role: "Video Editor",
      img: "/images/elijah.jpg",
    },
    {
      name: "Ahaneku Wisdom",
      role: "Graphics Designer",
      img: "/images/ahaneku.jpg",
    },
    {
      name: "Aleke Job",
      role: "Script Writer",
      img: "/images/aleke_job.jpg",
    },
    {
      name: "Sochima Onah",
      role: "Product Designer",
      img: "/images/sochima.jpg",
    },
    {
      name: "Fredrick Aniebonam",
      role: "Frontend Engineer",
      img: "/images/fred.jpg",
    },
    {
      name: "Solomon Ali",
      role: "Backend Engineer",
      img: "/images/solomon.jpg",
    },
  ];

  return (
    <Stack className={styles.team}>
      <Title className={styles.title}>Meet The Team</Title>

      <Flex className={styles.itemBox}>
        {teamMembers.map((item, index) => (
          <Stack key={index} className={styles.itemCover}>
            <Image
              src={item.img}
              alt=""
              width={250}
              height={250}
              className={styles.image}
            />
            <Title className={styles.itemTitle}>{item.name}</Title>
            <Text className={styles.itemText}>{item.role}</Text>
          </Stack>
        ))}
      </Flex>
    </Stack>
  );
};

export default Team;
