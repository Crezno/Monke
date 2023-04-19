import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="fixed h-full w-full opacity-202 bg-cover bg-center" style={{ backgroundImage: 'url("/img/abstract-bg.png")' }}>
      <div className='relative z-10 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center h-full p-12 md:px-4'>
        <div className="w-full md:w-1/3 flex justify-start md:justify-end">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <Link href="/home"><img className='w-full md:w-64' src="/img/button-home.png" alt="" /></Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScZ0CD8PNf_OOw_-gFj95c0WOYVqJydUNytNU0r8-ESocp2GQ/viewform"><img className='w-full md:w-64' src="/img/Whitelist button.png" alt="" /></Link>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <img src="/img/join the whitelist.png" alt="" className="w-full" style={{ height: '70%', objectFit: 'contain' }} />
        </div>
      </div>
      <div className='flex justify-center mt-8'>
        <a href="https://discord.gg/ZRp4QAPF"><motion.img animate={{ rotate: ['1deg', '-1deg', '1deg'] }} transition={{ duration: 4, repeat: Infinity }} src="/img/discord-advt.gif" alt="" /></a>
      </div>
    </div>
  );
}
