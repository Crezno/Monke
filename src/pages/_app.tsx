import Head from 'next/head'
import { SWRConfig } from 'swr'
import '../global.css'
import axios from 'axios'
import useSound from 'use-sound';
import { useState } from 'react';
import Meta from '../components/Meta';
import Banner from '../components/Banner';
import Ticker from 'react-ticker';


export const AppContext = createContext({})
export const useAppContext = () => useContext(AppContext as any)

export default function MyApp({ Component, pageProps }) {
    const [play, { stop, isPlaying }] = useSound("/audio/monke-song.mp3");
    const [audioImage, setAudioImage] = useState('/img/audio-off.png'); // Set initial image to "off" state
    const handleAudioToggle = () => {
        if (isPlaying) {
            stop();
            setAudioImage('/img/JJuke off.png');
        } else {
            play({ loop: true });
            setAudioImage('/img/Juke on.png');
        }
    }

    return (
      <>
        <Meta />
        <AppContext.Provider value={{ play }}>
          <SWRConfig value={{ fetcher: (url) => axios.get(url).then((res) => res.data) }}>
            <div className="bg-yellow-400 text-black text-xs font-medium p-2">
             <Ticker>
              {({ index }) => (
                <>
                  <h1>MINT IN A FEW DAY.{' '}</h1>
                  <h1><a href="https://discord.gg/cUsHR29meY" className="underline">JOIN DISCORD.</a>{' '}</h1>
                  <h1>MEET HOT SINGLE MONKE.&nbsp;</h1>
                  <h1>THIS MINT IS BANANAS.{' '}</h1>
                  <button onClick={handleAudioToggle}>
                    <img src={audioImage} alt="Audio" />
                  </button>
                </>
              )}
            </Ticker>
            </div>
            <Component {...pageProps} />
          </SWRConfig>
        </AppContext.Provider>
      </>
    );
}
