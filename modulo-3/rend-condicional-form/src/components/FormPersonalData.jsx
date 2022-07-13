import { useState } from 'react';
import styles from './FormPersonalData.module.css';

export function FormPersonalData({ onSetHasCollege, onSetWithoutCollege }) {
  const [levelEducation, setLevelEducation] = useState(0);
  const [disableButton, setDisableButton] = useState(true);

  function handleChangeCollege(event) {
    setLevelEducation(Number(event.target.value));
  }

  function handleFormData() {
    event.preventDefault();

    const hasCollege = levelEducation === 3 || levelEducation === 4;

    setDisableButton(false);

    if (hasCollege) {
      onSetHasCollege();
    } else {
      onSetWithoutCollege();
    }
  }

  return (
    <form className={styles.formData} onSubmit={handleFormData}>
      <fieldset>
        <legend>Dados Gerais</legend>

        <div className={styles.lineForm}>
          <input type="text" placeholder='Nome completo' required />

          <input type="number" placeholder='Idade' required />
        </div>

        <div className={styles.lineForm}>
          <input type="email" placeholder='E-mail' required />

          <select name="education" required value={levelEducation} onChange={handleChangeCollege}>
            <option value="0" disabled>Escolha uma opção</option>
            <option value="1">Ensino Médio Incompleto</option>
            <option value="2">Ensino Médio Completo</option>
            <option value="3">Ensino Superior Incompleto</option>
            <option value="4">Ensino Superior Completo</option>
          </select>
        </div>

        {disableButton && <button type="submit">Salvar</button>}
      </fieldset>
    </form>
  )
}