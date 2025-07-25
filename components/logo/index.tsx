import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import styles from "./logo.module.css";
import Link from "next/link";

const AppSoluteLogo = ({
  color,
  logoColor,
}: {
  color: string;
  logoColor: string;
}) => {
  return (
    <>
      <Link href="/" className={styles.logoLink}>
        <Flex gap={15} align="center">
          {logoColor === "white" ? (
            <Image
              src="/icons/logo2.svg"
              alt="AppSolute Logo"
              width={50}
              height={49}
              className={styles.logo}
            />
          ) : (
            <Image
              src="/icons/logo.svg"
              alt="AppSolute Logo"
              width={50}
              height={49}
              className={styles.logo}
            />
          )}
          <Text c={color} className={styles.text}>
            AppSolute
          </Text>
        </Flex>
      </Link>
    </>
  );
};

export default AppSoluteLogo;
