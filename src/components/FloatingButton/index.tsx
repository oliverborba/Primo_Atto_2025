import './styles.css';

const FloatingButton = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '5521994021137';
        const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Primo Atto - Terapia Ocupacional, Psicologia e Musicoterapia. Atendimento particular (não atendemos convênios). Poderia me ajudar?');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="floating-container">
            <button
                className="floating-whatsapp-btn"
                onClick={handleWhatsAppClick}
                aria-label="Contato via WhatsApp - Primo Atto"
                title="Fale conosco pelo WhatsApp"
            >
                💬 WhatsApp
            </button>
        </div>
    );
};

export default FloatingButton;
