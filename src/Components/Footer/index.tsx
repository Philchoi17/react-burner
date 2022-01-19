import React from 'react'
import { Container } from 'reactstrap'

export default function Footer() {
  return (
    <footer className="text-muted">
      <Container>
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>this is a footer</p>
        <p>
          contact me <a href="#">here</a>.
        </p>
      </Container>
    </footer>
  )
}
