import { ContactForm } from '../pages/ContactForm';
import { About } from '../pages/About';
import { Experience } from "../pages/Experience";
import { Projects } from "../pages/Projects";
import { Skills } from '../pages/Skills';
import { PersonalIntro } from '../pages/PersonalIntro';
import { Footer } from './Footer';

export const MainContent = () => {  return (
    <div className="text-default p-4 sm:p-6 lg:p-0 mx-auto w-full max-w-3xl text-left">
      <PersonalIntro/>
      <About id = "about"/>
      <Experience id='experience'/>
      <Projects id='projects'/>
      <Skills id='skills'/>
      <ContactForm id='contact'/>
      <Footer/>
    </div>
  );
};