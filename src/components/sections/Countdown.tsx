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
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTargetTimestamp = () => {
    const parsed = new Date(EVENT_DETAILS.targetDateISO).getTime();
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
    return new Date(2026, 11, 1, 9, 0, 0).getTime();
  };

  const calculateDifference = () => {
    const target = getTargetTimestamp();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateDifference());

    const timer = setInterval(() => {
      setTimeLeft(calculateDifference());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const displayDays = mounted ? formatTwoDigits(timeLeft.days) : "00";
  const displayHours = mounted ? formatTwoDigits(timeLeft.hours) : "00";
  const displayMinutes = mounted ? formatTwoDigits(timeLeft.minutes) : "00";
  const displaySeconds = mounted ? formatTwoDigits(timeLeft.seconds) : "00";

  return (
    <div className="w-full max-w-xl mx-auto my-6 sm:my-8 p-3 sm:p-5 rounded-2xl bg-navy-card/80 backdrop-blur-md border border-white/10 shadow-card-glass box-border overflow-hidden">
      <div className="flex items-center justify-center gap-1.5 mb-3 text-[11px] sm:text-sm font-semibold tracking-wider text-brand-light uppercase">
        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-light animate-spin" style={{ animationDuration: '8s' }} />
        <span>Compte à Rebours Officiel</span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 sm:gap-4">
        {[
          { label: "Jours", value: displayDays },
          { label: "Heures", value: displayHours },
          { label: "Mins", value: displayMinutes },
          { label: "Secs", value: displaySeconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-navy-main/90 border border-white/10 shadow-inner group hover:border-gold/50 transition-colors duration-200"
          >
            <span
              suppressHydrationWarning
              className="font-data font-extrabold text-lg sm:text-4xl text-gold tabular-nums tracking-tight"
            >
              {item.value}
            </span>
            <span className="text-[9px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mt-0.5 sm:mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
