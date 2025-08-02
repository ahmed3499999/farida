"use client"

import { Code, Database, Globe, Mail, Users, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
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
              <Image src="/images/farida-logo.png" alt="Farida Logo" width={32} height={32} className="rounded-full" />
              <span className="text-2xl font-bold">Farida</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
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
                src="/images/farida-about-team.png"
                alt="Farida Team - Collaborative Software Development"
                width={600}
                height={600}
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
                <div className="flex justify-center space-x-8">
                  <a
                    href="mailto:faridasoftware9@gmail.com"
                    className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                    title="Email us"
                  >
                    <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="https://linkedin.com/company/farida1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                    title="LinkedIn"
                  >
                    <Users className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61579042495962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                    title="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">Turning ideas into reality</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📧 faridasoftware9@gmail.com</p>
                    <p>📱 01092688458</p>
                  </div>
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
              <Image src="/images/farida-logo.png" alt="Farida Logo" width={32} height={32} className="rounded-full" />
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
