import './styles.css';

const CallToAction = () => {
  return (
    <section className="cta-wrapper">
      <div className="paddings innerWidth flexCenter cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Pronto para dar o próximo passo?
          </h2>
          <p className="cta-subtitle">
            Nossa equipe especializada está aqui para ajudar você e sua família.
            Entre em contato conosco através do WhatsApp no menu acima e descubra como podemos contribuir
            para o desenvolvimento e bem-estar.
          </p>

          <div className="cta-features">
            <div className="cta-feature">
              <span className="cta-feature-icon">⚡</span>
              <span>Resposta em até 24h</span>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">👨‍⚕️</span>
              <span>Equipe especializada</span>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">🎯</span>
              <span>Atendimento personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
