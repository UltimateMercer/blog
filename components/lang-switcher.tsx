"use client";

import * as React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Languages } from "lucide-react";
import type { LanguageStore } from "@/utils/interfaces";
import { useParams, redirect } from "next/navigation";

export function LangSwitcher() {
  const { language, setLanguage } = useLanguageStore() as LanguageStore;

  const param = useParams();
  const currentParams = useParams();

  if (currentParams.lang && language !== currentParams.lang) {
    return redirect(`/${language}/${param.slug}`);
  }

  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger id="lang-toggle-trigger" asChild>
              <Button variant="outline" size="icon">
                <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>
              {language === "en-us" ? "Change Language..." : "Mudar idioma..."}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent>
        <DropdownMenuItem
          id="lang-toggle-en"
          className="cursor-pointer"
          onClick={() => setLanguage("en-us")}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          id="lang-toggle-pt"
          className="cursor-pointer"
          onClick={() => setLanguage("pt-br")}
        >
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
