import { PortfolioHeader } from "@/components/portfolio-header"
import { ProjectShowcase } from "@/components/project-showcase"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PortfolioHeader />
      <ProjectShowcase />
    </main>
  )
}
