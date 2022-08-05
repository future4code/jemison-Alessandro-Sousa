import { Header } from './components/Header'
import { Match } from './components/Match'

import styles from './App.module.css'
import { useState } from 'react'
import { Matches } from './components/Matches'

function App() {
  const [isPageListOfMatchs, setIsPageListOfMatchs] = useState(false)

  function onChangePageListMatchs() {
    setIsPageListOfMatchs(oldState => !oldState)
  }

  return (
    <div className={styles.container}>
      <Header
        isPageListOfMatchs={isPageListOfMatchs}
        onChangePageListMatchs={onChangePageListMatchs}
      />

      {isPageListOfMatchs ? <Matches /> : <Match />}
    </div>
  )
}

export default App
