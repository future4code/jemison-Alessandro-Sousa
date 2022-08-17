import { FaUserCheck, FaChevronLeft, FaUndo } from 'react-icons/fa'

import { api } from '../service/api'

import styles from './Header.module.css';

export function Header({ isPageListOfMatchs, onChangePageListMatchs }) {
  async function handleResetMatches() {
    await api.put(':aluno/clear')

    window.location.reload(false)
  }

  return (
    <header className={styles.header}>
      <button type='button' onClick={handleResetMatches}>
        {isPageListOfMatchs && <FaUndo size={24} color='#00CCC0' />}
      </button>

      <div className={styles.title}>
        <strong className={styles.prefix}>astro</strong>
        <strong className={styles.sufix}>match</strong>
      </div>

      <button type='button' onClick={onChangePageListMatchs}>
        {isPageListOfMatchs ? (
          <FaChevronLeft size={24} color='#00CCC0' />
        ) : (
          <FaUserCheck size={24} color='#5611bb' />
        )}
      </button>
    </header>
  )
}