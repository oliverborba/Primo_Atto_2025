import './styles.css';

const Psi = () => {
  return (
    <section className="p-wrapper">
      <div className="paddings innerWidth flexCenter p-container">
        <div className="p-left">
          <span className="orangeText">Rafael Marrero Brignol</span>
          <span className="primaryText">
            <br />Psicólogo Clínico<br />
            CRP 05/67479
          </span>
          <span className="primaryText">
            Musicoterapeuta<br />
            AMT-RJ 649/1
          </span>
          <br />
          <span className="secondaryText">
            <strong>Formação Acadêmica e Especializações:</strong>
            <ul>
              <li><strong>Graduação:</strong> Psicologia - Universidade da Região da Campanha (URCAMP-RS) - 2011</li>
              <li><strong>Especialização:</strong> Musicoterapia - Conservatório Brasileiro de Música (CBM-RJ) - 2013</li>
              <li><strong>Mestrado:</strong> Educação - Universidade Federal de Pelotas (UFPEL-RS) - 2016</li>
              <li><strong>Especialização:</strong> Saúde Pública com Ênfase na Saúde da Família - UNINTER - 2019</li>
              <li><strong>Especialização:</strong> Terapia Cognitivo-Comportamental (TCC) - IESLA - 2024</li>
            </ul>
          </span>
          <br />
          <span className="secondaryText">
            <strong>Formações Complementares:</strong>
            <ul>
              <li><strong>ABA:</strong> Análise do Comportamento Aplicada para Transtorno do Espectro do Autismo</li>
              <li><strong>Modelo Denver (ESDM):</strong> Intervenção precoce naturalística para crianças com TEA</li>
              <li><strong>Musicoterapia Neurológica:</strong> Técnicas específicas para reabilitação neurológica</li>
              <li><strong>Psicoterapia Infantil:</strong> Abordagens lúdicas e desenvolvimentais</li>
            </ul>
          </span>
          <br />
          <span className="secondaryText">
            <strong>Áreas de Especialidade:</strong>
            <ul>
              <li>Transtorno do Espectro do Autismo (TEA)</li>
              <li>Psicoterapia Infantil e do Adolescente</li>
              <li>Musicoterapia para Desenvolvimento Neuropsicológico</li>
              <li>Terapia Cognitivo-Comportamental</li>
              <li>Regulação Emocional e Comportamental</li>
              <li>Comunicação e Linguagem através da Música</li>
              <li>Orientação Familiar e Parental</li>
            </ul>
          </span>
        </div>
        <div className="p-right">
          <div className="image-container">
            <img src="./rafa.png" alt="Rafael Marrero Brignol - Psicólogo Clínico e Musicoterapeuta especialista em autismo e desenvolvimento infantil" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Psi;
