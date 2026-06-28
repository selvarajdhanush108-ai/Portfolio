"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send } from "lucide-react";
import { motion } from "framer-motion";

interface CommandLog {
  command: string;
  output: React.ReactNode;
  isError?: boolean;
}

export function ContactTerminal() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: "whoami",
      output: (
        <div className="text-accent">
          Dhanush S - DevOps Engineer & Java Developer
        </div>
      ),
    },
    {
      command: "help",
      output: (
        <div>
          Available commands:
          <br />
          <span className="text-accent-2">whoami</span> - Display user info
          <br />
          <span className="text-accent-2">skills</span> - List technical skills
          <br />
          <span className="text-accent-2">contact</span> - Show contact information
          <br />
          <span className="text-accent-2">clear</span> - Clear the terminal
          <br />
          <span className="text-accent-2">message [text]</span> - Send a direct message
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let output: React.ReactNode = "";
    let isError = false;

    if (cmd === "clear") {
      setLogs([]);
      setInput("");
      return;
    } else if (cmd === "whoami") {
      output = <div className="text-accent">Dhanush S - DevOps Engineer & Java Developer</div>;
    } else if (cmd === "skills") {
      output = (
        <div className="grid grid-cols-2 gap-2 text-muted-foreground mt-2">
          <div>• Java & Spring Boot</div>
          <div>• Docker & Kubernetes</div>
          <div>• CI/CD & GitHub Actions</div>
          <div>• Linux Administration</div>
        </div>
      );
    } else if (cmd === "contact") {
      output = (
        <div className="mt-2 space-y-1">
          <div><span className="text-muted-foreground">Email:</span> <a href="mailto:contact@dhanushs.in" className="text-accent hover:underline">contact@dhanushs.in</a></div>
          <div><span className="text-muted-foreground">GitHub:</span> <a href="https://github.com/selvarajdhanush108-ai" className="text-accent hover:underline">github.com/selvarajdhanush108-ai</a></div>
          <div><span className="text-muted-foreground">LinkedIn:</span> <a href="https://www.linkedin.com/in/dhanush-s1006/" className="text-accent hover:underline">linkedin.com/in/dhanush-s1006/</a></div>
        </div>
      );
    } else if (cmd === "help") {
      output = (
        <div>
          Available commands:
          <br />
          <span className="text-accent-2">whoami</span>, <span className="text-accent-2">skills</span>, <span className="text-accent-2">contact</span>, <span className="text-accent-2">clear</span>, <span className="text-accent-2">message [text]</span>
        </div>
      );
    } else if (cmd.startsWith("message ")) {
      const msg = cmd.replace("message ", "");
      output = <div className="text-success">Message sent successfully: "{msg}" (Simulated)</div>;
    } else {
      output = <div>command not found: {cmd}. Type 'help' for available commands.</div>;
      isError = true;
    }

    setLogs([...logs, { command: input, output, isError }]);
    setInput("");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Initialize <span className="text-gradient">Connection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interact with my portfolio through the terminal or use standard contact methods.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
              <div className="w-3 h-3 rounded-full bg-accent/80"></div>
              <div className="w-3 h-3 rounded-full bg-success/80"></div>
            </div>
            <div className="flex-1 text-center flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
              <Terminal size={14} /> dhanush@portfolio: ~
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            className="p-6 font-mono text-sm h-[400px] overflow-y-auto scrollbar-thin flex flex-col"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="mb-6 text-muted-foreground">
              Welcome to DhanushOS v1.0.0
              <br />
              Type 'help' to see available commands.
            </div>

            {logs.map((log, i) => (
              <div key={i} className="mb-4">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-success">➜</span>
                  <span className="text-accent">~</span>
                  <span>{log.command}</span>
                </div>
                <div className={`mt-1 ml-4 ${log.isError ? "text-destructive" : "text-white/80"}`}>
                  {log.output}
                </div>
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
              <span className="text-success">➜</span>
              <span className="text-accent">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
