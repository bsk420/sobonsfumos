import React from "react"
import Helmet from "react-helmet"

const SEO = ({ title }) => {
  return (
    <Helmet
      title={title || "Checkout - SBFTV.COM"}
      meta={[]}
    />
  )
}

export default SEO
