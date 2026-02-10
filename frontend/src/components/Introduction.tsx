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
        <aside className={`md:block md:sticky md:w-auto md:p-0 md:top-0 md:right-auto md:border-0 md:rounded-none md:h-screen backdrop-blur-2xl opacity-90 bg-slate-950/90 md:bg-gradient-to-b md:from-slate-950 md:to-slate-950/95 ${isMenuOpen ? "block absolute w-1/2 max-w-2xl min-w-3xs h-110 p-3 right-4 xs:w-full xs:right-14 top-14 border border-purple-500/20 rounded-2xl z-10 bg-gradient-to-b from-slate-950/95 to-slate-950" 
          : "hidden"}`}>
          <div className="pl-6 pr-6 md:pr-8 pt-8 h-full text-default flex flex-col">
              <div className='space-y-8'>
                <div>
                  <h1 className="hidden md:block text-3xl lg:text-4xl font-bold text-gradient-animate mb-2 drop-shadow-lg">Desarrolladora Full Stack</h1>
                  <div className='block md:hidden text-center font-bold text-2xl text-gradient-animate mb-2 drop-shadow-md'>Menú</div>
                  <div className="hidden md:block h-1 w-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mb-4"></div>
                </div>
                
                <div>
                  <p className="pb-4 hidden md:block text-gray-200 text-sm leading-relaxed foreground">
                    <span className="text-cyan-400 font-bold">Creo</span> programas 
                    <span className="text-pink-400 font-semibold"> accesibles</span> y 
                    <span className="text-purple-400 font-semibold"> responsive</span> con 
                    <span className="text-blue-400 font-semibold"> React</span>, 
                    <span className="text-yellow-400 font-semibold"> TypeScript</span> y 
                    <span className="text-red-400 font-semibold"> Spring Boot</span>.
                  </p>
                </div>
              </div>

              <nav className="flex-1 py-8">
                <div className="space-y-2">
                  <button onClick={() => {scrollTo('about'); setMenuOpen(false);}} className={`${menuClass("about")} w-full group hover:pl-1 transition-all`}><span className="line-menu"></span><span className="menu-text">Sobre mí</span></button>
                  <button onClick={() => {scrollTo('experience'); setMenuOpen(false);}} className={`${menuClass("experience")} w-full group hover:pl-1 transition-all`}><span className="line-menu"></span><span className="menu-text">Experiencia</span></button>
                  <button onClick={() => {scrollTo('projects'); setMenuOpen(false);}} className={`${menuClass("projects")} w-full group hover:pl-1 transition-all`}><span className="line-menu"></span><span className="menu-text">Proyectos</span></button>
                  <button onClick={() => {scrollTo('skills'); setMenuOpen(false);}} className={`${menuClass("skills")} w-full group hover:pl-1 transition-all`}><span className="line-menu"></span><span className="menu-text">Habilidades</span></button>
                  <button onClick={() => {scrollTo('contact'); setMenuOpen(false);}} className={`${menuClass("contact")} w-full group hover:pl-1 transition-all`}><span className="line-menu"></span><span className="menu-text">Contacto</span></button>
                </div>
              </nav>

              <div className="pb-8 md:pb-6 border-t border-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 pt-8">
                <p className="text-xs text-gray-400 text-center mb-4 font-medium">CONECTA CONMIGO</p>
                <SocialLinks />
              </div>
            </div>
        </aside>
    </div>

  );
};