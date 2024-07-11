import { Pay, useElements, useStripe } from "@stripe/react-stripe-js"
import { Box, Button, Flex, Text } from "@theme-ui/components"
import { useCart } from "medusa-react"
import React, { useState } from "react"

const PaymentForm = ({ session, setLoading }) => {
  const [errorMessage, setErrorMessage] = useState()

  const { cart } = useCart()
  const stripe = useStripe()
  const elements = useElements()

  const clientSecret = cart.payment_session.data.client_secret
  const email = cart.email
  let shipping_address = cart.shipping_address
  let billing_address;

  if (!cart.billing_address) {
    billing_address = cart.shipping_address
  } else {
    billing_address = cart.billing_address
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
  
    setLoading(true);
  
    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
  
    // Use the clientSecret and Elements instance to confirm the setup
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: process.env.NEXT_PUBLIC_MEDUSA_CHECKOUT_URL + '/completing?cid=' + cart.id,
        shipping: {
          address: {
            city: shipping_address.city,
            country: shipping_address.country,
            line1: shipping_address.line1,
            line2: shipping_address.line2,
            postal_code: shipping_address.postal,
          },
          name: shipping_address.first_name + ' ' + shipping_address.last_name,
          carrier: 'CTT',
          phone: shipping_address.phone,
        },
        payment_method_data: {
          billing_details: {
            name: billing_address.first_name + ' ' + billing_address.last_name,
            email: email,
            phone: billing_address.phone,
            address: {
              city: billing_address.city,
              country: billing_address.country,
              line1: billing_address.line1,
              line2: billing_address.line2,
              postal_code: billing_address.postal,
            },
          },
        }

      },
      // Uncomment below if you only want redirect for redirect-based payments
      redirect: "always",
    });
  
    if (error) {
      handleError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <Text sx={{ fontSize: "10px" }}>{errorMessage}</Text>}
      <Box variant="box.paymentField">
        <CardElement />
      </Box>
      <Flex>
        <Button variant="cta">Concluir</Button>
      </Flex>
    </form>
  )
}
export default PaymentForm
