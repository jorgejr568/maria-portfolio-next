import React from 'react'

import profileImage from '../../../../public/images/profile-photo.png'
import SkillSection from '../../organisms/SkillSection/SkillSection'

function Home({ currentDate, experiences, educations, skills }) {
  return (
    <>
      <main id="homePage">
        <section className="card">
          <article className="profile-image">
            <picture>
              <img src={profileImage} alt="Foto de perfil de Maria Diniz" />
            </picture>

            <SkillSection skills={skills} />
          </article>
          <article className="profile-infos">
            <section className="presentation">
              <article className="me">
                <h1>
                  MARIA <span className="secondary-color">DINIZ</span>
                </h1>

                <ul>
                  <li>
                    <h3>Endereço: Rio de Janeiro, Brasil</h3>
                  </li>

                  <li>
                    <h3>Telefone: +55 (21) 98451-2680</h3>
                  </li>

                  <li>
                    <h3>E-mail: contato@mariadiniz.com.br</h3>
                  </li>
                </ul>
              </article>

              <h2>Marketing Digital</h2>

              <p>
                Graduanda dedicada à pesquisa na área de Comunicação Social,
                focada em estratégias para novas tecnologias e análise de dados.
                Interessada em me inserir no mercado de marketing digital,
                desenvolvimento web e inteligência de mercado.
              </p>
            </section>

            <section className="experiences">
              <h2>Experiências</h2>

              <ul>
                {experiences.map(experience => (
                  <li key={experience.id}>
                    <h3>
                      {experience.title},{' '}
                      <a
                        href={experience.company_url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {experience.company_name}
                      </a>
                    </h3>
                    <h4>
                      {experience.started_at} -{' '}
                      {experience.finished_at || 'O momento'}
                    </h4>

                    <p>{experience.description}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="educations">
              <h2>Formação Acadêmica</h2>

              <ul>
                {educations.map(education => (
                  <li key={education.id}>
                    <h3>
                      {education.title},{' '}
                      <a
                        href={education.institution_url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {education.institution_name}
                      </a>
                    </h3>
                    <h4>
                      {education.started_at} -{' '}
                      {education.finished_at || 'O momento'}
                    </h4>
                  </li>
                ))}
              </ul>
            </section>

            <SkillSection skills={skills} />
          </article>
          <footer>Build at {currentDate}</footer>
        </section>
      </main>
    </>
  )
}

export default Home
