import React from 'react'
import './SignIn.scss'
import { googleimg, logo, facebooklogo } from '../assets'

import { Form, LinkButtons } from '../components'

const SignIn = () => {
  return (
    <section className="signin_page">
      {/* //top */}
      <div className="signin_page__top">
        <h1>Let's get started.</h1>
        <p>
          Don't have an account? <a href="#">Sign In</a>
        </p>

        {/* <LinkButtons /> */}
        <div className="signin_page__social-links">
          {/* Sign in with Google */}
          <LinkButtons pic={googleimg} content="Sign in with Google" />
          {/* Sign in with Google */}

          <LinkButtons
            pic={facebooklogo}
            content="Sign in with Facebook"
            bcgcolor="blue"
          />
        </div>
        <p className="or">Or</p>
      </div>

      <Form />
    </section>
  )
}

export default SignIn
