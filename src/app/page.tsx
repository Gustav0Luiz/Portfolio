import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { LangProvider } from "@/contexts/languageContext";
import { ModeProvider } from "@/contexts/modeContext";

const Page = () => {

  return (
    <>
      <ModeProvider>
        <LangProvider>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </LangProvider>
      </ModeProvider>
    </>
  );
};

export default Page;
