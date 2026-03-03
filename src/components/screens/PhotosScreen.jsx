"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import { Mail } from "lucide-react"
import Button from "../Button"

const photos = [
  {
    src: "/images/one.jpeg",
    bg: "from-pink-200 via-rose-100 to-pink-300",
  },
  {
    src: "/images/two.jpeg",
    bg: "from-violet-200 via-purple-100 to-violet-300",
  },
  {
    src: "/images/three.jpeg",
    bg: "from-blue-200 via-indigo-100 to-blue-300",
  },
  {
    src: "/images/four.jpeg",
    bg: "from-rose-300 via-pink-200 to-rose-400",
  },
]

export default function PhotosScreen({ onNext }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative flex flex-col items-center gap-8 my-16">

      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${photos[activeIndex].bg}`}
        />
      </AnimatePresence>

      {/* Glass Morphism Container */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/30 backdrop-blur-xl border border-white/40 p-8 rounded-[60px] shadow-2xl w-full max-w-md flex flex-col items-center gap-6"
      >

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-accent">
            Some Sweet Moments
          </h2>
          <p className="text-sm text-accent/70 mt-1">
            (Swipe for more)
          </p>
        </div>

        {/* Floating Card Swiper */}
       <Swiper
  effect="fade"
  modules={[EffectFade, Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="w-64 md:w-72 aspect-[3/4]"
>
          {photos.map((photo, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full rounded-3xl bg-white/40 backdrop-blur-lg shadow-xl p-4"
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden flex items-center justify-center bg-white/30">

  <img
    src={photo.src}
    alt={`Memory ${i + 1}`}
    className="max-h-full max-w-full object-contain rounded-2xl"
  />

</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <Button
          onClick={onNext}
          className="bg-white/50 backdrop-blur-md border border-white/40 text-accent hover:scale-105 transition"
        >
          <Mail size={18} /> Open My Message
        </Button>

      </motion.div>
    </div>
  )
}