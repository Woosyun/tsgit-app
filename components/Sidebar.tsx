"use client"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"

export default function Sidebar() {
  return (
    <Menubar>
      <MenubarMenu>
        <Menubar1/>
      </MenubarMenu>
    </Menubar>
  )
}

function Menubar1() {
  return (
    <>
      <MenubarTrigger>Navigation</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <Link href="/">Home</Link>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <Link href="/select-folder">select folder</Link>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <Link href="/show-graph">graph</Link>
        </MenubarItem>
      </MenubarContent>
    </>
  )
}