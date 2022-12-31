import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="bg-gradient-to-br from-PURPLE100 via-PURPLE50 to-CYAN100 h-screen">
      <div className="bg-gray-900 h-full bg-opacity-50">
          <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={{opacity:1, scale: 1}}
          className="flex pt-56 justify-center items-center gap-x-2"
        >
          <motion.div
            animate={{x: 8, scale: 0.5}}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: .5
            }}
            className="w-10 h-10 rounded-full bg-BLUE50"
          >
          </motion.div>

          <motion.div
            animate={{x: 8, scale: 0.5}}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: .6
            }}
            className="w-10 h-10 rounded-full bg-CYAN100"
          >
          </motion.div>

          <motion.div animate={{x: -8, scale: 0.5}}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: .6
            }}
            className="w-10 h-10 rounded-full bg-RED50"
          >
          </motion.div>

          <motion.div animate={{x: -8, scale: 0.5}}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: .5
            }}
            className="w-10 h-10 rounded-full bg-PURPLE100"
          >
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Loader