"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import {
  Search,
  Clock,
  Trophy,
  Star,
  Play,
  Lock,
  CheckCircle,
  BookOpen,
  Calculator,
  Atom,
  Globe,
  Palette,
  Code,
} from "lucide-react"
import Link from "next/link"

const questCategories = [
  { name: "All", count: 24 },
  { name: "Mathematics", count: 8 },
  { name: "Science", count: 6 },
  { name: "History", count: 4 },
  { name: "Literature", count: 3 },
  { name: "Programming", count: 3 },
]

const quests = [
  {
    id: "calculus-mastery",
    title: "Advanced Calculus Mastery",
    description:
      "Master derivatives, integrals, and their real-world applications through interactive problem-solving.",
    category: "Mathematics",
    difficulty: "Advanced",
    duration: "6-8 hours",
    milestones: 10,
    completed: 7,
    points: 500,
    status: "in-progress",
    icon: Calculator,
    color: "emerald",
  },
  {
    id: "quantum-physics",
    title: "Introduction to Quantum Physics",
    description: "Explore the fascinating world of quantum mechanics and its fundamental principles.",
    category: "Science",
    difficulty: "Intermediate",
    duration: "4-5 hours",
    milestones: 8,
    completed: 0,
    points: 400,
    status: "available",
    icon: Atom,
    color: "purple",
  },
  {
    id: "world-war-analysis",
    title: "World War II: Causes and Consequences",
    description: "Analyze the complex factors that led to WWII and its lasting impact on global politics.",
    category: "History",
    difficulty: "Intermediate",
    duration: "5-6 hours",
    milestones: 12,
    completed: 12,
    points: 450,
    status: "completed",
    icon: Globe,
    color: "amber",
  },
  {
    id: "shakespeare-analysis",
    title: "Shakespeare's Literary Techniques",
    description: "Dive deep into the Bard's use of language, symbolism, and dramatic structure.",
    category: "Literature",
    difficulty: "Advanced",
    duration: "4-5 hours",
    milestones: 9,
    completed: 0,
    points: 380,
    status: "locked",
    icon: BookOpen,
    color: "rose",
  },
  {
    id: "data-structures",
    title: "Data Structures & Algorithms",
    description: "Build a solid foundation in computer science fundamentals through hands-on coding.",
    category: "Programming",
    difficulty: "Intermediate",
    duration: "8-10 hours",
    milestones: 15,
    completed: 3,
    points: 600,
    status: "in-progress",
    icon: Code,
    color: "teal",
  },
  {
    id: "renaissance-art",
    title: "Renaissance Art & Culture",
    description: "Explore the artistic revolution that transformed European culture and society.",
    category: "Art",
    difficulty: "Beginner",
    duration: "3-4 hours",
    milestones: 6,
    completed: 0,
    points: 300,
    status: "available",
    icon: Palette,
    color: "orange",
  },
]

export function QuestsContent() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Learning Quests</h1>
            <p className="text-gray-600">Embark on structured learning adventures</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search quests..." className="pl-10" />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {questCategories.map((category) => (
            <Button
              key={category.name}
              variant={category.name === "All" ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Quest Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quests.map((quest) => {
          const IconComponent = quest.icon
          const progressPercentage = (quest.completed / quest.milestones) * 100

          return (
            <Card
              key={quest.id}
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                quest.status === "locked" ? "opacity-60" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-lg bg-${quest.color}-100`}>
                    <IconComponent className={`h-6 w-6 text-${quest.color}-600`} />
                  </div>
                  <div className="flex items-center space-x-2">
                    {quest.status === "completed" && <CheckCircle className="h-5 w-5 text-emerald-500" />}
                    {quest.status === "locked" && <Lock className="h-5 w-5 text-gray-400" />}
                    <Badge variant="outline" className="text-xs">
                      {quest.difficulty}
                    </Badge>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-lg leading-tight">{quest.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{quest.description}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {quest.status === "in-progress" && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>
                        {quest.completed}/{quest.milestones} milestones
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{quest.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-amber-500" />
                    <span>{quest.points} points</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-purple-500" />
                    <span>{quest.milestones} milestones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-teal-500" />
                    <span>{quest.category}</span>
                  </div>
                </div>

                <div className="pt-2">
                  {quest.status === "locked" ? (
                    <Button disabled className="w-full">
                      <Lock className="h-4 w-4 mr-2" />
                      Locked
                    </Button>
                  ) : quest.status === "completed" ? (
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/quests/${quest.id}`}>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Review Quest
                      </Link>
                    </Button>
                  ) : quest.status === "in-progress" ? (
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                      <Link href={`/session/${quest.id}`}>
                        <Play className="h-4 w-4 mr-2" />
                        Continue Quest
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/quests/${quest.id}`}>
                        <Play className="h-4 w-4 mr-2" />
                        Start Quest
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>

              {quest.status === "in-progress" && (
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-${quest.color}-500 transform rotate-45 translate-x-8 -translate-y-8`}
                >
                  <div className="absolute bottom-2 left-2 text-white text-xs font-bold transform -rotate-45">
                    Active
                  </div>
                </div>
              )}
            </Card>
          )
        })}
      </div>

      {/* Quest Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Your Quest Statistics</CardTitle>
          <CardDescription>Track your learning journey progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">8</div>
              <div className="text-sm text-gray-600">Quests Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">3,247</div>
              <div className="text-sm text-gray-600">Total Points Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">42h</div>
              <div className="text-sm text-gray-600">Time Invested</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
