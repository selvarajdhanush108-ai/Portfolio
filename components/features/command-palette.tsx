"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Terminal, Code, Server, User, Briefcase, Mail } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push("#about"))}>
            <User className="mr-2 h-4 w-4" />
            <span>About Me</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("#skills"))}>
            <Code className="mr-2 h-4 w-4" />
            <span>Skills</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("#projects"))}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("#devops"))}>
            <Server className="mr-2 h-4 w-4" />
            <span>DevOps Dashboard</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("#contact"))}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Quick Actions">
          <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/selvarajdhanush108-ai", "_blank"))}>
            <Terminal className="mr-2 h-4 w-4" />
            <span>GitHub Profile</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.alert("Resume downloading..."))}>
            <Code className="mr-2 h-4 w-4" />
            <span>Download Resume</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
