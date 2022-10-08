import React from 'react'

import Inicio_sesion_email from './Inicio_sesion_email'
import Inicio_sesion_google from './Inicio_sesion_google'
import Registrarse_con_email from './Registrarse_con_email'
import Registrarse_con_google from './Registrarse_con_google'

function Main() {
  const [isRegistrando, setIsRegistrando] = React.useState(false)
  const [usingGoogle, setUsingGoogle] = React.useState(false)
  const [usingEmail, setUsingEmail] = React.useState(false)

  // Whenever isRegistrando changes, reset the other states
  React.useEffect(() => {
    setUsingGoogle(false)
    setUsingEmail(false)
  }, [isRegistrando])

  // Whenever usingGoogle changes to true, reset usingEmail
  React.useEffect(() => {
    if (usingGoogle) setUsingEmail(false)
  }
  , [usingGoogle])

  // Whenever usingEmail changes to true, reset usingGoogle
  React.useEffect(() => {
    if (usingEmail) setUsingGoogle(false)
  }
  , [usingEmail])

  // If usingGoogle and isRegistrando are both true, render Registrarse_con_google
  // If usingGoogle is true and isRegistrando is false, render Inicio_sesion_google
  // If usingEmail and isRegistrando are both true, render Registrarse_con_email
  // If usingEmail is true and isRegistrando is false, render Inicio_sesion_email

  // To access to the google or email options, the user must first select if he is
  // registering or logging in. If he is registering, he must select if he wants to
  // use google or email. If he is logging in, he must select if he wants to use
  // google or email. If he is logging in with google, he must select if he wants to
  // use google or email. If he is logging in with email, he must select if he wants
  // to use google or email.

  return (
    <div>
      <div>
        <button onClick={() => setIsRegistrando(false)}>Iniciar sesión</button>
        <button onClick={() => setIsRegistrando(true)}>Registrarse</button>
      </div>
      <div>
        {isRegistrando && (
          <div>
            <button onClick={() => setUsingGoogle(true)}>Registrarse con Google</button>
            <button onClick={() => setUsingEmail(true)}>Registrarse con Email</button>
          </div>
        )}
        {!isRegistrando && (
          <div>
            <button onClick={() => setUsingGoogle(true)}>Iniciar sesión con Google</button>
            <button onClick={() => setUsingEmail(true)}>Iniciar sesión con Email</button>
          </div>
        )}
      </div>
      <div>
        {usingGoogle && isRegistrando && <Registrarse_con_google />}
        {usingGoogle && !isRegistrando && <Inicio_sesion_google />}
        {usingEmail && isRegistrando && <Registrarse_con_email />}
        {usingEmail && !isRegistrando && <Inicio_sesion_email />}
      </div>
    </div>
  )
}

export default Main