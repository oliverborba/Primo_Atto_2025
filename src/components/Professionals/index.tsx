
import Psi from "../Description/Psi";
import To from "../Description/To";
import "./index"

const Professionals = () => {
    return (
        <section className="professionals-wrapper">
            <div className="paddings innerWidth professionals-container">
                <div className="professionals-header">
                    <h1 className="orangeText">Nossa Equipe Especializada</h1>
                    <p className="secondaryText">
                        Conheça os profissionais dedicados que fazem parte da equipe Primo Atto.
                        Cada membro traz expertise específica e paixão pelo desenvolvimento humano,
                        trabalhando em conjunto para oferecer o melhor cuidado personalizado.
                    </p>
                </div>

                <div className="professionals-content">
                    <To />
                    <Psi />
                </div>

                <div className="professionals-footer">
                    <h2 className="orangeText">Nossa Abordagem Colaborativa</h2>
                    <p className="secondaryText">
                        Trabalhamos de forma integrada, combinando as especialidades de
                        <strong> Terapia Ocupacional</strong>, <strong>Psicologia Clínica</strong> e
                        <strong> Musicoterapia</strong> para criar planos de intervenção únicos
                        e eficazes para cada paciente e família.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Professionals;
