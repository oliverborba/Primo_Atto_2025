import './styles.css';
import CallToAction from '../CallToAction';

const Sobre = () => {
    return (
        <>
            <section className="a-wrapper">
                <div className="paddings innerWidth flexCenter a-container">
                    <div className="flexColStart a-left">
                        <div className="a-title">
                            <h1 className="orangeText">
                                Profissionais da área da saúde,<br />
                                especializados em desenvolvimento infantil<br />
                            </h1>
                        </div>
                        <div className="flexColStart a-des">
                            <span className="secondaryText">
                                Com mais de seis anos de experiência dedicados ao atendimento de crianças,
                                adolescentes e adultos com as mais diversas necessidades especiais,
                                nossa equipe multidisciplinar oferece intervenções baseadas em evidências científicas.<br /><br />

                                Acreditamos firmemente que a generalização da aprendizagem através de
                                intervenções individualizadas e personalizadas são fundamentais para promover
                                a autonomia, independência e qualidade de vida de nossos pacientes e suas famílias.
                            </span>
                        </div>

                        <div className="a-title">
                            <h2 className="orangeText">
                                Nossa Abordagem Terapêutica<br />
                            </h2>
                        </div>
                        <div className="flexColStart a-des">
                            <span className="secondaryText">
                                Utilizamos metodologias reconhecidas internacionalmente como:<br />
                                <ul>
                                    <li><strong>Modelo Denver (ESDM)</strong> - Intervenção precoce naturalística para crianças com TEA</li>
                                    <li><strong>Análise do Comportamento Aplicada (ABA)</strong> - Estratégias baseadas em evidências</li>
                                    <li><strong>Integração Sensorial de Ayres</strong> - Processamento sensorial e regulação</li>
                                    <li><strong>Conceito Bobath</strong> - Desenvolvimento neuromotor</li>
                                    <li><strong>Terapia Cognitivo-Comportamental</strong> - Saúde mental e emocional</li>
                                    <li><strong>Musicoterapia</strong> - Desenvolvimento através da música</li>
                                </ul>
                            </span>
                        </div>

                        <div className="a-title">
                            <h2 className="orangeText">
                                Área de Atuação<br />
                            </h2>
                        </div>
                        <div className="flexColStart a-des">
                            <span className="secondaryText">
                                Nossa especialidade principal é o atendimento a pessoas dentro do
                                <strong> Transtorno do Espectro do Autismo (TEA)</strong>, oferecendo suporte
                                através de <strong>Terapia Ocupacional</strong>, <strong>Psicologia Clínica</strong>
                                e <strong>Musicoterapia</strong>.<br /><br />

                                Também atendemos crianças, adolescentes e adultos com diversos diagnósticos:<br />
                                <ul>
                                    <li><strong>Síndrome de Down</strong> - Desenvolvimento cognitivo e motor</li>
                                    <li><strong>Síndrome de Prader-Willi</strong> - Regulação comportamental e sensorial</li>
                                    <li><strong>Deficiência Intelectual</strong> - Estimulação cognitiva e adaptativa</li>
                                    <li><strong>Transtornos do Neurodesenvolvimento</strong> - TDAH, dislexia, entre outros</li>
                                    <li><strong>Atrasos Globais do Desenvolvimento</strong> - Estimulação precoce</li>
                                    <li><strong>Transtornos de Processamento Sensorial</strong> - Integração sensorial</li>
                                </ul>
                            </span>
                        </div>

                        <div className="a-title">
                            <h2 className="orangeText">
                                Intervenção Precoce e Follow-Up<br />
                            </h2>
                        </div>
                        <div className="flexColStart a-des">
                            <span className="secondaryText">
                                Promovemos ativamente a conscientização sobre a importância do
                                <strong> Follow-Up em crianças de grupos de risco</strong>, incluindo:<br />
                                <ul>
                                    <li>Prematuros e baixo peso ao nascer</li>
                                    <li>Histórico familiar de transtornos do neurodesenvolvimento</li>
                                    <li>Exposição a fatores de risco pré, peri ou pós-natais</li>
                                    <li>Sinais precoces de atraso no desenvolvimento</li>
                                </ul>

                                Nosso objetivo é identificar precocemente qualquer atraso no desenvolvimento
                                para encaminhamento imediato à <strong>intervenção precoce</strong>,
                                maximizando assim o potencial de desenvolvimento da criança através da
                                neuroplasticidade cerebral nos primeiros anos de vida.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    );
}; export default Sobre;
