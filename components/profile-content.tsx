"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Textarea } from "@/components/ui/textarea"
import {
  User,
  Trophy,
  Target,
  Brain,
  Bell,
  Shield,
  Eye,
  Volume2,
  Settings,
  Award,
  TrendingUp,
  BookOpen,
} from "lucide-react"

export function ProfileContent() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Profile & Settings</h1>
            <p className="text-gray-600">Manage your learning preferences and account</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                A
              </div>
              <CardTitle>Alex Student</CardTitle>
              <CardDescription>Level 3 Learner • Member since March 2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">1,247</div>
                  <div className="text-sm text-gray-600">Wisdom Points</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-gray-600">Quests Completed</div>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Learning Style */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <span>Learning Style</span>
              </CardTitle>
              <CardDescription>Your personalized learning preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Visual Learning</span>
                  <Badge className="bg-emerald-100 text-emerald-800">Primary</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Step-by-step Approach</span>
                  <Badge variant="outline">Preferred</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Interactive Examples</span>
                  <Badge variant="outline">Helpful</Badge>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Retake Assessment
              </Button>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-amber-600" />
                <span>Recent Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Target className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Quest Master</p>
                    <p className="text-xs text-gray-600">Completed 5 quests in a row</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Deep Thinker</p>
                    <p className="text-xs text-gray-600">Excellent metacognitive responses</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Debate Champion</p>
                    <p className="text-xs text-gray-600">Won 3 debates this week</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-teal-600" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Alex" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Student" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="alex.student@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Learning Goals</Label>
                <Textarea
                  id="bio"
                  placeholder="Describe your learning objectives and areas of interest..."
                  defaultValue="I'm passionate about mathematics and science, particularly interested in understanding complex systems and their real-world applications."
                />
              </div>
            </CardContent>
          </Card>

          {/* Learning Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <span>Learning Preferences</span>
              </CardTitle>
              <CardDescription>Customize how Eidos adapts to your learning style</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="flex items-center space-x-2">
                      <Eye className="h-4 w-4 text-teal-600" />
                      <span>Visual Learning Mode</span>
                    </Label>
                    <p className="text-sm text-gray-600">Prioritize diagrams, charts, and visual explanations</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="flex items-center space-x-2">
                      <Volume2 className="h-4 w-4 text-emerald-600" />
                      <span>Audio Explanations</span>
                    </Label>
                    <p className="text-sm text-gray-600">Include spoken explanations and audio content</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-amber-600" />
                      <span>Step-by-Step Guidance</span>
                    </Label>
                    <p className="text-sm text-gray-600">Break down complex problems into smaller steps</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-red-600" />
                      <span>Challenge Mode</span>
                    </Label>
                    <p className="text-sm text-gray-600">Increase difficulty and reduce hints</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-amber-600" />
                <span>Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Quest Reminders</Label>
                  <p className="text-sm text-gray-600">Get notified about incomplete quests</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Progress Updates</Label>
                  <p className="text-sm text-gray-600">Weekly progress summaries</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>New Debate Topics</Label>
                  <p className="text-sm text-gray-600">Notifications for new debate challenges</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Achievement Alerts</Label>
                  <p className="text-sm text-gray-600">Celebrate when you earn new badges</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & AI Ethics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span>Privacy & AI Ethics</span>
              </CardTitle>
              <CardDescription>Manage your data and responsible AI use settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Learning Analytics</Label>
                  <p className="text-sm text-gray-600">Allow Eidos to analyze your learning patterns</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>External AI Detection</Label>
                  <p className="text-sm text-gray-600">Monitor for external AI tool usage</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Data Sharing</Label>
                  <p className="text-sm text-gray-600">Share anonymized data to improve Eidos</p>
                </div>
                <Switch />
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full">
                  View AI Ethics Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Progress Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <span>Learning Analytics</span>
              </CardTitle>
              <CardDescription>Insights into your learning journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">85%</div>
                  <div className="text-sm text-gray-600">Avg. Confidence Accuracy</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">4.2/5</div>
                  <div className="text-sm text-gray-600">Critical Thinking Score</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">12</div>
                  <div className="text-sm text-gray-600">Debate Wins</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mathematics Mastery</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Science Understanding</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Argumentation Skills</span>
                    <span>82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Changes */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
