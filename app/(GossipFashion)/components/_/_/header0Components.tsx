import Link from 'next/link'
import { ShoppingCart, Search as SearchIcon , User, Menu as MenuIcon, X } from 'lucide-react';



const Logo = () =>  <Link href="/templates/template/4">Beauté d'Abidjan</Link>

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

const MenuIcons = (data: any[], obj:any) => data.map((item,i) => <li key={i}>
  <Link href={Object.values(item)[0]}>
    {(() => {
      switch(Object.keys(item)[0]) {
        case "search": return <Search {...obj} />
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



const HamburgerButton = ({toggleMenu,isMenuOpen=true}:{toggleMenu:()=>void,isMenuOpen:boolean}) => <button onClick={toggleMenu} aria-label="Menu">{isMenuOpen ? <X /> : <MenuIcon />}</button>
const HamburgerContent = ({data}:{data:any}) => <div>
  <nav>
    <ul>

      {MenuItems(data.hamburgerMenu)}
      
    </ul>
  </nav>
</div>






export {Logo, NavMenus, HamburgerButton, HamburgerContent, MenuItems };