"use client"

import { ArrowRight, Code, Database, Globe, Mail, Phone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Hospital meal management",
      shortDescription:
        "A comprehensive management solution with advanced inventory management, invoice registration, and analytics dashboard.",
      fullDescription:
        "This enterprise-level management platform was built for a client looking to modernize their ways to handle managing meals for hospital patients. The solution includes a sophisticated inventory management system that tracks stock levels across multiple warehouses, meal timetables, and supplier integration. The analytics dashboard provides real-time insights into the stock and exported items from inventory. Additional features include advanced invoice filtering and summary, and a comprehensive admin panel for high level management.",
      images: [
        "/placeholder.svg?height=400&width=600&text=E-commerce+Homepage",
        "/placeholder.svg?height=400&width=600&text=Product+Catalog",
        "/placeholder.svg?height=400&width=600&text=Shopping+Cart",
        "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
      category: "Web Application",
      status: "Completed",
      duration: "8 months",
      teamSize: "6 developers",
    },
  ]

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation and testing.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Desktop Applications",
      description: "Cross-platform desktop software solutions for Windows, macOS, and Linux.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold">Farida</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Software Solutions
            <br />
            That Drive Success
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We create innovative software solutions that transform businesses and deliver exceptional user experiences.
            From web applications to enterprise systems, we build technology that matters.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deep into our most impactful software solutions. Each project represents months of dedicated
              development and innovative problem-solving.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Project Images */}
                <div className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative overflow-hidden rounded-lg ${imgIndex === 0 ? "col-span-2" : ""}`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} Screenshot ${imgIndex + 1}`}
                          width={600}
                          height={400}
                          className={`w-full object-cover hover:scale-105 transition-transform duration-300 ${imgIndex === 0 ? "h-64" : "h-32"}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="text-sm">
                      {project.category}
                    </Badge>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>

                  <h3 className="text-3xl font-bold">{project.title}</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">{project.shortDescription}</p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Description */}
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      <div className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span className="font-semibold">Read Full Project Details</span>
                        <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                      </div>
                    </summary>
                    <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                    </div>
                  </details>

                  <Button size="lg" className="mt-6">
                    View Project Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive software development services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Farida</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to bridge the gap between technology and business success, Farida has been
                delivering cutting-edge software solutions for many clients. Our team of experienced developers,
                designers, and consultants work collaboratively to create solutions that not only meet current needs but
                also scale for future growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We specialize in modern web technologies, cloud solutions, and enterprise software development. Our
                commitment to quality, innovation, and client satisfaction has made us a trusted partner for businesses
                ranging from individual clients to startups.
              </p>
              <div></div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Farida Team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? We'd love to hear from you and discuss how we can help bring your ideas
              to life.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-lg">faridasoftware9@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-lg">01092688458</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <a
                      href="https://faridacompany.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      faridacompany.netlify.app
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <a
                      href="https://linkedin.com/company/farida1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="text-lg px-8">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold">Farida</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 Farida. All rights reserved. Building the future, one solution at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
