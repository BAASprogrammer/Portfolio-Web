import { ContactForm } from '../pages/ContactForm';
import { About } from '../pages/About';
import { Experience } from "../pages/Experience";
import { Projects } from "../pages/Projects";
import { Skills } from '../pages/Skills';
import { PersonalIntro } from '../pages/PersonalIntro';
import { Footer } from './Footer';

export const MainContent = () => {
  return (
    <div className="text-default p-6 mx-auto w-full text-left">
      <PersonalIntro />
      <About id="about" />
      <Experience id='experience' />
      <Projects id='projects' />
      <Skills id='skills' />
      <ContactForm id='contact' />
      <Footer />
    </div>
  );
};