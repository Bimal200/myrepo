import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  BookOpen,
  Target,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ISMTWebsite() {
  const courses = [
    {
      title: "BSc (Hons) Computer Systems Engineering (IT)",
      description:
        "Comprehensive program covering system design, network engineering, and IT infrastructure management.",
      duration: "4 Years",
      level: "Undergraduate",
    },
    {
      title: "BA (Hons) Business and Management (BBA)",
      description: "Strategic business education focusing on leadership, management principles, and entrepreneurship.",
      duration: "4 Years",
      level: "Undergraduate",
    },
    {
      title: "BSc (Hons) International Tourism and Hospitality Management (BHM)",
      description: "Global perspective on tourism industry with practical hospitality management skills.",
      duration: "4 Years",
      level: "Undergraduate",
    },
    {
      title: "BSc (Hons) Computer Science",
      description: "Cutting-edge computer science program with focus on software development and algorithms.",
      duration: "4 Years",
      level: "Undergraduate",
      isNew: true,
      status: "Subject to Approval",
    },
    {
      title: "BSc (Hons) Cyber Security and Digital Forensics",
      description: "Specialized program in cybersecurity, digital investigation, and information security.",
      duration: "4 Years",
      level: "Undergraduate",
    },
  ]

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "UK Qualifications in Nepal",
      description: "Earn prestigious UK degrees without leaving Nepal through our academic partnerships.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Industry-Relevant Education",
      description: "Curriculum designed to bridge the gap between academia and industry requirements.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "International Standards",
      description: "Education that meets international standards while embracing local values.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Holistic Development",
      description: "Focus on technical expertise alongside interpersonal and leadership skills.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">ISMT</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button>Apply Now</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  Established 2011
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  International School of Management and Technology
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Bridging the gap between academia and industry with internationally recognized qualifications in
                  partnership with University of Sunderland, UK, and Pearson Edexcel, UK.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="h-12">
                  Explore Courses
                </Button>
                <Button variant="outline" size="lg" className="h-12 bg-transparent">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>UK Partnerships</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Industry Relevant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Cost Effective</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="ISMT Campus"
                className="aspect-[3/2] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline">About ISMT</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Redefining Higher Education in Nepal</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ISMT is on a mission to contribute to Nepal's higher education by providing internationally recognized
                and industry-relevant qualifications with a bold vision of bridging academia and industry.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Students studying"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">Our Commitment to Excellence</h3>
              <p className="text-muted-foreground">
                ISMT's commitment to academic excellence is reflected in its inclusive and cost-effective educational
                approach, delivering international standards while adopting core local values.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Project-based learning and interactive discussions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Diverse extracurricular activities and sports clubs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Development of technical and leadership skills</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Supportive and inclusive learning environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline">Why Choose ISMT</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Gateway to Global Success</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="text-primary">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline">Academic Programs</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Courses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our range of internationally recognized degree programs designed to prepare you for global
                careers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      {course.isNew && (
                        <Badge variant="secondary" className="text-xs">
                          New Program
                        </Badge>
                      )}
                      {course.status && (
                        <Badge variant="outline" className="text-xs">
                          {course.status}
                        </Badge>
                      )}
                    </div>
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Duration: {course.duration}</span>
                    <span className="text-muted-foreground">{course.level}</span>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Journey?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join ISMT and gain a competitive edge in the global job market with UK qualifications earned in Nepal.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="h-12">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="h-12 bg-transparent">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-muted/50">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">ISMT</span>
              </div>
              <p className="text-sm text-muted-foreground">
                International School of Management and Technology - Bridging academia and industry since 2011.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-muted-foreground hover:text-primary">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Student Life
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Academic Partners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>University of Sunderland, UK</li>
                <li>Pearson Edexcel, UK</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kathmandu, Nepal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+977-1-XXXXXXX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@ismt.edu.np</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} International School of Management and Technology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
