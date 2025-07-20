import './styles.css'

const Home = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container ">
                <div className=" flexColStart hero-left">
                    <div className="hero-title">
                        <h1>
                            Terapia Ocupacional,<br />
                            Psicologia e <br /> Musicoterapia.
                        </h1>
                        <div className="hero-subtitle">
                            <span className="subtitle-text">Cuidado especializado para o desenvolvimento pleno</span>
                        </div>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className='heroSpan'>
                            Especialistas em desenvolvimento infantil, promovendo autonomia,
                            integração sensorial e habilidades sociais através de intervenções
                            personalizadas e baseadas em evidências científicas.
                        </span>
                        <br />
                        <span className='heroSpan'>
                            Nosso foco é a qualidade de vida da criança e da família,
                            trabalhando com amor, dedicação e profissionalismo para
                            alcançar o máximo potencial de cada indivíduo.
                        </span>
                    </div>

                    <div className="hero-features">
                        <div className="feature-item">
                            <span className="feature-icon">🏥</span>
                            <span className="feature-text">Atendimento Especializado</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">👨‍⚕️</span>
                            <span className="feature-text">Equipe Multidisciplinar</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">🎯</span>
                            <span className="feature-text">Intervenção Personalizada</span>
                        </div>
                    </div>

                    <div className="payment-info">
                        <div className="payment-card">
                            <span className="payment-icon">💳</span>
                            <div className="payment-text">
                                <strong>Atendimento Particular</strong>
                                <span>Não atendemos convênios médicos</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./autismo.jpg" alt="Criança representando diversidade neurológica e desenvolvimento inclusivo" />
                        <div className="image-overlay">
                            <div className="overlay-content">
                                <span className="overlay-text">Desenvolvimento com Carinho</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
