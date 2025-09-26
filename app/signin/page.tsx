'use client'
import { useState } from 'react'
import { signInUser } from '@/lib/auth'

export default function SigninPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInUser(email, password)
      setMessage('Login successful!')
    } catch (error) {
      if (error && typeof error === "object" && "message" in error) {
      setMessage((error as { message: string }).message)}
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign in to WheelBid</h1>
      <form onSubmit={handleSignin} className="flex flex-col gap-3 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Sign In
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
