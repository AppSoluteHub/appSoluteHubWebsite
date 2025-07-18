"use client";

import { Box, Flex, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import AppSoluteLogo from "../logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { getUser } from "@/store/userSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const user = useSelector(getUser);
  const router = useRouter();

  const currentUrl = usePathname();
  const pagePath = [
    "/login",
    "/signup",
    "/signup/",
    "/recover",
    "/reset-password/",
    "/dashboard",
    "/admin/dashboard",
    "/admin/tasks",
    "/admin/tasks/new-task",
    "/admin/tasks/edit-task",
    "/admin/posts",
    "/admin/posts/new-post",
    "/admin/posts/edit-post",
    "/admin/categories",
    "/admin/tags",
    "/admin/roles",
    "/admin/users",
    "/admin/comments",
  ];

  return (
    <>
      {!pagePath.some((path) => currentUrl.includes(path)) ? (
        <Stack>
          <Flex
            visibleFrom="md"
            className={styles.body}
            justify="space-between"
            align="center"
          >
            <Box>
              <AppSoluteLogo color="#ffffff" logoColor="white" />
            </Box>
            <Flex gap={70} align="center">
              <Flex>
                <ul className={styles.navLinks}>
                  {[
                    { href: "/leaderboard", label: "Leaderboard" },
                    { href: "/media", label: "Media" },
                    { href: "/research-development", label: "R&D" },
                    { href: "/kids", label: "Kids" },
                    { href: "/blog", label: "Blog" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                  ].map((link) => (
                    <li
                      key={link.href}
                      className={`${styles.links} ${
                        currentUrl === link.href ? styles.active : ""
                      }`}
                    >
                      <Link
                        href={link.href}
                        className={`${styles.links} ${
                          currentUrl === link.href ? styles.active : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Flex>

              {user?.email ? (
                <Flex gap={10} align="center">
                  <Image
                    src={user?.profileImage || "/images/userProfile.png"}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.userImg}
                    onClick={() => router.push("/dashboard")}
                  />

                  <Text>Hi, {user?.fullName.split(" ")[0]}</Text>
                </Flex>
              ) : (
                <Flex>
                  <Link href="/login" className={styles.login}>
                    Login
                  </Link>
                </Flex>
              )}
            </Flex>
          </Flex>

          <Stack hiddenFrom="md" className={mobile ? styles.navbarBox : ""}>
            <Flex className={styles.mobileBody}>
              <AppSoluteLogo color="#ffffff" logoColor="white" />
              <Image
                src={mobile ? "/icons/close.svg" : "/icons/menu.svg"}
                alt="menu"
                width={35}
                height={35}
                className={styles.menu}
                onClick={() => setMobile(!mobile)}
              />
            </Flex>

            {mobile && (
              <Stack px={20} pt={40} justify="center" align="center">
                <ul className={styles.navLinks}>
                  {[
                    { href: "/leaderboard", label: "Leaderboard" },
                    { href: "/media", label: "Media" },
                    { href: "/research-development", label: "R&D" },
                    { href: "/kids", label: "Kids" },
                    { href: "/blog", label: "Blog" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                  ].map((link) => (
                    <li className={styles.lis} key={link.href}>
                      <Link
                        href={link.href}
                        className={styles.links}
                        onClick={() => setMobile(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {user?.email ? (
                  <Flex gap={10} align="center">
                    <Image
                      src={user?.profileImage || "/images/userProfile.png"}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.userImg}
                      onClick={() => router.push("/dashboard")}
                    />

                    <Text>Hi, {user?.fullName.split(" ")[0]}</Text>
                  </Flex>
                ) : (
                  <button
                    className={styles.loginBtn}
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </button>
                )}
              </Stack>
            )}
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default Navbar;
