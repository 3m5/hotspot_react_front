import React from 'react'
import ReactDOM from 'react-dom'
import App from '~/screens/App/App'

export default function Bootstrap (): React.ReactElement {
  return (
    <App />
  )
}

ReactDOM.render(<Bootstrap />, window.document.getElementById('root'))
