"use client"

import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion';

const TransitionProvider = ({children}) => {
  return (
    <AnimatePresence>
        <div className="w-[100%] h-[100%] lg:h-screen bg-gradient-to-b from-blue-50 to-red-100">
          <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{height: "0vh"}}
          exit={{height: "100vh"}}
          transition={{ duration: 0.5, ease: "easeOut"}} />
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh - 6rem)]">{children}</div>
        </div>
    </AnimatePresence>
  )
}

export default TransitionProvider;