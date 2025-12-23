import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioHeader() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance"> Julio Martinez | Web Developer</h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              {
                "I build accessible, pixel-perfect digital experiences for the web with a focus on modern technologies and best practices."
              }
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Jm141/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/julio-martinez-7213a5356/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="martinzjulio@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
