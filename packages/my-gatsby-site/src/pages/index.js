import * as React from "react"
import {testFunction as vite} from "my-vite-lib"
import {testFunction as viteAlternate} from "my-vite-lib/alternate"
import {testFunction as rollup} from "my-rollup-lib"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}


const IndexPage = () => {

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        {vite()}
      </h1>

      <h1 style={headingStyles}>
        {viteAlternate()}
      </h1>

      <h1 style={headingStyles}>
        {rollup()}
      </h1>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
