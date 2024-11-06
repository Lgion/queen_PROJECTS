// import Hamburger from "./Hamburger_0.jsx"
import Hamburger from "./Hamburger_1.jsx"
// import Hamburger from "./Hamburger_2.jsx"
// import Hamburger from "./Hamburger_3.jsx"
// import Hamburger from "./Hamburger_4.jsx"

export const MobileMenu = ({
    isMenuOpen,
    toggleMenu,
    data,
    contactButtons
  }: {
    isMenuOpen: boolean,
    toggleMenu: () => void,
    data: any,
    contactButtons: Array<{
      icon: any,
      label: string,
      href: string
    }>
  }) => <>
    <button 
        className={`overlay ${isMenuOpen ? 'is-visible' : 'is-hidden'}`} 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
    />
    {/* <Hamburger {...{isMenuOpen,toggleMenu,data,contactButtons}} /> */}
    <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
  </>
  