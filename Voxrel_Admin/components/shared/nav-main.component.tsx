"use client"

import { type LucideIcon } from "lucide-react"
import Link from "next/link"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.ui"
import { cn } from "@/lib/utils.lib"

// Neon badge color presets — pick one per group title, falls back to violet.
const NEON_STYLES: Record<string, { badge: string; icon: string }> = {
  violet: {
    badge: "bg-violet-400/15 border-violet-400/40 shadow-[0_0_14px_-2px_rgba(167,139,250,0.65)]",
    icon: "text-violet-300",
  },
  pink: {
    badge: "bg-pink-400/15 border-pink-400/40 shadow-[0_0_14px_-2px_rgba(244,114,182,0.65)]",
    icon: "text-pink-400",
  },
  cyan: {
    badge: "bg-cyan-400/15 border-cyan-400/40 shadow-[0_0_14px_-2px_rgba(34,211,238,0.65)]",
    icon: "text-cyan-400",
  },
  amber: {
    badge: "bg-amber-400/15 border-amber-400/40 shadow-[0_0_14px_-2px_rgba(251,191,36,0.65)]",
    icon: "text-amber-400",
  },
}

// Which color each nav group gets — distinct assignment from SuperAdmin's mapping.
const GROUP_COLOR: Record<string, keyof typeof NEON_STYLES> = {
  "Task": "violet",
  "User": "pink",
  "Project": "cyan",
  "Settings": "amber",
}

export function NavMain({
  groups,
}: {
  groups: {
    title: string
    items: {
      title: string
      url: string
      icon?: LucideIcon
      isActive?: boolean
    }[]
  }[]
}) {
  return (
    <>
      {groups.map((group) => {
        const colorKey = GROUP_COLOR[group.title] ?? "violet"
        const style = NEON_STYLES[colorKey]
        return (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {item.icon && (
                        <span
                          className={cn(
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-shadow",
                            style.badge
                          )}
                        >
                          <item.icon className={cn("h-4 w-4", style.icon)} />
                        </span>
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        )
      })}
    </>
  )
}
