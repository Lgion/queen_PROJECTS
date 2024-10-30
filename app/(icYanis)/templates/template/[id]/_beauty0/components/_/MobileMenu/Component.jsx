import { X } from 'lucide-react';


export default ({isMenuOpen,toggleMenu,data,contactButtons}) => <>
    <div 
        className={`overlay ${isMenuOpen ? 'is-visible' : 'is-hidden'}`} 
        onClick={toggleMenu} 
    />
    
    <div className={`mobile-menu ${isMenuOpen ? 'is-visible' : 'is-hidden'}`}>
        <div>
        <div>
            <div>
            <span>Menu</span>
            <button onClick={toggleMenu}>
                <X size={24} />
            </button>
            </div>

            <nav>
            {data.map((item) => (
                <a key={item.label} href={item.href} onClick={toggleMenu}>
                <item.icon size={20} />
                <span>{item.label}</span>
                </a>
            ))}
            </nav>
        </div>

        <div>
            <button>Réserver maintenant</button>
            <div>
            {contactButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                <a 
                    key={index}
                    href={button.href}
                    aria-label={button.label}
                >
                    <Icon size={24} />
                </a>
                );
            })}
            </div>
        </div>
        </div>
    </div>
</>
