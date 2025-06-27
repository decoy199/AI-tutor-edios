import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SessionContent } from "@/components/session-content"

export default function SessionPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 bg-gray-50">
          <SessionContent />
        </main>
      </div>
    </SidebarProvider>
  )
}
