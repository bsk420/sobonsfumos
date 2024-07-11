import { Flex, Text } from "@theme-ui/components"
import moment from "moment"
import React from "react"

const OrderConfirmation = ({ order }) => {
  const customerName =
    !order.customer.first_name || !order.customer.last_name
      ? `${order.shipping_address.first_name} ${order.shipping_address.last_name}`
      : `${order.customer.first_name} ${order.customer.last_name}`

  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}
    >
      <Flex
        mt={3}
        pb={3}
        sx={{
          fontSize: "24px",
          borderBottom: "1px solid #E5E7EB",
          flexDirection: "column",
          fontWeight: "500",
        }}
      >
        <Flex sx={{ lineHeight: "36px" }}>
          Obrigado!, {customerName}! <br />
          Estamos a tratar do teu pedido.
        </Flex>
        <Text variant="summary" sx={{ mt: "8px" }}>
          O teu pedido foi concluido com sucesso, estamos a tratar de o enviar.
          Verifica o teu email para o email de confirmação.
        </Text>
      </Flex>
      <Flex my={3} pb={3} sx={{ flex: 1 }}>
        <Flex
          sx={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Flex sx={{ mb: "8px" }}>
            <Text variant="summary" sx={{ mr: "5px" }}>
              Numero do Pedido:
            </Text>
            <Text variant="summary" sx={{ color: "#111827" }}>
              {order.display_id}
            </Text>
          </Flex>
          <Flex sx={{ mb: "8px" }}>
            <Text variant="summary" sx={{ mr: "5px" }}>
              Data:
            </Text>
            <Text variant="summary" sx={{ color: "#111827" }}>
              {moment(order.created_at).format("LLLL")}
            </Text>
          </Flex>
          <Flex sx={{ mb: "24px" }}>
            <Text variant="summary" sx={{ mr: "5px" }}>
              Enviamos o email de confirmacao para {" "}
              <span style={{ color: "#111827", fontWeight: 500 }}>
                {order.email}
              </span>
            </Text>
          </Flex>
          <Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default OrderConfirmation
