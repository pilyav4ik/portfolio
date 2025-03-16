import { Header } from "../components/header";
import Projects from "./projects.client";
import { createClient } from "../utils/supabase/server";

export const revalidate = 360  // revalidate at most every day

export default async function ProjectsServer() {
  const supabase = await createClient();
  const { data: projects, error } = await supabase.from("projects").select().order('id', { ascending: false });


  if (error) {
    console.error("Error during data request:", error.message);
  }  
  return (<>
    <Header />
    
    <Projects projects={projects || []} />
    </>);
}
