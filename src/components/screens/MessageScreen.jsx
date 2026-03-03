"use client"

import { useState } from "react"

export default function MessageScreen() {
    const [opened, setOpened] = useState(false)

    return (
        <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">
            <div
                className="text-center">
                <h2
                    className="text-2xl md:text-3xl font-semibold text-primary text-center"
                >
                    A Special Message
                </h2>

                <p className="text-primary/70 text-sm">
                    Tap to open
                </p>
            </div>

            <div
                onClick={() => setOpened(!opened)}
                className={`card  relative h-71.25 w-full rounded-[40px] overflow-hidden shadow-inner cursor-pointer transition-all bg-linear-to-b from-white/80 to-pink-200 flex items-center justify-center max-w-71.25`}
            >
                <div className={`cover ${opened ? "opacity-0" : "opacity-100"} pointer-events-none z-10 bg-[#ffedea]!`} />

                <div className="relative px-6 h-56 overflow-y-auto text-foreground">
                   Happy Birthday,Baby!🎂

You know the first time I saw you, the sunlight was coming from the window and it was falling on your hair and honestly it was one of the most beautiful things I have seen. Like really, I just couldn't stop looking at you.

 You have this special way of making everything around you brighter, your smile, your kindness, and the way you make people feel truly cared for. You are truly one of a kind and I just want you to know how special you are. Keep being the amazing person you are, spreading joy wherever you go.

Btw, as you have not compensated me properly for the mean things you have done to me, I will not stop touching you 😈

But on a real note,You have a very special place in my heart, always. I love you so much. Wishing you endless happiness, success, and all the sweet things life has to offer. 💗
                </div>
            </div>
        </div>
    )
}
