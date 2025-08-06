import axios from 'axios';
import { useState, useEffect } from 'react';

import s from './EpisodePage.module.css';


export const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
      setEpisodes(response.data.results);
    }).catch((error) => {
      console.error("Error fetching episodes:", error);
    });
  }, []);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Episode Page</h1>
      {episodes.map((episode) => (
        <>
          <ul key={episode.id} className={s.episodeList}>
            <li className={s.episodeName}>Episode name: <strong>{episode.name}</strong></li>
            <li className={s.episodeAirDate}>Air date: <strong>{episode.air_date}</strong></li>
            <li className={s.episodeSeason}>Season: <strong>{episode.episode}</strong></li>
            <li className={s.episodeCharacters}>Number of characters: <strong>{episode.characters.length}</strong></li>
          </ul>
          <hr />
        </>
      ))}
    </div>
  );
}