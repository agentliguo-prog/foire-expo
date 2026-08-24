"use client";

import React, { useState, useEffect } from "react";
import { EVENT_DETAILS } from "@/lib/constants";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const calculateTimeLeft = () => {
      const target = new Date(EVENT_DETAILS.targetDateISO).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="w-full max-w-xl mx-auto my-8 p-4 rounded-2xl bg-navy-card/60 backdrop-blur-md border border-white/10 shadow-card-glass">
      <div className="flex items-center justify-center gap-2 mb-3 text-xs sm:text-sm font-semibold tracking-wider text-brand-light uppercase">
        <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Compte à Rebours Officiel</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {[
          { label: "Jours", value: isHydrated ? timeLeft.days : "--" },
          { label: "Heures", value: isHydrated ? formatTwoDigits(timeLeft.hours) : "--" },
          { label: "Mins", value: isHydrated ? formatTwoDigits(timeLeft.minutes) : "--" },
          { label: "Secs", value: isHydrated ? formatTwoDigits(timeLeft.seconds) : "--" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-navy-main/80 border border-white/10 shadow-inner group hover:border-gold/40 transition-colors duration-200"
          >
            <span className="font-data font-bold text-2xl sm:text-4xl text-gold tabular-nums tracking-tight">
              {item.value}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-widest mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
