import { cn } from "@/lib/utils";
import { Menu, X ,Sun,Moon} from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle"; // Adjust import path as needed

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Detect scroll for navbar blur and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-lg border-b border-border/40"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center group"
        >
          <span className="text-glow text-foreground group-hover:scale-105 transition-transform duration-300">
            Mayank Kumar
          </span>
          <span className="ml-2 text-foreground/70 hidden sm:inline">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) => {
            const section = item.href.replace('#', '');
            return (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg relative",
                  activeSection === section && "text-primary font-semibold"
                )}
              >
                {item.name}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Theme Toggle - Simplified */}
          <button
            onClick={() => {
              const isDark = document.documentElement.classList.contains('dark');
              if (isDark) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
              } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
              }
            }}
            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-border/50"
            aria-label="Toggle Theme"
          >
            {document.documentElement.classList.contains('dark') ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600" />
            )}
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border/50 z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* New Mobile Menu - Solid Background */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-80 bg-background border-l border-border/40 shadow-2xl flex flex-col transition-transform duration-500 ease-in-out md:hidden z-40",
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          )}
        >
          {/* Menu Header */}
          <div className="p-6 border-b border-border/40 bg-background">
            <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
            <p className="text-sm text-foreground/60 mt-1">Explore my portfolio</p>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col p-6 space-y-2 bg-background">
            {navItems.map((item, key) => {
              const section = item.href.replace('#', '');
              return (
                <a
                  key={key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "group flex items-center justify-between p-4 rounded-xl border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300",
                    activeSection === section && "bg-primary/10 border-primary/50"
                  )}
                >
                  <span className={cn(
                    "text-foreground/80 group-hover:text-primary transition-colors",
                    activeSection === section && "text-primary font-semibold"
                  )}>
                    {item.name}
                  </span>
                  <div className={cn(
                    "w-2 h-2 rounded-full bg-transparent group-hover:bg-primary/50 transition-colors",
                    activeSection === section && "bg-primary"
                  )} />
                </a>
              );
            })}
          </div>

          {/* Menu Footer */}
          <div className="p-6 border-t border-border/40 bg-background">
            <div className="text-center text-sm text-foreground/60">
              <p>Let's build something amazing</p>
              <p className="text-xs mt-1">© 2024 Mayank Kumar</p>
            </div>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};