"use client";
import {
  ArrowLeft,
  Eye,
  Github,
  Instagram,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Header = () => {
  // const ref = useRef<HTMLElement>(null);

  const links: { label: string; href: string }[] = [];

  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-tl min-h-screen from-black via-zinc-900 to-black">
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent bg-zinc-900/0 border-transparent`}
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
            className={`duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100`}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="text-4xl font-bold tracking-tight text-white sm:text-1xl font-display">
              About Me
            </h3>
            <p className="mt-6 leading-8 text-zinc-300">
            Hey there! Im Ranga, a software developer by trade, chess player by night, and aspiring rap icon (jury is still out on that one).  Fueled by endless cups of coffee and the thrill of building something awesome, I have been on this coding adventure since 2016.            </p>

            <p className="mt-6 leading-8 text-zinc-300">
            Back then, Visual Basic was my jam (dont judge, we all start somewhere!), but I quickly migrated to Python. The web called my name, and Django became my trusty buddy.  JavaScript soon followed, where I fell in love with the power of React and the flexibility of Express.  Next.js and TypeScript joined the party, and for a hot minute, I even dabbled in Kotlin (turns out conquering one language at a time is enough).            </p>

            <p className="mt-6  leading-8 text-zinc-300">
            Whether its building the next big thing or battling it out over the chessboard, Im always up for a challenge. So, if you are looking for a developer who can code like a champ, strategize like a king, and maybe even freestyle a rap on demand (emphasis on the maybe!), lets chat!
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link target="_blank" key={link.label} href={link.href}>
                  {link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
