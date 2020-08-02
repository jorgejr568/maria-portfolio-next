import React from 'react'

import '../styles/app.scss'
import Head from 'next/head'
import Favicon from './app/head/favicon'

export default function App({ Component, ...props }) {
  return (
    <>
      <Head>
        <title>
          Maria Diniz | Marketing Digital | Formanda de Comunicação Social
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Favicon />
      <Component {...props} />
    </>
  )
}
