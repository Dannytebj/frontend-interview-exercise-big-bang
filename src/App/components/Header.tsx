import automataLogo from '../../assets/automata.png'

export const Header = () => {
  return (
    <>
      <a href="https://automata.tech/" target="_blank" rel="noreferrer">
        <img
          src={String(automataLogo)}
          className="w-16 md:w-32 lg:w-48"
          alt="Automata logo"
        />
      </a>

      <h1>Frontend Exercise</h1>
      <h2>Rock, Paper, Scissors, Lizard, Spock</h2>
    </>
  );
};
