import styles from './WarningMessage.module.css';

export function WarningMessage() {
  return (
    <div className={styles.container}>
      <strong>Obrigado por responder nosso formulário</strong>
    </div>
  )
}