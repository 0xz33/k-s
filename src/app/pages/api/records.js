import { useRouter } from "next/router";

export default function Records() {
  const router = useRouter();

  React.useEffect(() => {
    window.location.href = "https://records.kharmha.xyz";
  }, []);

  return null;
}
