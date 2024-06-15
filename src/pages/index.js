import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { client } from "../utils/client"

const IndexPage = () => {
  const router = useRouter()
  const go = () => {
    router.push(`https://sbftv.com`)
  }

  useEffect(() => {
    go()
  }, [])

  return (<div></div>)
}

export async function getStaticProps({ params }) {
  const response = await client.products.list({ limit: 1 })

  const [product, ...rest] = response.products

  return { props: { product } }
}

export default IndexPage
