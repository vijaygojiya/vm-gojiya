import { Analytics, ThemeProvider } from '@/components'
import { cn } from '@/utils/utils'
import type { Metadata } from 'next'
import { Montserrat as AppFont } from 'next/font/google'
import './globals.css'

const font = AppFont({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Vijay Gojiya | Cross-Platform Mobile Developer',
  description:
    'Vijay Gojiya - Expert in React Native and cross-platform mobile app development. Explore my portfolio to see my skills, projects, and experience.',
  keywords:
    'Vijay Gojiya, Cross-Platform Mobile Developer, React Native Expert, Mobile App Development, JavaScript, TypeScript, Redux, Firebase, GraphQL, REST API, Git, GitLab, Figma, CI/CD, GitHub Actions, Fastlane'
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background antialiased', font.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
