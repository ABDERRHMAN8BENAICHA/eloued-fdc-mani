import {
  CalendarClock,
  Home,
  Image,
  ListTodo,
  PhoneCall,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Contact Forms",
    url: "/admin/contact",
    icon: PhoneCall,
  },
  {
    title: "Events",
    url: "/admin/events",
    icon: CalendarClock,
  },
  {
    title: "Assignments",
    url: "/admin/assignments",
    icon: ListTodo,
  },
  {
    title: "Images",
    url: "/admin/images",
    icon: Image,
  },
];

export function AdminSidebar() {
  return (
    <Sidebar className="mt-14" side="left">
      <SidebarContent className="mt-16">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
