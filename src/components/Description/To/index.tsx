import './styles.css'

const To = () => {
    return (
        <section className="t-wrapper">
            <div className="paddings innerWidth flexCenter t-container">

                <div className="t-left">
                    <div className="image-container">
                        <img src="./laisa_to.png" alt="Laísa Borba - Terapeuta Ocupacional especialista em desenvolvimento infantil e autismo" loading="lazy" />
                    </div>
                </div>

                <div className="flexColStart t-right">
                    <span className="orangeText">Laísa Borba</span>
                    <span className="primaryText">Terapeuta Ocupacional</span>
                    <br />
                    <span className="secondaryText">
                        <strong>Formação Acadêmica e Especializações:</strong>
                        <ul>
                            <li><strong>Graduação:</strong> Terapia Ocupacional pelo Centro Universitário da Serra Gaúcha (FSG)</li>
                            <li><strong>Especialização:</strong> Intervenção Precoce no Autismo Baseado no Modelo Denver (ESDM) - CBI of Miami</li>
                            <li><strong>Especialização:</strong> Saúde Pública com Ênfase em Saúde da Família - Uninter</li>
                            <li><strong>Certificação Internacional:</strong> Integração Sensorial de Ayres (ASI®)</li>
                            <li><strong>Formação:</strong> Conceito Bobath para desenvolvimento neuromotor</li>
                            <li><strong>Cursos de Aprimoramento:</strong> ABA (Análise do Comportamento Aplicada), TEACCH, DIR/Floortime</li>
                        </ul>
                    </span>
                    <br />
                    <span className="secondaryText">
                        <strong>Áreas de Especialidade:</strong>
                        <ul>
                            <li>Transtorno do Espectro do Autismo (TEA)</li>
                            <li>Integração Sensorial e Processamento Sensorial</li>
                            <li>Desenvolvimento Neuromotor e Coordenação</li>
                            <li>Atividades de Vida Diária e Autonomia</li>
                            <li>Intervenção Precoce (0-6 anos)</li>
                            <li>Adaptações e Tecnologia Assistiva</li>
                        </ul>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default To