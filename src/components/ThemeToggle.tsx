"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="link"
      size="icon"
      className="h-8 w-8 bg-transparent hover:bg-transparent"
      onClick={() => {
        if (theme === "light") {
          setTheme("dark")
        } else if (theme === "dark") {
          setTheme("system")
        } else {
          setTheme("light")
        }
      }}
    >
      <Sun className={cn("h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0", {
        "rotate-0 scale-100": theme === "light",
        "rotate-90 scale-0": theme === "dark" || theme === "system",
      })} />
      <Moon className={cn("absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100", {
        "rotate-90 scale-0": theme === "light" || theme === "system",
        "rotate-0 scale-100": theme === "dark",
      })} />
      <Laptop className={cn("absolute h-4 w-4 rotate-180 scale-0 transition-all", {
        "rotate-180 scale-0": theme === "light" || theme === "dark",
        "rotate-0 scale-100": theme === "system",
      })} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
