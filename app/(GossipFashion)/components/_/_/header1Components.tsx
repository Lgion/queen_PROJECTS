import Link from 'next/link'
// import { ShoppingCart, Search as SearchIcon , User, Menu as MenuIcon, X } from 'lucide-react';
import { 
  Menu, X, MapPin, MessageCircle, Phone,
  Scissors, Users, Calendar, Image, Star, Mail, Home,
  ShoppingCart, User, Search as SearchIcon // Ajout des nouveaux icônes
} from 'lucide-react';






const Logo = ({data=null}:{data:any}) =>  <figure>
  {/* <Logo /> */}
  {data?.svg || <Scissors />}
  <figcaption>{data?.label || "L'Atelier"}</figcaption>
</figure>



const Search = ({handleSearch,searchQuery,setSearchQuery}:{handleSearch:()=>void,searchQuery:string,setSearchQuery:(value:string)=>void}) =>  <Link href="/templates/template/4">
  <form onSubmit={handleSearch}>
    <input
      type="text"
      placeholder="Rechercher..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button type="submit">
      <SearchIcon size={18} />
    </button>
  </form>
</Link>



const MenuItems = (data: any[]) => {
  console.log(data);
  
  
  return data.map(({href,label,className},i) => <li key={i}>
    <Link href={href} className={className||""}>{label}</Link>
  </li>

)}

const MenuLabeledIcons = (data: any[], props:any={}) => {

  console.log(data);
  
  
  return data.map((item,i) => <li key={i}>
    <Link
      key={item.label}
      href={item.href}
      className="flex items-center space-x-3 text-lg hover:text-rose-600 transition-colors"
      {...{props}}
    >
      <item.icon size={20} />
      <span>{item.label}</span>
    </Link>
  </li>)
}

const MenuIcons = (data: any[], searchObj:any) => data.map((item,i) => <li key={i}>
  <Link href={Object.values(item)[0]}>
    {(() => {
      switch(Object.keys(item)[0]) {
        case "search": return <Search {...searchObj} />
        case "cart": return <ShoppingCart />
        case "user": return <User />
        default: return null
      }
    })()}
  </Link>
</li>)

const NavMenus = ({data,handleSearch,searchQuery,setSearchQuery}:{data:any,handleSearch:()=>void,searchQuery:string,setSearchQuery:(value:string)=>void}) => {

  return <nav>
    {data.hamburgerMenu && <ul>
      {MenuItems(data.hamburgerMenu)}
    </ul>}
    {data.iconMenu && <ul className='safe'>
      {MenuIcons(data.iconMenu,{...{handleSearch,searchQuery,setSearchQuery}})}
    </ul>}
  </nav>
}



const HamburgerButton = ({toggleMenu,isMenuOpen}:{toggleMenu:()=>void,isMenuOpen:boolean}) => <button onClick={toggleMenu}>{isMenuOpen ? <X /> : <MenuIcon />}</button>
const HamburgerContent = ({data,k,props}:{data:any,k:string,props:any}) => {
  
  
  return <div>
    <nav>
      <ul>

        {MenuLabeledIcons(data[k],props)}
        
      </ul>
    </nav>
  </div>
}
  
const HamburgerFooter = ({cartItemsCount, setIsSearchOpen, isSearchOpen}: {
  cartItemsCount: number,
  setIsSearchOpen: (isOpen: boolean) => void,
  isSearchOpen: boolean
}) => {

  return <div className="mt-auto p-4 border-t dark:border-gray-800">
    <button className="w-full px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors mb-4">
      Réserver maintenant
    </button>

    <div className="flex justify-around">
      <a
        href="#location"
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        aria-label="Location"
      >
        <MapPin size={24} />
      </a>
      <button
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative"
        aria-label="Panier"
      >
        <ShoppingCart size={24} />
        {cartItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItemsCount}
          </span>
        )}
      </button>
      <button
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        aria-label="Rechercher"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <SearchIcon size={24} />
      </button>
      <a
        href="tel:+33123456789"
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        aria-label="Phone"
      >
        {/* <PhoneIcon size={24} /> */}
      </a>
    </div>
  </div>
}





export {Logo, NavMenus, HamburgerButton, HamburgerContent, HamburgerFooter };