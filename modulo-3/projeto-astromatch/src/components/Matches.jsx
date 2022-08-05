import { useEffect, useState } from "react"

import { api } from "../service/api";

import styles from './Matches.module.css';

export function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.get(':aluno/matches').then(response => setMatches(response.data.matches))
  }, []);

  return (
    <main className={styles.container}>
      <ul className={styles.listOfMatches}>
        {matches.length > 0 && matches.map(match => (
          <li key={match.id} className={styles.match}>
            <img src={match.photo} alt="" />
            <span>{match.name}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}