// app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  // keep this minimal — no html or body tags here
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  )
}
