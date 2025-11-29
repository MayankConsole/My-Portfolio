import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const words = ["Mayank Kumar", "Frontend Developer", "Tech Enthusiast"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const typingSpeed = isDeleting ? 70 : 120;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing forward
        setText(currentWord.slice(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          // pause at full word
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // deleting backward
        setText(currentWord.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          // move to next word
          setIsDeleting(false);
          setIndex((prevIndex) =>
            prevIndex + 1 === words.length ? 0 : prevIndex + 1
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-80">Hi, I'm </span>
            <span className="text-primary relative after:content-['|'] after:ml-1 after:animate-blink">
              {text}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a
              href="#project"
              className="cosmic-button relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
