import { useState } from 'react'

import './App.css'

import { FormPersonalData } from './components/FormPersonalData';
import { AddItionalInformation } from './components/AdditionalInformation';
import { WithoutCollege } from './components/WithoutCollege';
import { WarningMessage } from './components/WarningMessage';

function App() {
  const [hasCollege, setHasCollege] = useState(false);
  const [withoutCollege, setWithoutCollege] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  function onSetHasCollege() {
    setHasCollege(true);
  }

  function onSetWithoutCollege() {
    setWithoutCollege(true);
  }

  function onSetShowMessage() {
    setShowMessage(true);
  }

  return (
    <div className='container'>
      <FormPersonalData
        onSetHasCollege={onSetHasCollege}
        onSetWithoutCollege={onSetWithoutCollege}
      />

      {hasCollege && <AddItionalInformation onSetShowMessage={onSetShowMessage} />}

      {withoutCollege && <WithoutCollege onSetShowMessage={onSetShowMessage} />}

      {showMessage && <WarningMessage />}
    </div>
  )
}

export default App
