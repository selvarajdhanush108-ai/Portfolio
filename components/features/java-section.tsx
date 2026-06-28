"use client";

import { motion } from "framer-motion";
import { GlowContainer } from "@/components/ui/glow-container";
import { Coffee, Database, Server, Shield, Activity } from "lucide-react";

export function JavaSection() {
  const codeSnippet = `
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    
    private final AuthService authService;
    private final JwtTokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticateUser(
            @Valid @RequestBody LoginRequest request) {
            
        Authentication auth = authService.authenticate(
            request.getEmail(), 
            request.getPassword()
        );
        
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwt = tokenProvider.generateToken(auth);
        
        return ResponseEntity.ok(new AuthResponse(jwt, "Bearer"));
    }
}
`.trim();

  return (
    <section id="java" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 flex items-center gap-4">
                <Coffee className="w-10 h-10 text-accent" />
                Java <span className="text-gradient">Ecosystem</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Building robust, enterprise-grade backend systems using Java and Spring Boot. I specialize in designing scalable RESTful APIs, securing microservices with JWT authentication, and optimizing database interactions using Hibernate and JPA.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Spring Security & JWT", desc: "Implementing robust authentication and authorization." },
                  { icon: Database, title: "Hibernate & Spring Data JPA", desc: "Efficient ORM mapping and database migrations." },
                  { icon: Server, title: "Microservices Architecture", desc: "Building scalable and independent backend services." },
                  { icon: Activity, title: "RESTful API Design", desc: "Creating intuitive and well-documented API endpoints." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-accent shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full"
          >
            <GlowContainer className="p-1">
              <div className="rounded-lg overflow-hidden bg-[#0a0f1c] border border-white/10 shadow-2xl">
                
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-xs text-muted-foreground ml-2 font-mono">AuthController.java</div>
                </div>

                <div className="p-6 overflow-x-auto">
                  <pre className="font-mono text-sm leading-loose text-white/80">
                    <code>
                      <span className="text-[#c678dd]">@RestController</span>
                      <br/>
                      <span className="text-[#c678dd]">@RequestMapping</span>(<span className="text-[#98c379]">"/api/v1/auth"</span>)
                      <br/>
                      <span className="text-[#c678dd]">public class</span> <span className="text-[#e5c07b]">AuthController</span> {'{'}
                      <br/>
                      <br/>
                      {'    '}<span className="text-[#c678dd]">private final</span> <span className="text-[#e5c07b]">AuthService</span> authService;
                      <br/>
                      {'    '}<span className="text-[#c678dd]">private final</span> <span className="text-[#e5c07b]">JwtTokenProvider</span> tokenProvider;
                      <br/>
                      <br/>
                      {'    '}<span className="text-[#c678dd]">@PostMapping</span>(<span className="text-[#98c379]">"/login"</span>)
                      <br/>
                      {'    '}<span className="text-[#c678dd]">public</span> <span className="text-[#e5c07b]">ResponseEntity</span>&lt;<span className="text-[#e5c07b]">AuthResponse</span>&gt; <span className="text-[#61afef]">authenticateUser</span>(
                      <br/>
                      {'            '}<span className="text-[#c678dd]">@Valid @RequestBody</span> <span className="text-[#e5c07b]">LoginRequest</span> request) {'{'}
                      <br/>
                      <br/>
                      {'        '}<span className="text-[#e5c07b]">Authentication</span> auth = authService.<span className="text-[#61afef]">authenticate</span>(
                      <br/>
                      {'            '}request.<span className="text-[#61afef]">getEmail</span>(), 
                      <br/>
                      {'            '}request.<span className="text-[#61afef]">getPassword</span>()
                      <br/>
                      {'        '});
                      <br/>
                      <br/>
                      {'        '}<span className="text-[#e5c07b]">SecurityContextHolder</span>.<span className="text-[#61afef]">getContext</span>().<span className="text-[#61afef]">setAuthentication</span>(auth);
                      <br/>
                      {'        '}<span className="text-[#e5c07b]">String</span> jwt = tokenProvider.<span className="text-[#61afef]">generateToken</span>(auth);
                      <br/>
                      <br/>
                      {'        '}<span className="text-[#c678dd]">return</span> <span className="text-[#e5c07b]">ResponseEntity</span>.<span className="text-[#61afef]">ok</span>(<span className="text-[#c678dd]">new</span> <span className="text-[#e5c07b]">AuthResponse</span>(jwt, <span className="text-[#98c379]">"Bearer"</span>));
                      <br/>
                      {'    }'}
                      <br/>
                      {'}'}
                    </code>
                  </pre>
                </div>
              </div>
            </GlowContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
