import Head from "next/head"
import React from "react"
import CompletedLayout from "../components/layout/completed-layout"

const CompletedPage = () => {
  return (
    <>
      <Head>
        <title>Checkout - SoBonsFumosTV</title>
        <meta name="description" content="Checkout at SóBonsFumosTV" />
      </Head>
      <CompletedLayout />
    </>
  )
}

export default CompletedPage
