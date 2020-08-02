import React from 'react'

function SkillSection({ skills }) {
  return (
    <section className="skills">
      <h2>Habilidades</h2>

      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            <h3>{skill.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillSection
