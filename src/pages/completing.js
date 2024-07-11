import { useCompleteCart } from "medusa-react"
import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { Card, Flex } from "theme-ui"
import Layout from "../components/layout/layout"
import Spinner from "../components/spinner/spinner"

const Completing = () => {
  const router = useRouter()
  const {cid} = router.query


  const completeCartMutation = useCompleteCart(cid)

  const completeCart = async () => {
    const { data, type } = await completeCartMutation.mutateAsync()

    if (type === "order") {
      router.push(`/completed?oid=${data.id}`)
    } else {
      router.push(`/`)
    }
  }

  useEffect(() => {
    if(!cid) {
      return;
    }
    completeCart()
  }, [cid, completeCart])

  return (
    <Layout>
      <Head>
        <title>Checkout - SoBonsFumosTV</title>
        <meta name="description" content="Checkout at SóBonsFumosTV" />
      </Head>
      <Card variant="container" sx={{ backgroundColor: "#F3F4F6" }}>
        <Flex
          sx={{
            position: "relative",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Flex
            sx={{
              position: "absolute",
              bg: "#ffffff",
              opacity: 0.8,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </Flex>
        </Flex>
      </Card>
    </Layout>
  )
}

export default Completing
