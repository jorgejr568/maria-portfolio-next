import React from 'react'

import '../styles/app.scss'
export default function App({ Component, ...props }) {
  return <Component {...props} />
}
