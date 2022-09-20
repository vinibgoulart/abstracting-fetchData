import { Navbar } from "../components/Navbar";
import { useGithub } from "../hooks/useGithub";

export function Github() {
  const { github } = useGithub();

  return (
    <div>
      <Navbar />
      <img src={github.avatar} width={200} />
      <p>{github.name}</p>
    </div>
  );
}
