import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

import Auth from '../../Services/Auth'

const { useState } = React
export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const login = async () => {
    try {
      const loginAttempt = await Auth.loginUser(email, password)
      console.log(loginAttempt)
    } catch (error) {
      console.error('error =', error)
    }
  }

  return (
    <div>
      hello home
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label>
          <Input
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something@idk.cool"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label>
          <Input
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="don't tell!"
          />
        </FormGroup>
        <Button onClick={login}>Submit</Button>
      </Form>
    </div>
  )
}
