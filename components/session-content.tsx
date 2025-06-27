"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Slider } from "@/components/ui/slider"
import {
  MessageSquare,
  Send,
  Brain,
  Lightbulb,
  Target,
  Eye,
  Volume2,
  ImageIcon,
  FileText,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

export function SessionContent() {
  const [confidence, setConfidence] = useState([3])
  const [currentInput, setCurrentInput] = useState("")
  const [showConfidenceModal, setShowConfidenceModal] = useState(false)

  const messages = [
    {
      type: "ai",
      content:
        "Welcome to your Calculus tutoring session! Today we're exploring the chain rule. Let's start with a question: Can you think of a real-world situation where you might need to find the rate of change of a composite function?",
      timestamp: "2 minutes ago",
    },
    {
      type: "student",
      content:
        "Maybe when calculating how the temperature changes in a room when both the outside temperature and the heating system are changing?",
      timestamp: "1 minute ago",
    },
    {
      type: "ai",
      content:
        "Excellent thinking! That's a perfect example of a composite function scenario. Now, let's say the room temperature R depends on the heating setting H, and the heating setting depends on the outside temperature O. If we write this as R(H(O)), what do you think the chain rule would help us find?",
      timestamp: "30 seconds ago",
    },
  ]

  return (
    <div className="flex h-screen">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Calculus Tutoring Session</h1>
                <p className="text-sm text-gray-600">Chain Rule Exploration • Milestone 8/10</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                <Brain className="h-3 w-3 mr-1" />
                Socratic Mode
              </Badge>
              <Badge variant="outline">Session Time: 12:34</Badge>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === "student" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-3xl rounded-lg p-4 ${
                  message.type === "student" ? "bg-emerald-600 text-white" : "bg-white border shadow-sm"
                }`}
              >
                <div className="flex items-start space-x-3">
                  {message.type === "ai" && (
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 text-purple-600" />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className={`${message.type === "student" ? "text-white" : "text-gray-900"}`}>
                      {message.content}
                    </p>
                    <p className={`text-xs mt-2 ${message.type === "student" ? "text-emerald-100" : "text-gray-500"}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* AI Thinking Indicator */}
          <div className="flex justify-start">
            <div className="bg-white border shadow-sm rounded-lg p-4 max-w-xs">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Brain className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t bg-white p-4">
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Textarea
                placeholder="Share your thoughts, ask questions, or work through the problem step by step..."
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="flex-1 min-h-[80px] resize-none"
              />
              <div className="flex flex-col space-y-2">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  <Send className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <span>Show your work step-by-step for better feedback</span>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowConfidenceModal(true)}
                className="text-purple-600 border-purple-200 hover:bg-purple-50"
              >
                <Target className="h-4 w-4 mr-1" />
                Rate Confidence
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Learning Tools */}
      <div className="w-80 border-l bg-white p-4 space-y-4">
        <h3 className="font-semibold text-gray-900">Learning Tools</h3>

        {/* Perspective Sources */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center space-x-2">
              <Eye className="h-4 w-4 text-teal-600" />
              <span>Different Perspectives</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button size="sm" variant="outline" className="w-full justify-start">
              <Lightbulb className="h-4 w-4 mr-2" />
              Visual Analogy
            </Button>
            <Button size="sm" variant="outline" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Historical Context
            </Button>
            <Button size="sm" variant="outline" className="w-full justify-start">
              <MessageSquare className="h-4 w-4 mr-2" />
              Peer Discussion
            </Button>
          </CardContent>
        </Card>

        {/* Learning Style Adaptation */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Content Format</CardTitle>
            <CardDescription className="text-xs">Adapted for your visual learning style</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button size="sm" variant="outline" className="w-full justify-start">
              <ImageIcon className="h-4 w-4 mr-2" />
              Show Diagram
            </Button>
            <Button size="sm" variant="outline" className="w-full justify-start">
              <Volume2 className="h-4 w-4 mr-2" />
              Audio Explanation
            </Button>
          </CardContent>
        </Card>

        {/* Metacognitive Triggers */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center space-x-2">
              <Brain className="h-4 w-4 text-purple-600" />
              <span>Reflection Prompts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <p className="font-medium text-purple-800">Think About:</p>
                <p className="text-purple-700 mt-1">How did you arrive at that insight about composite functions?</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-medium text-amber-800">Consider:</p>
                <p className="text-amber-700 mt-1">What other real-world examples can you think of?</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Use Detection */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <span>Learning Integrity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-orange-700 mb-2">
              Remember: The goal is to develop your own thinking. Try working through problems independently first.
            </p>
            <Button size="sm" variant="outline" className="w-full text-orange-600 border-orange-300">
              View Guidelines
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Confidence Rating Modal */}
      {showConfidenceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-96">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-purple-600" />
                <span>Rate Your Confidence</span>
              </CardTitle>
              <CardDescription>How confident are you in your understanding of this concept?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Not Confident</span>
                  <span>Very Confident</span>
                </div>
                <Slider value={confidence} onValueChange={setConfidence} max={5} min={1} step={1} className="w-full" />
                <div className="text-center mt-2">
                  <span className="text-lg font-semibold text-purple-600">{confidence[0]}/5</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1" onClick={() => setShowConfidenceModal(false)}>
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setShowConfidenceModal(false)}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
