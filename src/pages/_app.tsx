import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]); //cria a variável de estado episodeList, para poder alterar os dados no browser
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0); //cria a variável de estado currentEpisodeListIndex, para poder alterar os dados no browser
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  //troca o valor de isPlaying apenas pelo click do mouse (chamado em index.tsx em Player)
  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  //troca o valor de isPlaying quando o audio estiver tocando ou pausado (funciona até para teclado)
  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
