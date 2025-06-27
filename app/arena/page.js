import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ArenaContent } from "@/components/arena-content"

export default function ArenaPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 bg-gray-50">
          <ArenaContent />
        </main>
      </div>
    </SidebarProvider>
  )
}
