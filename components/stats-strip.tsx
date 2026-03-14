"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { value: "2+", label: "Years experience" },
    { value: "3", label: "Projects shipped" },
    { value: "5", label: "Technologies" },
    { value: "2", label: "Platforms (Web & Android)" },
];

// Duplicate stats to create a seamless infinite scroll loop
const infiniteStats = [...stats, ...stats, ...stats];

export default function StatsStrip() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="border-y border-gray-200 dark:border-gray-800 py-8 sm:py-10 overflow-hidden">
            {/* 
              Wrap the scrolling track in a div that fades in once when scrolled to, 
              so it doesn't just abruptly appear 
            */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex w-full"
            >
                {/* 
                  The actual scrolling track. We animate x from 0 to -33.33% because 
                  we duplicated the array 3 times. When it hits -33.33% it snaps back 
                  to 0, creating a seamless loop.
                */}
                <motion.div
                    animate={{ x: ["0%", "-33.333333%"] }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex shrink-0 items-center justify-start gap-x-16 sm:gap-x-32 pr-16 sm:pr-32"
                >
                    {infiniteStats.map((stat, i) => (
                        <div key={`${stat.label}-${i}`} className="flex flex-col items-center gap-1 shrink-0 w-48 text-center">
                            <span className="text-3xl sm:text-4xl font-bold text-[var(--color-champagne-mist-600)] dark:text-[var(--color-champagne-mist-400)]">
                                {stat.value}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
