import { Peoples } from "./components/Peoples";
import course from "./course.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Peoples />
    </main>
  );
}
