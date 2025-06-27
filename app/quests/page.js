import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { QuestsContent } from "@/components/quests-content"

export default function QuestsPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 bg-gray-50">
          <QuestsContent />
        </main>
      </div>
    </SidebarProvider>
  )
}
