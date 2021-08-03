import './App.css';
import ArgonautesList from './containers/ArgonautesList/ArgonautesList';
import NewArgoForm from './containers/NewArgoForm/NewArgoForm';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <h1>
            <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
            Les Argonautes
          </h1>
        </header>
        
        <main>
          <NewArgoForm />
          <ArgonautesList />
        </main>
      </div>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </>
  );
}

export default App;
