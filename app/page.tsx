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

import { motion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

// import { toast } from "sonner";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const [cpf, setCpf] = useState("00000000000");
  const [isAdvanced, setIsAdvanced] = useState(false);

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
    navigator.clipboard.writeText(cpf);
    setIsCopied(true);

    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-12">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger onClick={copyCpf}>
              <div className="flex gap-6 items-center">
                <span className="text-5xl font-bold text-orange-700">
                  {cpf}
                </span>

                <CopyAndPaste isCopied={isCopied} />
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
          className="text-xl font-bold bg-orange-700 text-white rounded-lg py-3 px-24 select-none"
        >
          Gerar CPF
        </motion.button>
        <motion.div
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
        </motion.div>
      </div>
    </div>
  );
}
