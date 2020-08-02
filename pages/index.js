import React from 'react'
import Home from '../src/components/environments/Home/Home'
import fetch_experiences from '../src/fetchers/experiences'

export default function Index({ pageProps }) {
  console.log(pageProps)
  return (
    <Home
      currentDate={pageProps.currentDate}
      experiences={pageProps.experiences}
    />
  )
}

export const getStaticProps = async () => {
  const experiences = await fetch_experiences()
  return {
    props: {
      currentDate: new Date().toString(),
      experiences,
    },
    revalidate: process.env.REVALIDATE_TIME,
  }
}
