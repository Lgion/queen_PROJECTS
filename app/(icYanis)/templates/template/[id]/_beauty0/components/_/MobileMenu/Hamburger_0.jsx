import { X } from 'lucide-react';

export default ({isMenuOpen, toggleMenu, data, contactButtons}) => <article 
    className={`mobile-menu ${isMenuOpen ? 'is-visible' : 'is-hidden'}`}
    role="dialog"
    aria-modal="true"
>
    <header className="mobile-menu__header">
        <h2>Menu</h2>
        <button onClick={toggleMenu}>
            <X size={24} />
        </button>
    </header>

    <nav className="mobile-menu__navigation">
        {data.map((item) => (
            <a key={item.label} href={item.href} onClick={toggleMenu}>
                <item.icon size={20} aria-hidden="true" />
                <span>{item.label}</span>
            </a>
        ))}
    </nav>

    <footer className="mobile-menu__footer">
        <button>Réserver maintenant</button>
        <section className="mobile-menu__social">
            {contactButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                    <a 
                        key={index}
                        href={button.href}
                        aria-label={button.label}
                    >
                        <Icon size={24} aria-hidden="true" />
                    </a>
                );
            })}
        </section>
    </footer>
</article>
