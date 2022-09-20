import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
  picture: string;
};

type APIPokemonResponse = {
  name: string;
  sprites: {
    front_default: string;
  };
};

export function usePokemon() {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = (await res.json()) as APIPokemonResponse;

      setPokemon({
        name: data.name,
        picture: data.sprites.front_default,
      });
    }

    fetchData();
  }, []);

  return { pokemon };
}
