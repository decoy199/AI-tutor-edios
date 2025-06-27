"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  TrendingUp,
  TrendingDown,
  Play,
  Trophy,
  Target,
  Brain,
  Clock,
  Star,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Zap,
} from "lucide-react"
import Link from "next/link"

export function DashboardContent() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
            <p className="text-gray-600">Ready to continue your learning journey?</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
            <Zap className="h-3 w-3 mr-1" />
            5-day streak
          </Badge>
        </div>
      </div>

      {/* Current Quest Progress */}
      <Card className="border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-emerald-800">Current Quest: Advanced Calculus</CardTitle>
              <CardDescription>Mastering derivatives and integrals</CardDescription>
            </div>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/session/calculus/derivatives">
                <Play className="h-4 w-4 mr-2" />
                Continue
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Quest Progress</span>
                <span>7/10 milestones</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-emerald-600" />
                <span>Next: Chain Rule</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span>Est. 45 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-amber-500" />
                <span>+150 points</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-purple-500" />
                <span>Confidence: 3.2/5</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Challenges & Confidence Tracking */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-600" />
              <span>Today's Challenges</span>
            </CardTitle>
            <CardDescription>AI-recommended activities based on your progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Review: Trigonometric Identities</h4>
                <Badge variant="outline">15 min</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Your confidence was high but accuracy was low. Let's reinforce this concept.
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Start Review
              </Button>
            </div>

            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Quick Quiz: Linear Algebra</h4>
                <Badge variant="outline">10 min</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">Test your understanding with 5 quick questions.</p>
              <Button size="sm" variant="outline" className="w-full">
                Take Quiz
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-emerald-600" />
              <span>Confidence Tracking</span>
            </CardTitle>
            <CardDescription>Your self-assessment vs. actual performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <p className="font-medium text-red-800">Overconfident Areas</p>
                  <p className="text-sm text-red-600">Statistics, Probability</p>
                </div>
                <TrendingDown className="h-5 w-5 text-red-500" />
              </div>

              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                <div>
                  <p className="font-medium text-amber-800">Underconfident Areas</p>
                  <p className="text-sm text-amber-600">Geometry, Proofs</p>
                </div>
                <TrendingUp className="h-5 w-5 text-amber-500" />
              </div>

              <Button variant="outline" className="w-full">
                View Detailed Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Achievements */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-teal-600" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Completed: Derivative Rules Session</p>
                <p className="text-xs text-gray-600">2 hours ago</p>
                <p className="text-xs text-emerald-600 mt-1">
                  "Great logical reasoning in your step-by-step solution!"
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Debate: Climate Change Solutions</p>
                <p className="text-xs text-gray-600">Yesterday</p>
                <p className="text-xs text-purple-600 mt-1">
                  "Strong evidence presentation, work on addressing counterarguments."
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Metacognitive Reflection</p>
                <p className="text-xs text-gray-600">2 days ago</p>
                <p className="text-xs text-amber-600 mt-1">
                  "Excellent self-awareness of your problem-solving approach."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-amber-600" />
              <span>Achievements & Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                <Trophy className="h-6 w-6 text-amber-600 mx-auto mb-1" />
                <p className="text-xs font-medium">Critical Thinker</p>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <Target className="h-6 w-6 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-medium">Quest Master</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                <Brain className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                <p className="text-xs font-medium">Deep Learner</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg border border-teal-200">
              <h4 className="font-medium text-teal-800 mb-2">Learning Style Insight</h4>
              <p className="text-sm text-teal-700">
                You prefer visual learning with step-by-step breakdowns. Consider using more diagrams in your
                problem-solving approach.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Total Wisdom Points</p>
                <p className="text-2xl font-bold text-emerald-600">1,247</p>
              </div>
              <Button variant="outline" size="sm">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Jump into your learning activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2" asChild>
              <Link href="/session">
                <MessageSquare className="h-6 w-6" />
                <span>Start Tutoring</span>
              </Link>
            </Button>

            <Button variant="outline" className="h-20 flex-col space-y-2" asChild>
              <Link href="/arena">
                <Target className="h-6 w-6" />
                <span>Join Debate</span>
              </Link>
            </Button>

            <Button variant="outline" className="h-20 flex-col space-y-2" asChild>
              <Link href="/quests">
                <BookOpen className="h-6 w-6" />
                <span>Browse Quests</span>
              </Link>
            </Button>

            <Button variant="outline" className="h-20 flex-col space-y-2" asChild>
              <Link href="/profile">
                <Brain className="h-6 w-6" />
                <span>View Progress</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
