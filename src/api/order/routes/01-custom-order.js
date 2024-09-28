module.exports = {
  routes: [
    {
      // Path defined to find orders by the latest session id
      method: "GET",
      path: "/orderBySessionId/:sessionId",
      handler: "order.findOrderBySessionId",
    },
    {
      // Path defined to get order invoice by order id
      method: "GET",
      path: "/orderInvoice/:orderId",
      handler: "order.getOrderInvoice",
    },
  ],
};
