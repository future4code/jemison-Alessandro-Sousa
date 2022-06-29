
import fotoPerfil from  './img/logo.jpeg'
import './App.css';


function App() {

  const titulo = 'Bem vindo, Alessandro!'
  const mandarMensagem =() => {
    alert('Boa noite!')
  }

  return (

    <div className="App">

      <h1>{titulo}</h1>
      <img src={fotoPerfil} className='Foto-Perfil' alt='Foto de perfil pessoal' />
      <a> Este é o meu primeiro site react! </a>
      <button onClick = {mandarMensagem}>Clique aqui!</button> 

    </div>
  );
}

export default App;
