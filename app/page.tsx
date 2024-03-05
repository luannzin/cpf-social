"use client";

import { useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CopyAndPaste } from "./components/CopyAndPaste";
import { generateCpf } from "./helpers/generateCpf";
import { formatWaitingTime } from "./helpers/formatWaitingTime";

import { motion } from "framer-motion";
import { Clock, Trash } from "@phosphor-icons/react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { formatCpf } from "./helpers/formatCpf";
import Link from "next/link";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const [cpf, setCpf] = useState<string>("000.000.000-00");
  const [recentCpfs, setRecentCpfs] = useState<
    { cpf: string; date: Date; isCopied: boolean }[]
  >([]);
  const [isPunctuation, setIsPunctuation] = useState<boolean>(
    typeof localStorage !== "undefined"
      ? localStorage.getItem("@CpfSocial:punctuation") === "true"
      : false
  );

  useEffect(() => {
    setCpf(generateCpf());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.addEventListener("copy", (e) => {
      copyCpf();
    });

    return () => {
      document.removeEventListener("copy", (e) => {
        copyCpf();
      });
    };
  }, [cpf]);

  const copyCpf = () => {
    navigator.clipboard.writeText(isPunctuation ? formatCpf(cpf) : cpf);
    setIsCopied(true);

    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (cpf === "00000000000" || cpf === "000.000.000-00") return;
    let recentsLocalStorage: {
      cpf: string;
      date: Date;
      isCopied: boolean;
    }[] = window.localStorage.getItem("@CpfSocial:recents")
      ? JSON.parse(window.localStorage.getItem("@CpfSocial:recents")!)
      : [];

    if (recentsLocalStorage.length >= 10) {
      recentsLocalStorage.shift();
    }

    recentsLocalStorage.push({
      cpf: isPunctuation ? formatCpf(cpf) : cpf,
      date: new Date(),
      isCopied: false,
    });

    setRecentCpfs([...recentsLocalStorage].reverse());

    window.localStorage.setItem(
      "@CpfSocial:recents",
      JSON.stringify(recentsLocalStorage)
    );
  }, [cpf]);

  useEffect(() => {
    localStorage.setItem("@CpfSocial:punctuation", String(isPunctuation));
  }, [isPunctuation]);

  return (
    <>
      <>
        <div className="fixed top-4 right-4">
          <Sheet>
            <SheetTrigger>
              <div className="transition-all hover:bg-orange-700/10 cursor-pointer p-2 rounded-lg">
                <Clock weight="bold" className="text-orange-700 size-8" />
              </div>
            </SheetTrigger>
            <SheetContent className="bg-white flex flex-col justify-between">
              <div className="flex flex-col gap-16 max-h-[85%]">
                <strong className="text-orange-700 text-xl max-sm:text-base">
                  Gerados recentemente
                </strong>
                <div className="flex flex-col divide-y divide-orange-700/25  overflow-y-scroll overflow-x-hidden pr-4">
                  {recentCpfs.map((cpf) => (
                    <div
                      key={cpf.cpf + cpf.date}
                      className="flex items-center justify-between text-orange-700 py-4 first-of-type:pt-0  cursor-pointer"
                      onClick={() => {
                        setRecentCpfs((prev) =>
                          prev.map((cpf2) =>
                            cpf.cpf === cpf2.cpf && cpf.date === cpf2.date
                              ? { ...cpf2, isCopied: true }
                              : cpf2
                          )
                        );

                        const timeout = setTimeout(() => {
                          setRecentCpfs((prev) =>
                            prev.map((cpf2) =>
                              cpf.cpf === cpf2.cpf && cpf.date === cpf2.date
                                ? { ...cpf2, isCopied: false }
                                : cpf2
                            )
                          );
                        }, 1000);

                        navigator.clipboard.writeText(cpf.cpf);

                        return () => {
                          clearTimeout(timeout);
                        };
                      }}
                    >
                      <strong className="text-xl max-sm:text-base">
                        {cpf.cpf}
                      </strong>
                      <div className="flex gap-2 items-center">
                        <span className="text-sm max-sm:hidden">
                          {formatWaitingTime(new Date(cpf.date))}
                        </span>
                        <CopyAndPaste size={4} isCopied={cpf.isCopied} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                // whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setRecentCpfs([]);
                  window.localStorage.removeItem("@CpfSocial:recents");
                }}
                className="text-base max-sm:text-sm font-bold bg-orange-700 text-white rounded-lg py-3 select-none flex items-center justify-center gap-4"
              >
                <Trash weight="bold" className="size-6 max-sm:size-4" />
                <strong className="whitespace-nowrap">Apagar Histórico</strong>
              </motion.button>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex flex-col justify-center items-center gap-12">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger onClick={copyCpf}>
                <div className="flex gap-6 max-sm:gap-4 items-center">
                  <span className="text-5xl max-sm:text-3xl font-bold text-orange-700">
                    {isPunctuation ? formatCpf(cpf) : cpf}
                  </span>

                  <CopyAndPaste
                    isCopied={isCopied}
                    size={
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? 6
                        : 8
                    }
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-orange-700">
                <strong>Clique para copiar</strong>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              const nCpf = generateCpf();
              setCpf(nCpf);
              return setIsCopied(false);
            }}
            className="text-xl max-sm:text-base font-bold bg-orange-700 text-white rounded-lg py-3 px-24 max-sm:px-12 select-none"
          >
            Gerar CPF
          </motion.button>
          {/* <motion.div
          onClick={() => setIsAdvanced(!isAdvanced)}
          className="flex gap-2 text-orange-700 items-center cursor-pointer select-none"
        >
          <strong className="text-xl font-black">Avançado</strong>
          <CaretDown
            weight="bold"
            className={`${
              !isAdvanced ? "rotate-0" : "rotate-180"
            } transition-all duration-300 ease-in-out stroke-orange-700`}
          />
        </motion.div> */}
          <label className="flex items-center gap-4 select-none cursor-pointer">
            <Checkbox
              checked={isPunctuation}
              onCheckedChange={(value: boolean) => setIsPunctuation(value)}
              className="size-8 rounded-lg border-orange-700 border-4 data-[state=checked]:bg-white !text-orange-700"
            />
            <strong className="text-xl text-orange-700">Pontuação</strong>
          </label>
        </div>
      </>
      <footer className="fixed bottom-10 text-orange-700 flex flex-col gap-4 items-center">
        <span>
          Made by{" "}
          <strong>
            <u>
              <Link href={"https://github.com/luannzin"} target="_blank">
                luannzin
              </Link>
            </u>
          </strong>
          .
        </span>
        <span>
          <strong>
            <u>
              <Link
                href={
                  " https://medium.com/@luannzin/the-math-behind-a-brazilian-cpf-d7f340bb7e96"
                }
                target="_blank"
              >
                Medium
              </Link>
            </u>
          </strong>
        </span>
      </footer>
    </>
  );
}
