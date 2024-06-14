import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Box, Button, Flex, Text } from "@theme-ui/components"
import { useCart } from "medusa-react"
import React, { useState } from "react"

const PaymentForm = ({ session, handleSubmit, setLoading }) => {
  const [errorMessage, setErrorMessage] = useState()

  const { cart } = useCart()
  const stripe = useStripe()
  const elements = useElements()
  const clientSecret = cart.payment_session.data.client_secret
  const email = cart.email
  const shipping_address = cart.shipping_address
  const billing_address = cart.billing_address

  if (!billing_address) {
    shipping_address.fullName = shipping_address.firt_name + " " + shipping_address.last_name;
    billing_address = shipping_address;

  } else {
    billing_address.fullName = billing_address.firt_name + " " + billing_address.last_name;
  }

  const handlePayment = async e => {
    e.preventDefault()

    setLoading(true)

    if (!stripe || !elements) {
      return
    }

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    return stripe
      .confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: 'https://example.com/order/123/complete',
          shipping: {
            address: {
              city: shipping_address.city,
              country: shipping_address.country,
              line1: shipping_address.line1,
              line2: shipping_address.line2,
              postal_code: shipping_address.postal,
            },
            name: shipping_address.fullName,
            carrier: 'CTT',
            phone:  shipping_address.phone,
          },
          payment_method_data: {
            billing_details: {
              name: shipping_address.fullName,
              email: email,
              phone: shipping_address.fullName,
              address: {
                city: shipping_address.city,
                country: shipping_address.country,
                line1: shipping_address.line1,
                line2: shipping_address.line2,
                postal_code: shipping_address.postal,
              },
            },
          }
          
        },
        // Uncomment below if you only want redirect for redirect-based payments
        // redirect: "if_required",
      })
      .then(async ({ error, paymentIntent }) => {
        if (error) {
          setLoading(false)
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            return handleSubmit()
          }

          setErrorMessage(error.message)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return handleSubmit()
        }

        return
      })
  }

  return (
    <form onSubmit={handlePayment}>
      {errorMessage && <Text sx={{ fontSize: "10px" }}>{errorMessage}</Text>}
      <Box variant="box.paymentField">
        <PaymentElement />
      </Box>
      <Flex>
        <Button variant="cta">Complete order</Button>
      </Flex>
    </form>
  )
}
export default PaymentForm
