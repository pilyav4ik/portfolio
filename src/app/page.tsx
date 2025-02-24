import Contacts from "./components/contacts";
import Hero from "./components/hero/page";
import Services from "./components/services";
import { Header } from "./components/header";
import ProjectsOnHome from "./components/projectsOnHome";


export default async function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ProjectsOnHome />
      <Contacts />
    </main>
  )
}
