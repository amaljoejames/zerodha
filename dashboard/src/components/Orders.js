"use client"

import { useEffect, useState } from "react"
import axios from "axios"

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("http://localhost:3002/orders")
      .then((res) => {
        setOrders(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" }}>
        <div>
          <p style={{ fontSize: "18px", color: "#666" }}>Loading your orders...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "8px" }}>Your Orders</h1>
        <p style={{ color: "#666" }}>Track and manage your stock orders</p>
      </div>

      {orders.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>No orders yet</h3>
          <p style={{ color: "#666", marginBottom: "20px" }}>You haven't placed any orders today. Start trading!</p>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
            {orders.length} order{orders.length !== 1 ? "s" : ""} found
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {orders.map((order) => (
              <div
                key={order._id}
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  padding: "20px",
                  backgroundColor: "white",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>{order.name}</h3>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "14px", color: "#666" }}
                    >
                      <span>Qty: {order.qty}</span>
                      <span>•</span>
                      <span style={{ fontWeight: "500", color: "#000" }}>₹{order.price.toLocaleString()}</span>
                    </div>
                  </div>
                  <div>
                    <span
                      style={{
                        backgroundColor: order.mode === "BUY" ? "#28a745" : "#dc3545",
                        color: "white",
                        padding: "4px 12px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      {order.mode}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "30px",
              padding: "16px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: "500" }}>Total Amount:</span>
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                ₹{orders.reduce((total, order) => total + order.price, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Orders
