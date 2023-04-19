iimport Link from 'next/link';

export default function Whitelist() {
  return (
    <div className="w-full min-h-screen bg-whitelist bg-cover bg-center">
      <div className='relative z-10 w-full max-w-screen-2xl mx-auto p-12 py-24 space-y-12 md:space-y-24'>
        <div className="w-28 md:w-60">
          <Link href="/home">
            <img src="/img/button-home.png" alt="" /> 
          </Link>
        </div>
        <img src="/img/join the whitelist.png" alt="" />
      </div>
    </div>
  );
}
