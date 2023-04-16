import Head from 'next/head';
import { SWRConfig } from 'swr';
import '../global.css';
import axios from 'axios';
import useSound from 'use-sound';
import { useState, createContext, useContext } from 'react';
import Meta from '../components/Meta';
import Banner from '../components/Banner';
import Ticker from 'react-ticker';

export const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

export default function MyApp({ Component, pageProps }) {
  const [play, { stop, isPlaying }] = useSound('/audio/monke-song.mp3');
  const [audioImage, setAudioImage] = useState('/img/audio off.png');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleAudioToggle = () => {
    if (isAudioPlaying) {
      stop();
      setIsAudioPlaying(false);
      setAudioImage('/img/audio off.png');
    } else {
      play({ loop: true });
      setIsAudioPlaying(true);
      setAudioImage('/img/audio on.png');
    }
  };

  return (
    <>
      <Meta />
      <AppContext.Provider value={{ play }}>
        <SWRConfig value={{ fetcher: (url) => axios.get(url).then((res) => res.data) }}>
          <div className="bg-yellow-400 text-black text-xs font-medium p-2 relative z-10">
            <Ticker>
              {({ index }) => (
                <div style={{ whiteSpace: 'nowrap' }}>
                  <h1 style={{ display: 'inline-block' }}>MINT IN A FEW DAYS???.{' '}</h1>
                  <h1 style={{ display: 'inline-block' }}>
                    <a href="https://discord.gg/cUsHR29meY" className="underline">
                      JOIN DISCORD.{' '}
                    </a>
                  </h1>
                  <h1 style={{ display: 'inline-block' }}>MEET HOT SINGLE MONKE.&nbsp;</h1>
                  <h1 style={{ display: 'inline-block' }}>THIS MINT IS BANANAS.&nbsp;</h1>
                </div>
              )}
            </Ticker>
          </div>
          <Component {...pageProps} />
          <div className="fixed bottom-4 left-4 z-20">
            <button onClick={handleAudioToggle}>
              <img src={audioImage} alt="Audio" width="144" height="144" />
            </button>
          </div>
        </SWRConfig>
      </AppContext.Provider>
    </>
  );
}
