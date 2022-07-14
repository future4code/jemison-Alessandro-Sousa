import { useState } from 'react';

import styles from './WithoutCollege.module.css';

export function WithoutCollege({ onSetShowMessage }) {
  const [disableButton, setDisableButton] = useState(true);

  function handleFormData() {
    event.preventDefault();

    setDisableButton(false);

    onSetShowMessage();
  }

  return (
    <form className={styles.formData} onSubmit={handleFormData}>
      <fieldset>
        <div className={styles.lineForm}>
          <div className={styles.inputContainer}>
            <strong>Por que você não terminou um curso de graduação?</strong>
            <input type="text" placeholder='Motivo' required />
          </div>

          <div className={styles.inputContainer}>
            <strong>Você fez algum curso complementar?</strong>
            <select name="courses" required defaultValue={0}>
              <option value="0" disabled>Escolha uma opção</option>
              <option value="1">Curso técnico</option>
              <option value="2">Cursos de inglês</option>
              <option value="3">Não fiz curso complementar</option>
            </select>
          </div>
        </div>

        {disableButton && <button type="submit">Salvar</button>}
      </fieldset>
    </form>
  )
}