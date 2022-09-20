import { Navbar } from "../components/Navbar";
import { usePokemon } from "../hooks/usePokemon";

export function Pokemon() {
  const { pokemon } = usePokemon();

  return (
    <div>
      <Navbar />
      <img src={pokemon.picture} width={200} />
      <p>{pokemon.name}</p>
    </div>
  );
}
