import { Analytics, BottomTabBar, ThemeProvider } from '@/components'
import { cn } from '@/utils/utils'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const fontSans = Montserrat({ subsets: ['latin'], variable: '--font-sans' })

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
      <body className={cn('bg-background', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          {children}
          <BottomTabBar />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
