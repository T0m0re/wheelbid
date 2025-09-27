'use client'
import { useState } from 'react'
import { signInUser } from '@/lib/auth'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ChevronLeft, Eye, EyeClosed } from 'lucide-react'

export default function SigninPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [passwordView, setPasswordView] = useState(false)
  const [next, setNext] = useState(false)


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

    const togglePasswordView = (e: React.FormEvent)=>{
        e.preventDefault()
        setPasswordView(!passwordView)
    }
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign in to WheelBid</h1>
      <Card className='py-10 px-25 bg-white'>
        {!next ? (
            <div>
                <form className="flex flex-col gap-6 w-80">
                    <div className="grid gap-3">
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

                    <Button className="bg-black/70 text-white p-2 rounded" onClick={() => setNext(!next)}>
                        Continue
                    </Button>
                </form>
                <div className='flex items-center justify-between gap-2 my-3'>
                    <span className='h-[1] flex-1 bg-black'></span>
                    <span className='text-sm'>Or</span>
                    <span className='h-[1] flex-1 bg-black'></span>
                </div>
                <Button className='p-2 cursor-pointer text-white bg-black/70 w-full rounded'>
                    Continue with Google
                </Button>
            </div>
        ): (
            <form onSubmit={handleSignin} className="flex flex-col gap-6 w-80">
                <div className="grid gap-1">
                    <Label>Email:</Label>
                    <p className='text-gray-700 font-medium text-lg'>{email}</p>
                </div>
                <div className="grid gap-3 w-full">
                    <Label htmlFor="password">Password</Label>
                    <div className='relative w-full'>
                        <Input id="password"
                        placeholder="Password"
                        value={password}
                        type={!passwordView ? 'password' : 'text'}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded w-full"
                        required/>
                        <button className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer' onClick={togglePasswordView}>
                            {!passwordView ? <EyeClosed/>: <Eye/>}
                        </button>
                    </div>
                </div>
            {message && <p className="mt-4">{message}</p>}
            <Button type='submit' className="bg-black/70 text-white p-2 rounded">Log In</Button>
        </form>
        )}
        
        {message && <p className="mt-4">{message}</p>}
    </Card>
    {next && (
        <Button variant="link" className='inline-flex items-center justify-between gap-2' onClick={()=>setNext(!next)}>
            <ChevronLeft/>
            Go back
        </Button>
    )}
    </div>
)
}
