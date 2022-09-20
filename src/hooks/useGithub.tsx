import { useEffect, useState } from "react";

type ProfileGithub = {
  name: string;
  avatar: string;
};

type APIGithubResponse = {
  name: string;
  avatar_url: string;
};

export function useGithub() {
  const [github, setGithub] = useState<ProfileGithub>({} as ProfileGithub);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/users/ViniBGoulart");
      const data = (await res.json()) as APIGithubResponse;

      setGithub({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);

  return { github };
}
