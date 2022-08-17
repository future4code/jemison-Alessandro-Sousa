import { useEffect, useMemo, useState } from 'react';
import { FaHeart, FaRegTimesCircle, FaCheckCircle } from 'react-icons/fa';

import { api } from '../service/api'

import loading from '../assets/loading.gif'

import styles from './Match.module.css'

export function Match() {
  const [currentProfile, setCurrentProfile] = useState();
  const [isMatch, setIsMatch] = useState(false);
  
  useEffect(() => {
    api
      .get(':aluno/person')
      .then(response => setCurrentProfile(response.data.profile))
  }, [])

  async function getAnotherPerson() {
    api
      .get(':aluno/person')
      .then(response => setCurrentProfile(response.data.profile))
  }

  async function handleChoosePerson(isChoose) {
    const response = await api.post(':aluno/choose-person', {
      id: currentProfile.id,
      choice: isChoose
    })

    setIsMatch(response.data.isMatch);

    await new Promise(
      resolve => setTimeout(resolve, 1000)
    );

    setIsMatch(false);
    setCurrentProfile(undefined)

    await getAnotherPerson();
  }

  const isMatchRender = useMemo(() => {
    return isMatch
  }, [isMatch]);

  return (
    <main className={styles.container}>
      {currentProfile ? (
        <div className={styles.profile}>
          <img
            src={currentProfile.photo}
            alt={currentProfile.photo_alt}
          />

          <div className={styles.profileInfo}>
            <strong>{currentProfile.name}, {currentProfile.age}</strong>
            <span>{currentProfile.bio}</span>
          </div>
        </div>
      ): (
        <img
          src={loading}
          alt="Carregando perfil"
          className={styles.imgLoading}
        />
      )}

      <div className={styles.buttons}>
        <button
          type='button'
          className={styles.unLike}
          onClick={() => handleChoosePerson(false)}
        >
          <FaRegTimesCircle size={30} />
        </button>

        <button
          type='button'
          className={styles.like}
          onClick={() => handleChoosePerson(true)}
        >
          <FaHeart size={30} />
        </button>
      </div>

      {isMatchRender && (
        <div className={styles.isMatch}>
          <FaCheckCircle size={80} color="#00B37E"/>
          <strong>Deu match!!!</strong>
        </div>
      )}
    </main>
  )
}