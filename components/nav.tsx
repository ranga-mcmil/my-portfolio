"use client";
import { ArrowLeft, Github, Instagram, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link target="_blank" href="https://github.com/ranga-mcmil">
              <Github
                className={`w-6 h-6 duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100`}
              />
            </Link>

            <Link target="_blank" href="tel:+263774964536">
              <Phone
                className={`w-6 h-6 duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100`}
              />
            </Link>

            <Link target="_blank" href="https://www.instagram.com/ranga_mcmil">
              <Instagram
                className={`w-6 h-6 duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100`}
              />
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
