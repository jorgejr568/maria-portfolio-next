import React from 'react'
import Home from '../src/components/environments/Home/Home'
import fetch_experiences from '../src/fetchers/experiences'
import fetch_educations from '../src/fetchers/educations'
import fetch_skills from '../src/fetchers/skills'
import dayjs from '../src/helpers/dayjs'

export default function Index({ pageProps }) {
  return (
    <Home
      currentDate={pageProps.currentDate}
      experiences={pageProps.experiences}
      educations={pageProps.educations}
      skills={pageProps.skills}
    />
  )
}

export const getStaticProps = async () => {
  const experiences = await fetch_experiences()
  const educations = await fetch_educations()
  const skills = await fetch_skills()
  return {
    props: {
      currentDate: dayjs().toDate().toString(),
      experiences,
      educations,
      skills,
    },
    revalidate: process.env.REVALIDATE_TIME,
  }
}
