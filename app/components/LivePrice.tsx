'use client'

import { useEffect, useState } from "react"

export default function LivePrice({ symbol }: { symbol: string }) {
  const [price, setPrice] = useState<number | null>(null)

  useEffect(() => {
    console.log("🔵 Connecting to Binance WS...")

    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}usdt@trade`)

    ws.onopen = () => {
      console.log("🟢 WebSocket Connected")
    }

    ws.onerror = (err) => {
      console.log("🔴 WebSocket Error:", err)
    }

    ws.onclose = (e) => {
      console.log("🟡 WebSocket Closed", e)
    }

    ws.onmessage = (event) => {
      console.log("📩 RAW MESSAGE:", event.data)

      try {
        const data = JSON.parse(event.data)
        setPrice(parseFloat(data.p))
      } catch (e) {
        console.log("❌ JSON Parse Error:", e)
      }
    }

    return () => {
      console.log("🔌 Closing WS...")
      ws.close()
    }
  }, [symbol])

  return (
    <div className="p-4 bg-black text-white rounded-lg w-fit">
      Live Price: {price ? price.toFixed(2) : "..."}
    </div>
  )
}
