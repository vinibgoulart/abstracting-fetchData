import { Navbar } from "../components/Navbar";
import { usePokemon } from "../hooks/usePokemon";

export function Pokemon() {
  const { pokemon } = usePokemon();

  return (
    <div>
      <Navbar />
      <img src={pokemon?.sprites.front_default} width={200} />
      <p>{pokemon?.name}</p>
    </div>
  );
}
