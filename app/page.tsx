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

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const [cpf, setCpf] = useState("00000000000");

  useEffect(() => {
    setCpf(generateCpf());
  }, []);

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
          }}
          className="text-xl font-bold bg-orange-700 text-white rounded-lg py-3 px-24"
        >
          Gerar CPF
        </motion.button>
      </div>
    </div>
  );
}
