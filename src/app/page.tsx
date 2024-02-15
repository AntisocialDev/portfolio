"use client";
import { myProjects } from "@/interfaces/project.interface";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const mySkills: string[] = [
    "React",
    "Angular",
    "Next.js",
    "Flutter",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Tailwind",
    "Anime.js",
    "Framer motion",
    "Dart",
    "Github",
    "Firebase",
    "Appwrite",
    "Jira",
  ];

  const contactDetails: { image: string; title: string; details: string }[] = [
    {
      image: "/icons/email.png",
      title: "Email",
      details: "victor.banjo2000@gmail.com",
    },
    {
      image: "/icons/location.png",
      title: "Location",
      details: "Toronto, ON",
    },
    {
      image: "/icons/linkedin.png",
      title: "LinkedIn",
      details: "https://www.linkedin.com/in/victor-banjo-935088163",
    },
    {
      image: "/icons/github.png",
      title: "GitHub",
      details: "https://www.github.com/AntisocialDev",
    },
  ];

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="gap-20 px-5 sm:px-20 xl:px-[160px]"
    >
      <section className="info-div h-[420px] md:min-h-[650px]">
        <div className="overlay"></div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          className="content-div p-5 md:p-10"
        >
          <div className="flex flex-col gap-2 sm:gap-5 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">Hi, I'm Victor</h2>
            <p className="text-base sm:text-md">
              I'm a software engineer with a passion for building products that
              are simple, beautiful, and easy to use.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-8">
            <motion.button
              whileHover={{ scale: 1.2, x: [-8, 0, 8, 0, -8, 0] }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A80E5] text-white"
            >
              View Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, x: [-8, 0, 8, 0, -8, 0] }}
              transition={{ duration: 0.3 }}
              className="bg-[#ffffff] text-[#0d141c]"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </section>
      <section id="project-session">
        <h2 className="text-2xl font-bold">Latest Projects</h2>
        <div className="flex flex-col gap-y-20 gap-x-10 md:flex-row mt-5 justify-between">
          {myProjects.map((project, index) => (
            <motion.a
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              key={index}
              href={project.link}
              target="_blank"
              className="cursor-pointer w-full md:w-[300px]"
            >
              <div className="flex flex-col gap-2">
                <div className="overflow-hidden h-[300px] md:h-[200px] lg:h-[300px] rounded-[20px]">
                  <motion.img
                    whileHover={{ height: "110%" }}
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt="project image"
                  ></motion.img>
                </div>
                <p className="font-bold mt-2">{project.title}</p>
                <p className="text-base">{project.details}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      <motion.section
      id="skills-session"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">Skills & Tool</h2>
        <div className="flex mt-5 items-center gap-x-5 gap-y-3 flex-wrap">
          {mySkills.map((skill, index) => (
            <div key={index} className="chip">
              {skill}
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-5">
          I'm a full-stack developer with a background in computer science. I
          love creating apps and websites that solve real problems and bring joy
          to users. When I'm not coding, you can find me playing guitar, hiking,
          or experimenting with new recipes.
        </p>
      </motion.section>
      <motion.section
      id="contact-session"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="contact-section"
      >
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <div className="flex mt-5 flex-col gap-5">
          {contactDetails.map((contact, index) => (
            <a
            target="_blank"
              className={
                contact.title !== "Location"
                  ? "cursor-pointer"
                  : "cursor-default"
              }
              onClick={(e) => {
                if (contact.title === "Location") {
                  e.preventDefault();
                  return false;
                }
              }}
              key={index}
              href={
                contact.title === "LinkedIn" || contact.title === "GitHub"
                  ? contact.details
                  : contact.title === "Email"
                  ? "mailto:victor.banjo2000@gmail.com"
                  : "#"
              }
            >
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center min-w-[50px] min-h-[50px] p-3 bg-[#E8EDF2] rounded-[12px]">
                  <Image
                    src={contact.image}
                    alt="theme toogle"
                    width={20}
                    height={20}
                    quality={100}
                  ></Image>
                </div>
                <div>
                  <p className="font-bold">{contact.title}</p>
                  <p className="text-base">{contact.details}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
