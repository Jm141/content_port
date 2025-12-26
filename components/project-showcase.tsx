'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";
import { ClientLogos } from "@/components/client-logos";
import { ImageLightbox } from "@/components/image-lightbox";

// Add animation styles
const styles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 30s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
`;

interface ProjectShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ProjectShowcase({ className, ...props }: ProjectShowcaseProps) {
  return (
    <section className={`container mx-auto px-6 py-16 max-w-6xl ${className || ''}`} {...props}>
      <style jsx global>{styles}</style>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {"Recent work showcasing modern web development practices and technical expertise"}
        </p>
      </div>

      <div className="space-y-16">
        {/* Servio Technologies Project */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <ImageLightbox src="/modern-tech-website-with-blue-teal-gradient-sleek-.png" alt="Servio Technologies Website">
              <div className="relative aspect-video md:aspect-auto bg-secondary/50">
                <img
                  src="/modern-tech-website-with-blue-teal-gradient-sleek-.png"
                  alt="Servio Technologies Website"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </ImageLightbox>

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
                    {"Complete redesign and development of the corporate website for Servio Technologies, a leading technology services provider."}
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
                      <Badge variant="secondary">SMTP</Badge>
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
                  <span className="font-semibold text-foreground">Project Duration:</span> 2025 — Present
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  <span className="font-semibold text-foreground">Role:</span> Lead Developer & Designer
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Client Logos Carousel */}
        <ClientLogos />

        {/* TES Application Portal */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <ImageLightbox src="/tes-portal-screenshot.png" alt="TES Application Portal">
              <div className="relative aspect-video md:aspect-auto bg-secondary/50">
                <img
                  src="/tes-portal-screenshot.png"
                  alt="TES Application Portal"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </ImageLightbox>

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
                    {"Developed a comprehensive application portal system for TES, streamlining the application process with secure data management and user authentication."}
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
                      <Badge variant="secondary">Python</Badge>
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

        {/* Tri-Axis System */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <ImageLightbox src="/tri-axis-showcase.png" alt="Tri-Axis System Website">
              <div className="relative aspect-video md:aspect-auto bg-secondary/50">
                <img
                  src="/tri-axis-showcase.png"
                  alt="Tri-Axis System Website"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </ImageLightbox>

            <div className="flex flex-col justify-between p-8">
              <div>
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-2xl">Tri-Axis System</CardTitle>
                    <div className="text-2xl">🌱</div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {"A modern web application for managing and visualizing 3D printing projects with real-time monitoring and control."}
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
                          {"3D model viewer with interactive controls"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Real-time print job monitoring and control"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"User authentication and project management"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Responsive design for desktop and mobile"}
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
                      <Badge variant="secondary">FLutter</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">RestAPI</Badge>
                      <Badge variant="secondary">JWT</Badge>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="w-full md:w-auto" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Project Status:</span> In Development
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  <span className="font-semibold text-foreground">Role:</span> Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* ARUGA Brand */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <ImageLightbox src="/aruga.png" alt="ARUGA Brand">
              <div className="relative aspect-video md:aspect-auto bg-secondary/50">
                <img
                  src="/aruga.png"
                  alt="ARUGA Brand"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </ImageLightbox>

            <div className="flex flex-col justify-between p-8">
              <div>
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-2xl">ARUGA</CardTitle>
                    <div className="text-2xl">🌱</div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {"Born from the Digital Countryside. ARUGA grew from a single Servio wing—reshaped into a leaf—to remind us that progress must be nurtured, not forced. Because when technology learns to care, communities grow."}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Our Products
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          <span className="font-medium">ARUGA for Accounting</span> - Complete financial management solution
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          <span className="font-medium">ARUGA Payroll</span> - Comprehensive payroll processing system
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </div>

              {/* <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Project Status:</span> In Development
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  <span className="font-semibold text-foreground">Role:</span> Full Stack Developer
                </p>
              </div> */}
            </div>
          </div>
        </Card>

        {/* ARUGA for Accounting */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <ImageLightbox src="/accounting.png" alt="ARUGA for Accounting Dashboard">
              <div className="relative aspect-video md:aspect-auto bg-secondary/50">
                <img
                  src="/accounting.png"
                  alt="ARUGA for Accounting Dashboard"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </ImageLightbox>

            <div className="flex flex-col justify-between p-8">
              <div>
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-2xl">ARUGA for Accounting</CardTitle>
                    <div className="text-2xl">🌱</div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {"A smarter way to manage your finances with comprehensive accounting solutions."}
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
                          {"Automated financial reporting and analytics"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Invoice and expense tracking"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Multi-currency support"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Tax calculation and compliance"}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">REST API</Badge>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="w-full md:w-auto" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Project Status:</span> In Development
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  <span className="font-semibold text-foreground">Role:</span> Website Designer
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* ARUGA Payroll */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <ImageLightbox src="/payroll.png" alt="ARUGA Payroll Dashboard">
              <div className="relative aspect-video md:aspect-auto bg-secondary/50">
                <img
                  src="/payroll.png"
                  alt="ARUGA Payroll Dashboard"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </ImageLightbox>

            <div className="flex flex-col justify-between p-8">
              <div>
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-2xl">ARUGA Payroll</CardTitle>
                    <div className="text-2xl">🌱</div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {"Payroll made accurate, secure, and stress-free for businesses of all sizes."}
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
                          {"Automated payroll processing"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Employee self-service portal"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Tax and deduction management"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {"Compliance with local labor laws"}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Vue.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">NestJS</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="w-full md:w-auto" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Project Status:</span> In Development
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  <span className="font-semibold text-foreground">Role:</span> Website Designer
                </p>
              </div>
            </div>
          </div>
        </Card>

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
      </div>
    </section>
  );
}