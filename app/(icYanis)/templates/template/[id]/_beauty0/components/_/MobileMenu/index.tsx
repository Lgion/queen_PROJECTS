import Component from "./Component.jsx"

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
  }) => <Component {...{isMenuOpen,toggleMenu,data,contactButtons}} />