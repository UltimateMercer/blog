"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { Button } from "./ui/button";
import { CaretLeft } from "@phosphor-icons/react";
import { LangSwitcher } from "./lang-switcher";

export function NavigationBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter();
  const segments = useSelectedLayoutSegments();

  return (
    <div className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backgrop-filter]:bg-background/60">
      <div className="flex h-16 justify-between items-center px-4">
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          <div className="inline-flex mr-4">
            <Link href="/" className="">
              <img
                src="/blog/images/ultimate-logo-red.svg"
                className="!max-w-none mx-auto w-[56px] h-[56px] hidden dark:block"
                width="56"
                height="56"
                alt="Ultimate Mercer Logo"
              />
            </Link>

            <Link href="/">
              <img
                src="/blog/images/ultimate-logo-dark.svg"
                className="!max-w-none mx-auto w-[56px] h-[56px] block dark:hidden"
                width="56"
                height="56"
                alt="Ultimate Mercer Logo"
              />
            </Link>
          </div>
          {segments && segments.length > 1 && (
            <Button
              variant={"link"}
              onClick={() => router.back()}
              aria-label="Voltar a página anterior"
            >
              <CaretLeft size={24} />
              Voltar
            </Button>
          )}
        </nav>
        <div className="flex items-center gap-4">
          <LangSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
