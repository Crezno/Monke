import { motion } from "framer-motion";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div
        className="fixed h-full w-full opacity-202 bg-cover bg-center"
        style={{ backgroundImage: 'url("/img/abstract-bg.png")' }}
      ></div>
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto p-12 py-24 space-y-12 md:space-y-24">
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 gap-12 md:gap-24 justify-center">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <Link href="https://memebox.fi/#/swap?outputCurrency=0x5FE188b8580b62Aa15F3aA072034E050a584407a">
                <img className="w-64" src="/img/token.png" alt="" />
              </Link>
              <Link href="/about">
                <img className="w-64" src="/img/button-about.png" alt="" />
              </Link>
              <Link href="https://76fad2-4.myshopify.com/">
                <img className="w-64" src="/img/store.png" alt="" />
              </Link>
              <Link
                href="https://www.scatter.art/silly-monke?tab=mint"
                target="_blank"
              >
                <img className="w-64" src="/img/button-collection.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-40 md:w-60"
              src="/img/crezno-presents.png"
              alt=""
            />
            <motion.img
              animate={{ rotate: ["1deg", "-1deg", "1deg"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full max-w-lg -mb-12 md:-mb-24 z-10"
              src="/img/silly-monke-logo.png"
              alt=""
            />
            <motion.img
              animate={{ rotate: ["-1deg", "1deg", "-1deg"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="max-w-xl w-full"
              src="/img/loop2.gif"
              alt=""
            />
          </div>
        </div>
        <a href="" className="block">
          <motion.img
            animate={{ rotate: ["1deg", "-1deg", "1deg"] }}
            transition={{ duration: 4, repeat: Infinity }}
            src="/img/discord-advt.gif"
            alt=""
          />
        </a>
        <div className="flex justify-center gap-6">
          <a href="https://discord.gg/cUsHR29meY">
            <img className="h-32" src="/img/discord.png" alt="" />
          </a>
          <a href="https://twitter.com/TheSillyMonke">
            <img className="h-32" src="/img/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
