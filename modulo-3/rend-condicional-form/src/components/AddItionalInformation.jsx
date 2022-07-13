import styles from './AddItionalInformation.module.css';

export function AddItionalInformation({ onSetShowMessage }) {
  const [disableButton, setDisableButton] = useState(true);

  function handleFormData() {
    event.preventDefault();

    setDisableButton(false);

    onSetShowMessage();
  }

  return (
    <form className={styles.formData} onSubmit={handleFormData}>
      <fieldset>
        <legend>Informações educacionais</legend>

        <div className={styles.lineForm}>
          <input type="text" placeholder='Qual curso?' />
          <input type="text" placeholder='Qual a unidade de ensino?' />
        </div>

        {disableButton && <button type="submit">Salvar</button>}
      </fieldset>
    </form>
  )
}