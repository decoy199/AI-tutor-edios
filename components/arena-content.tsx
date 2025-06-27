"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Progress } from "@/components/ui/progress"
import { Swords, Send, Clock, Target, AlertTriangle, CheckCircle, Brain, MessageSquare, Eye, Zap } from "lucide-react"

const debateTopics = [
  {
    id: "climate-action",
    title: "Climate Change: Individual vs. Corporate Responsibility",
    description: "Should climate action focus primarily on individual behavior changes or corporate regulation?",
    difficulty: "Intermediate",
    duration: "20-30 min",
    participants: 127,
    category: "Environmental",
  },
  {
    id: "ai-education",
    title: "AI in Education: Enhancement or Replacement?",
    description: "Will AI tutors enhance human learning or replace traditional teaching methods?",
    difficulty: "Advanced",
    duration: "25-35 min",
    participants: 89,
    category: "Technology",
  },
  {
    id: "social-media",
    title: "Social Media: Connection or Isolation?",
    description: "Does social media bring people together or create more social isolation?",
    difficulty: "Beginner",
    duration: "15-25 min",
    participants: 203,
    category: "Society",
  },
]

export function ArenaContent() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [debatePhase, setDebatePhase] = useState("selection") // selection, preparation, debate, results
  const [currentArgument, setCurrentArgument] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(300) // 5 minutes

  const debateMessages = [
    {
      type: "ai",
      stance: "Corporate Responsibility",
      content:
        "I argue that corporate responsibility is paramount in addressing climate change. Individual actions, while important, pale in comparison to the environmental impact of major corporations. For instance, just 100 companies are responsible for 71% of global emissions. How can individual recycling compete with that scale?",
      timestamp: "2 minutes ago",
      strength: "Strong evidence",
    },
    {
      type: "student",
      stance: "Individual Responsibility",
      content:
        "While corporate impact is significant, individual actions create the demand that drives corporate behavior. When millions of consumers choose sustainable products, companies respond. The rise of electric vehicles happened because individuals demanded cleaner transportation options.",
      timestamp: "1 minute ago",
      strength: "Good reasoning",
    },
    {
      type: "ai",
      stance: "Corporate Responsibility",
      content:
        "That's a fair point about consumer demand, but it assumes individuals have equal access to sustainable choices. Many sustainable options are more expensive, making them inaccessible to lower-income populations. Shouldn't corporations be regulated to ensure sustainable options are affordable and accessible to all?",
      timestamp: "30 seconds ago",
      strength: "Effective counter",
    },
  ]

  if (debatePhase === "selection") {
    return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Debate Arena</h1>
              <p className="text-gray-600">Sharpen your argumentation skills against AI opponents</p>
            </div>
          </div>
          <Badge className="bg-red-100 text-red-800">
            <Swords className="h-3 w-3 mr-1" />
            Battle Ready
          </Badge>
        </div>

        {/* Available Debates */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {debateTopics.map((topic) => (
            <Card key={topic.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className="mb-2">
                    {topic.category}
                  </Badge>
                  <Badge
                    variant={
                      topic.difficulty === "Beginner"
                        ? "secondary"
                        : topic.difficulty === "Intermediate"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {topic.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{topic.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-purple-500" />
                    <span>{topic.participants} debates</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => {
                    setSelectedTopic(topic)
                    setDebatePhase("preparation")
                  }}
                >
                  <Swords className="h-4 w-4 mr-2" />
                  Enter Arena
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Arena Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Your Arena Statistics</CardTitle>
            <CardDescription>Track your debate performance and growth</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">12</div>
                <div className="text-sm text-gray-600">Debates Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">8</div>
                <div className="text-sm text-gray-600">Debates Lost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.2/5</div>
                <div className="text-sm text-gray-600">Avg. Logic Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">3.8/5</div>
                <div className="text-sm text-gray-600">Evidence Quality</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (debatePhase === "preparation") {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Debate Preparation</h1>
              <p className="text-gray-600">{selectedTopic?.title}</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => setDebatePhase("selection")}>
            Back to Arena
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Stance</CardTitle>
              <CardDescription>Select the position you want to argue for</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full h-20 flex-col space-y-2">
                <Target className="h-6 w-6 text-emerald-600" />
                <span>Individual Responsibility</span>
                <span className="text-xs text-gray-500">Argue for personal action</span>
              </Button>
              <Button variant="outline" className="w-full h-20 flex-col space-y-2">
                <Swords className="h-6 w-6 text-red-600" />
                <span>Corporate Responsibility</span>
                <span className="text-xs text-gray-500">Argue for systemic change</span>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Debate Rules</CardTitle>
              <CardDescription>Understanding the format and scoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Opening Statement (3 min)</p>
                    <p className="text-gray-600">Present your main argument</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Rebuttals (5 min each)</p>
                    <p className="text-gray-600">Counter opponent's arguments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Closing Statement (2 min)</p>
                    <p className="text-gray-600">Summarize your position</p>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => setDebatePhase("debate")}>
                Start Debate
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (debatePhase === "debate") {
    return (
      <div className="flex h-screen">
        {/* Main Debate Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="border-b bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Live Debate</h1>
                  <p className="text-sm text-gray-600">{selectedTopic?.title}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="bg-red-50 text-red-700">
                  <Clock className="h-3 w-3 mr-1" />
                  {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, "0")}
                </Badge>
                <Badge className="bg-purple-100 text-purple-800">Rebuttal Phase</Badge>
              </div>
            </div>
            <div className="mt-3">
              <Progress value={40} className="h-2" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Opening</span>
                <span>Rebuttals</span>
                <span>Closing</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {debateMessages.map((message, index) => (
              <div key={index} className="space-y-2">
                <div className={`flex ${message.type === "student" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-3xl rounded-lg p-4 ${
                      message.type === "student" ? "bg-emerald-600 text-white" : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {message.type === "ai" && (
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <Swords className="h-4 w-4 text-red-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              message.type === "student"
                                ? "bg-emerald-700 text-emerald-100 border-emerald-500"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {message.stance}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              message.strength === "Strong evidence"
                                ? "bg-green-100 text-green-800"
                                : message.strength === "Good reasoning"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {message.strength}
                          </Badge>
                        </div>
                        <p className={`${message.type === "student" ? "text-white" : "text-gray-900"}`}>
                          {message.content}
                        </p>
                        <p
                          className={`text-xs mt-2 ${
                            message.type === "student" ? "text-emerald-100" : "text-gray-500"
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t bg-white p-4">
            <div className="space-y-4">
              <Textarea
                placeholder="Present your rebuttal with evidence and logical reasoning..."
                value={currentArgument}
                onChange={(e) => setCurrentArgument(e.target.value)}
                className="min-h-[100px] resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Focus on logic and evidence</span>
                  <Badge variant="outline" className="text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    AI analyzing for fallacies
                  </Badge>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Argument
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Debate Tools */}
        <div className="w-80 border-l bg-white p-4 space-y-4">
          <h3 className="font-semibold text-gray-900">Debate Tools</h3>

          {/* Real-time Feedback */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center space-x-2">
                <Brain className="h-4 w-4 text-purple-600" />
                <span>Real-time Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Logic Strength</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="w-3/4 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="text-emerald-600 font-medium">4/5</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Evidence Quality</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="w-2/3 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="text-amber-600 font-medium">3/5</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Clarity</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="w-4/5 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-purple-600 font-medium">4/5</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logical Fallacy Detector */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <span>Fallacy Detection</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>No fallacies detected</span>
                </div>
                <p className="text-gray-600 text-xs">
                  Your arguments are logically sound. Keep up the strong reasoning!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Argument Suggestions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center space-x-2">
                <Zap className="h-4 w-4 text-teal-600" />
                <span>Strengthen Your Argument</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button size="sm" variant="outline" className="w-full justify-start text-xs">
                Add statistical evidence
              </Button>
              <Button size="sm" variant="outline" className="w-full justify-start text-xs">
                Address counterargument
              </Button>
              <Button size="sm" variant="outline" className="w-full justify-start text-xs">
                Provide specific example
              </Button>
            </CardContent>
          </Card>

          {/* Opponent Analysis */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Opponent Weaknesses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-red-50 rounded border border-red-200">
                  <p className="font-medium text-red-800">Weak Evidence</p>
                  <p className="text-red-600">Claims lack statistical support</p>
                </div>
                <div className="p-2 bg-amber-50 rounded border border-amber-200">
                  <p className="font-medium text-amber-800">Assumption</p>
                  <p className="text-amber-600">Assumes equal access to choices</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return null
}
