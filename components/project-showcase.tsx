import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code2 } from "lucide-react"

export function ProjectShowcase() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {"Recent work showcasing modern web development practices and technical expertise"}
        </p>
      </div>

      <div className="space-y-12">
        {/* Servio Technologies Project */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto bg-secondary/50">
              <img
                src="/modern-tech-website-with-blue-teal-gradient-sleek-.jpg"
                alt="Servio Technologies Website"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-8">
              <div>
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-2xl">Servio Technologies</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="https://servio.ph" target="_blank" rel="noopener noreferrer" aria-label="Visit website">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {
                      "Complete redesign and development of the corporate website for Servio Technologies, a leading technology services provider."
                    }
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Custom image assets designed and integrated throughout the site"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"SMTP integration for contact form with email notifications"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Embedded splash screen with smooth loading animations"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Fully responsive design optimized for all devices"}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">SMTP</Badge>
                      <Badge variant="secondary">Responsive Design</Badge>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full md:w-auto">
                      <a href="https://servio.ph" target="_blank" rel="noopener noreferrer">
                        View Live Site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Project Duration:</span> 2024 — Present
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  <span className="font-semibold text-foreground">Role:</span> Lead Developer & Designer
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto bg-secondary/50">
              <img
                src="/tes-portal-screenshot.jpg"
                alt="TES Application Portal"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-8">
              <div>
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-2xl">TES Application Portal</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://tes.bccbsis.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit portal"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {
                      "Developed a comprehensive application portal system for TES, streamlining the application process with secure data management and user authentication."
                    }
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Multi-step application form with validation and data persistence"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Secure user authentication and authorization system"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Admin dashboard for application review and management"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Document upload and file management capabilities"}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Bootstrap</Badge>
                      <Badge variant="secondary">Authentication</Badge>
                      <Badge variant="secondary">File Management</Badge>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full md:w-auto">
                      <a href="https://tes.bccsis.com" target="_blank" rel="noopener noreferrer">
                        View Portal
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Project Duration:</span> Past Project
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  <span className="font-semibold text-foreground">Role:</span> Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Design & UX</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Creating intuitive user experiences with modern design principles and custom visual assets."}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Full-Stack Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Building robust applications with modern frameworks and secure backend systems."}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">System Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Implementing third-party services and custom integrations for enhanced functionality."}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
