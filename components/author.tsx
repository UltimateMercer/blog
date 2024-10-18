"use client";
import Image from "next/image";
import type { LanguageStore } from "@/utils/interfaces";
import { useLanguageStore } from "@/store/useLanguageStore";
export const Author = () => {
  const { language } = useLanguageStore() as LanguageStore;

  return (
    <div className="my-6">
      <h3 className="mb-1">
        {language === "en-us" ? "Written by:" : "Escrito por:"}
      </h3>
      <div className="flex md:flex-row flex-col items-center">
        <Image
          src={"https://i.imgur.com/55Kcg9V.jpeg"}
          className={`w-36 h-36 rounded-full object-cover hover:scale-105 hover:ring-2 ring-gray-300 hover:shadow-lg transition-all md:mb-0 !mt-0 mb-4 `}
          width={10000}
          height={10000}
          alt={`Image`}
        />
        <div className="flex flex-col flex-1 justify-center ml-6">
          <h4 className="text-3xl font-bold tracking-wide mb-2">
            Julian Silva da Cunha
          </h4>
        </div>
      </div>
    </div>
  );
};
