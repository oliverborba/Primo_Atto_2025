// components/Common/Header.tsx
import { useState } from 'react';
import { Link } from "react-router-dom";
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import './styles.css';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const handleWhatsAppClick = () => {
        const phoneNumber = '5521994021137';
        const message = 'Olá! Gostaria de agendar uma consulta na Primo Atto. Atendimento particular (não atendemos convênios médicos).';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const getMenuStyles = (menuOpened: boolean) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: menuOpened ? "0" : "-100%" };
        }
        return {};
    };

    return (
        <header className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./file.png" alt="Primo Atto - Logo da clínica de Terapia Ocupacional, Psicologia e Musicoterapia" width={150} />

                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <nav className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <Link to="/" title="Página inicial - Primo Atto">Início</Link>
                        <Link to="/sobre" title="Conheça nossa história e metodologia">Sobre Nós</Link>
                        <Link to="/profissionais" title="Conheça nossa equipe especializada">Nossa Equipe</Link>
                        <Link to="/localizacao" title="Encontre nossa localização">Localização</Link>
                        <button
                            onClick={handleWhatsAppClick}
                            className="btn-secondary btn-whatsapp"
                            title="Fale conosco pelo WhatsApp"
                        >
                            💬 WhatsApp
                        </button>
                    </nav>
                </OutsideClickHandler>

                <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </header>
    );
};

export default Header;
