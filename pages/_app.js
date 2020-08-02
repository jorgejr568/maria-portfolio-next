import React from 'react'

import '../styles/app.scss'
import Favicon from './app/head/favicon'
import Head from 'next/head'

export default function App({ Component, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Favicon />
      <Component {...props} />
    </>
  )
}
