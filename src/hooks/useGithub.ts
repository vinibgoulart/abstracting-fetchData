import { useFetch } from "./useFetch";

interface Github {
  name: string;
  avatar_url: string;
}

export function useGithub() {
  const { response } = useFetch<Github>(
    "https://api.github.com/users/ViniBGoulart"
  );

  return { github: response };
}
