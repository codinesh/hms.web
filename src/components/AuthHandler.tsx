import React from 'react'
import { useGlobalDispatch, useGlobalState } from '../store/GlobalStore'
import Layout from './Layout'
import SignIn from './SignIn'

const AuthHandler: React.FC = (props) => {
  const { user } = useGlobalState()

  return (
    <>
      <div>{JSON.stringify(user)}</div>
      {user?.loggedIn ? props.children : <SignIn />}
    </>
  )
}

export default AuthHandler
