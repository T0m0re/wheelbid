'use client'
import { useState } from 'react'
import { signInWithGoogle, signUpUser } from '@/lib/auth'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeClosed } from 'lucide-react'

export function LoginCard({ handleFunction }: { handleFunction: (e: React.FormEvent<HTMLFormElement>) => void }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
       
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFunction}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [passwordView, setPasswordView] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if(password == confirmPassword){
      await signUpUser(email, password)
      setMessage('Signup successful! You can now log in.')
      } else{
        setMessage('Password does not match')
      }
    } catch (error) {
      if (error && typeof error === "object" && "message" in error) {
      setMessage((error as { message: string }).message)} 
  }
}

const googleSignIn = async()=>{
        try {
            await signInWithGoogle()
            // setMessage('login succesful!')
        } catch (error) {
            if (error && typeof error === "object" && "message" in error) {
            setMessage((error as { message: string }).message)}
        }
    }


const togglePasswordView = (e: React.FormEvent)=>{
  e.preventDefault()
  setPasswordView(!passwordView)
}

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 tracking-tight mb-4">WheelBid</h1>
      <Card className='py-10 px-25'>
      <h1 className="text-xl font-bold mb-4">Create Account</h1>
      <form onSubmit={handleSignup} className="flex flex-col gap-3 w-80">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="border p-2 rounded"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <div className='relative'>
            <Input id="password"
            placeholder="Password"
            value={password}
            type={!passwordView ? 'password' : 'text'}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
            required />
            <button className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer' onClick={togglePasswordView}>
              {!passwordView ? <EyeClosed/>: <Eye/>}
            </button>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <div className='relative'>
            <Input id="password"
            placeholder="Password"
            value={confirmPassword}
            type={!passwordView ? 'password' : 'text'}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border p-2 rounded w-full"
            required />
            <button className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer' onClick={togglePasswordView}>
              {!passwordView ? <EyeClosed/>: <Eye/>}
            </button>
          </div>
        </div>
        
        <Button type="submit" className="bg-black/70 text-white p-2 rounded cursor-pointer">
          Sign Up
        </Button>
      </form>
      {message && <p className="mt-4">{message}</p>}
      <div className='flex items-center justify-between gap-2'>
        <span className='h-[1] flex-1 bg-black'></span>
        <span>OR</span>
        <span className='h-[1] flex-1 bg-black'></span>
      </div>
      <Button className='p-2 cursor-pointer text-white bg-black/70 w-full rounded mt-2' onClick={googleSignIn}>
        Continue with Google
      </Button>
      </Card>
      <span className='text-sm'>Already have an account? Sign In</span>
    </div>
  )
}
