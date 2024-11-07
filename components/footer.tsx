"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { ariaLabel, IconSocials } from "@/utils/socials";
import { useLanguageStore } from "@/store/useLanguageStore";
import type { LanguageStore } from "@/utils/interfaces";

const Footer = () => {
  const { language } = useLanguageStore() as LanguageStore;

  return (
    <footer className="max-w-full pt-4 px-6 pb-8 print:hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-2">
          <Link href="/" className="">
            <img
              src="/images/ultimate-logo-red.svg"
              className="hidden dark:block"
              width="100"
              height="100"
              alt="Ultimate Mercer Logo"
            />
          </Link>

          <Link href="/" className="">
            <img
              src="/images/ultimate-logo-dark.svg"
              className="block dark:hidden"
              width="100"
              height="100"
              alt="Ultimate Mercer Logo"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <div className="flex gap-2 mb-3">
            {IconSocials.map((social) => {
              return social.link ? (
                <Button
                  key={social.link}
                  variant="outline"
                  size={"icon"}
                  asChild
                >
                  <Link
                    href={social.link}
                    className="!text-dark-500 hover:!text-dark-900 dark:!text-light-500 hover:dark:!text-light-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel(language, "website")}
                  >
                    <social.icon size={24} />
                  </Link>
                </Button>
              ) : null;
            })}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            © 2024 Made by Ultimate Mercer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
