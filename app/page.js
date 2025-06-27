import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, MessageSquare, Trophy, Users, Target, BookOpen } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Eidos</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">
              How It Works
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
            AI-Powered Socratic Learning
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Think, Discover, and <span className="text-emerald-600">Grow Independently</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Eidos moves beyond knowledge transfer to provide an interactive learning experience where students develop
            critical thinking through Socratic dialogue and personalized AI tutoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/dashboard">
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Learning Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience learning that adapts to your thinking style and challenges you to grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Socratic AI Tutors</CardTitle>
                <CardDescription>
                  AI tutors that guide you through questions rather than giving direct answers, fostering critical
                  thinking and deep understanding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Target className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Confidence Tracking</CardTitle>
                <CardDescription>
                  Monitor the gap between your confidence and actual understanding to identify areas for improvement and
                  build metacognitive awareness.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Trophy className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Gamified Quests</CardTitle>
                <CardDescription>
                  Embark on learning quests with milestones, earn wisdom points, and unlock badges as you progress
                  through structured learning paths.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>AI Debate Arena</CardTitle>
                <CardDescription>
                  Sharpen your argumentation skills by debating with AI opponents that challenge your reasoning and help
                  you identify logical fallacies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Brain className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Metacognitive Triggers</CardTitle>
                <CardDescription>
                  Receive prompts that encourage reflection on your thinking process, helping you become more aware of
                  how you learn and solve problems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Adaptive Learning Styles</CardTitle>
                <CardDescription>
                  Content adapts to your preferred learning style, whether visual, auditory, or kinesthetic, for optimal
                  comprehension and retention.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Eidos Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A step-by-step journey through personalized, Socratic learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Quest</h3>
              <p className="text-gray-600">
                Select from structured learning paths designed to build knowledge progressively through engaging
                scenarios and clear objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Engage with AI Tutors</h3>
              <p className="text-gray-600">
                Interact with Socratic AI tutors that ask probing questions, provide hints, and guide you to discover
                answers through your own reasoning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Reflect and Grow</h3>
              <p className="text-gray-600">
                Track your confidence, debate ideas, and receive personalized feedback to develop deeper understanding
                and critical thinking skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are developing critical thinking skills and deep understanding through
            Eidos's innovative AI tutoring platform.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            <Link href="/dashboard">
              Start Your Learning Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold">Eidos</span>
              </div>
              <p className="text-gray-400">Empowering independent thinking through AI-powered Socratic learning.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/quests" className="hover:text-white transition-colors">
                    Learning Quests
                  </Link>
                </li>
                <li>
                  <Link href="/arena" className="hover:text-white transition-colors">
                    Debate Arena
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-white transition-colors">
                    User Guides
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/ai-ethics" className="hover:text-white transition-colors">
                    AI Ethics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Eidos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
