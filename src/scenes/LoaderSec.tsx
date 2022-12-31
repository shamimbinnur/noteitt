import React from 'react'
import { motion } from 'framer-motion';

const LoaderSec = () => {
  return (
    <motion.div
      initial={{opacity: 0, scale: 0}}
      animate={{opacity:1, scale: 1}}
      className="flex pt-20 justify-center items-center gap-2"
    >
      <motion.div
        animate={{y: 8,}}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: .4
        }}
        className="w-5 h-5 rounded-full bg-BLUE50"
      >
      </motion.div>

      <motion.div
        animate={{y: 8}}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: .5
        }}
        className="w-5 h-5 rounded-full bg-CYAN100"
      >
      </motion.div>

      <motion.div animate={{y: 8}}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: .6
        }}
        className="w-5 h-5 rounded-full bg-RED50"
      >
      </motion.div>

      <motion.div animate={{y: 8}}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: .7
        }}
        className="w-5 h-5 rounded-full bg-PURPLE100"
      >
      </motion.div>
    </motion.div>
  )
}

export default LoaderSec;