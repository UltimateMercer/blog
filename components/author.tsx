"use client";
import Image from "next/image";
import type { LanguageStore } from "@/utils/interfaces";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Button } from "./ui/button";
import {
  BehanceLogo,
  Browser,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
export const Author = () => {
  const { language } = useLanguageStore() as LanguageStore;

  const socials = {
    website: "http://ultimatemercer.com",
    email: "ultimatemercer.blklight+blog@gmail.com",
    github: "https://github.com/UltimateMercer",
    linkedin: "https://www.linkedin.com/in/ultimatemercer/",
    behance: "https://www.behance.net/ultimatemercer",
    medium: "https://medium.com/@ultimatemercer",
    instagram: "",
  };

  const ariaLabel = (text: string) => {
    return language === "en-us" ? `Acess ${text}` : `Acessar ${text}`;
  };

  return (
    <div className="my-6">
      <h3 className="mb-3 md:text-left text-center">
        {language === "en-us" ? "Written by:" : "Escrito por:"}
      </h3>
      <div className="flex md:flex-row gap-6 flex-col items-center">
        <Image
          src={"/blog/images/me.jpg"}
          className={`w-36 h-36 rounded-full object-cover hover:scale-110 hover:ring-2 ring-gray-300 hover:shadow-lg transition-all !my-0`}
          width={144}
          height={144}
          alt={`Image`}
        />
        <div className="flex flex-col flex-1 justify-center">
          <h4 className="text-3xl font-bold tracking-wide mb-2">
            Julian Silva da Cunha
          </h4>
          <div className="flex gap-2 md:justify-start justify-center">
            {socials.website && (
              <Button variant="outline" size={"icon"} asChild>
                <Link
                  href={socials.website}
                  className="!text-dark-500 hover:!text-dark-900 dark:!text-light-500 hover:dark:!text-light-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel("website")}
                >
                  <Browser size={24} />
                </Link>
              </Button>
            )}
            {socials.email && (
              <Button variant="outline" size={"icon"} asChild>
                <Link
                  href={`mailto:${socials.email}`}
                  className="!text-dark-500 hover:!text-dark-900 dark:!text-light-500 hover:dark:!text-light-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel("email")}
                >
                  <Envelope size={24} />
                </Link>
              </Button>
            )}
            {socials.github && (
              <Button variant="outline" size={"icon"} asChild>
                <Link
                  href={socials.github}
                  className="!text-dark-500 hover:!text-dark-900 dark:!text-light-500 hover:dark:!text-light-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel("github")}
                >
                  <GithubLogo size={24} />
                </Link>
              </Button>
            )}
            {socials.linkedin && (
              <Button variant="outline" size={"icon"} asChild>
                <Link
                  href={socials.linkedin}
                  className="!text-dark-500 hover:!text-dark-900 dark:!text-light-500 hover:dark:!text-light-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel("linkedin")}
                >
                  <LinkedinLogo size={24} />
                </Link>
              </Button>
            )}
            {socials.behance && (
              <Button variant="outline" size={"icon"} asChild>
                <Link
                  href={socials.behance}
                  className="!text-dark-500 hover:!text-dark-900 dark:!text-light-500 hover:dark:!text-light-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel("behance")}
                >
                  <BehanceLogo size={24} />
                </Link>
              </Button>
            )}
            {socials.medium && (
              <Button variant="outline" size={"icon"} asChild>
                <Link
                  href={socials.medium}
                  className="!text-dark-500 hover:!text-dark-900 dark:!text-light-500 hover:dark:!text-light-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel("medium")}
                >
                  <MediumLogo size={24} />
                </Link>
              </Button>
            )}
            {socials.instagram && (
              <Button variant="outline" size={"icon"} asChild>
                <Link
                  href={socials.instagram}
                  className="!text-dark-500 hover:!text-dark-900 dark:!text-light-500 hover:dark:!text-light-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel("instagram")}
                >
                  <InstagramLogo size={24} />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
