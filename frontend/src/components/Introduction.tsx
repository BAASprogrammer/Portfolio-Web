import { useEffect, useState } from 'react';
import { useScroll } from '../context/ScrollContext';
import { SocialLinks } from './SocialLinks';
import { FaBars } from 'react-icons/fa';

export const Introduction = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const {scrollTo, activeSection} = useScroll();
  const menuClass = (id : string) => 
    `text-menu cursor-pointer
    ${activeSection === id ? "active-section" : ""}`;

  useEffect(() => {
    if(isMenuOpen) setMenuOpen(false);
  }, [])

  console.log("valor de ismenuopen "+isMenuOpen);
  
  return (
    <div className="relative">
        <div className={`block md:hidden ${isMenuOpen ? "fixed inset-0 bg-black opacity-70 z-5" : "hidden"}`} onClick={() => setMenuOpen(false)}></div>
        <button className='md:hidden absolute top-4 right-12 z-10 p-2 rounded' onClick={() => setMenuOpen(!isMenuOpen)}><FaBars className='cursor-pointer' size={24}/></button>
        <aside className={`md:block md:sticky md:w-auto md:p-0 md:top-0 md:right-auto md:border-0 md:rounded-none  md:h-screen backdrop-blur-2xl opacity-80 bg-slate-950/80 ${isMenuOpen ? "block absolute w-1/2 max-w-2xl min-w-3xs h-110 p-2 right-4 xs:w-full xs:right-14 top-14 border rounded-2xl z-10 bg-slate-950/90" 
          : "hidden"}`}>
          <div className="pl-4 pr-4 pt-6 h-full text-default ">
              <div className='pl-2 pr-2'>
                <h1 className="hidden md:block text-2xl lg:text-3xl font-bold text-gradient-animate">Desarrolladora Full Stack</h1>
                <div className='block md:hidden text-center font-semibold text-2xl text-gradient-animate'>Menu</div>
                <div className="mt-4">
                  <p className="pb-4 hidden md:block">Genero programas accesibles y responsive con React, TypeScript y Spring Boot.</p>
                  <button onClick={() => {scrollTo('about'); setMenuOpen(false);}} className={menuClass("about")}><span className="line-menu"></span><span className="menu-text"> Sobre mí</span></button>
                  <button onClick={() => {scrollTo('experience'); setMenuOpen(false);}} className={menuClass("experience")}><span className="line-menu"></span><span className="menu-text"> Experiencia</span></button>
                  <button onClick={() => {scrollTo('projects'); setMenuOpen(false);}} className={menuClass("projects")}><span className="line-menu"></span><span className="menu-text"> Proyectos</span></button>
                  <button onClick={() => {scrollTo('skills'); setMenuOpen(false);}} className={menuClass("skills")}><span className="line-menu"></span><span className="menu-text"> Habilidades</span></button>
                  <button onClick={() => {scrollTo('contact'); setMenuOpen(false);}} className={menuClass("contact")}><span className="line-menu"></span><span className="menu-text"> Contacto</span></button>
                </div>
                <div>
                  <SocialLinks />
                </div>
              </div>
          </div>
        </aside>
    </div>

  );
};