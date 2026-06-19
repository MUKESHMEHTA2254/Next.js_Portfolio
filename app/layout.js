import "./globals.css"
export const metadata = {
  title: "Mukesh Mehta | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in Next.js, React, TypeScript, Node.js, .NET, Python, APIs, and database-driven systems.",
  keywords: [
    "Mukesh Mehta",
    "Full Stack Software Engineer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Node.js",
    ".NET",
    "Python",
    "Software Engineer Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
