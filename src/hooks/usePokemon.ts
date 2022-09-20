import { useFetch } from "./useFetch";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export function usePokemon() {
  const { response } = useFetch<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );

  return { pokemon: response };
}
