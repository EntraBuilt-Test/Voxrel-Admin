import { AuthGuard } from "@/components/auth/auth.guard"
import { ParticlesBackground } from "@/components/effects/particles-background"
import { AppSidebar } from "@/components/shared/app-sidebar.component"
import { DynamicHeader } from "@/components/shared/dynamic-header.component"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar.ui"

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthGuard>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="relative overflow-hidden bg-background">
          <ParticlesBackground color="167,139,250" density={1.1} />
          <div className="relative z-10 flex flex-1 flex-col min-h-0">
            <DynamicHeader />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 min-h-0">
              {children}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  )
}
