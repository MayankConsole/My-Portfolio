import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-transparent border-t border-border/40 mt-12 flex flex-wrap justify-between items-center backdrop-blur-sm">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Mayank Kumar. All rights reserved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </footer>
  );
};
