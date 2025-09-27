"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuth = async () => {
      // Get session after redirect
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error("Auth error:", error)
        router.replace("/login")
        return
      }

      if (data?.session) {
        // ✅ Successfully logged in
        router.replace("/") // or wherever you want users to land
      } else {
        // No session? back to login
        router.replace("/login")
      }
    }

    handleAuth()
  }, [router])

  return (null)
}
