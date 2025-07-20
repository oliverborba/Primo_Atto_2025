import './styles.css'

const Map = () => {
    return (
        <section className="m-wrapper">
            <div className="flexCenter paddings innerWidth m-container">
                <div className="flexColStart m-info">
                    <h2 className="orangeText">Nossa Localização</h2>
                    <div className="contact-info">
                        <h3 className="primaryText">Primo Atto - Terapia Ocupacional, Musicoterapia e Psicologia</h3>
                        <p className="secondaryText">
                            <strong>Endereço:</strong><br />
                            R. Barata Ribeiro, 774 - sl 409 e 410<br />
                            Copacabana, Rio de Janeiro - RJ, 22051-002
                        </p>
                        <p className="secondaryText">
                            <strong>Contato:</strong><br />
                            📱 WhatsApp: (21) 99402-1137<br />
                            📧 Email: contato@primoatto.com.br
                        </p>
                        <p className="secondaryText">
                            <strong>Horário de Funcionamento:</strong><br />
                            Segunda a Sexta: 8:00 - 18:00<br />
                            <em>Atendimentos mediante agendamento</em>
                        </p>
                        <p className="secondaryText">
                            <strong>Transporte:</strong><br />
                            🚇 Metrô: Estação Cantagalo (Linha 1) - 3 min a pé<br />
                            🚌 Ônibus: Diversas linhas na Av. Nossa Senhora de Copacabana<br />
                            🚗 Estacionamento: Zona Azul e estacionamentos pagos na região
                        </p>
                    </div>
                </div>

                <div className="m-map">
                    <iframe className='m-iframe'
                        title="Localização da Primo Atto - Terapia Ocupacional, Psicologia e Musicoterapia em Botafogo, Rio de Janeiro"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3674.468546937851!2d-43.176194!3d-22.9329652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f3d6ccac047%3A0xa4251c09f0e88b35!2sPrimo%20Atto%20-%20Terapia%20Ocupacional!5e0!3m2!1spt-BR!2sbr!4v1715945809053!5m2!1spt-BR!2sbr"
                        width="500"
                        height="400"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>
        </section>
    )
}

export default Map
