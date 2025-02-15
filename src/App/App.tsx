import automataLogo from '../assets/automata.png'
import './App.css'

function App() {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex">
        <a href="https://automata.tech/" target="_blank" rel="noreferrer">
          <img
            src={String(automataLogo)}
            className="w-16 md:w-32 lg:w-48"
            alt="Automata logo"
          />
        </a>
      </div>
      <h1>Frontend Exercise</h1>
      <h2>Rock, Paper, Scissors, Lizard, Spock</h2>
    </div>
  );
}

export default App
