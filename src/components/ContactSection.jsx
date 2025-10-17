import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";
import { Toast } from "./Toast.jsx";

export const ContactSection = () => {
  const [toast, setToast] = useState(null);

  // Form fields (controlled components)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Show toast
    setToast({ message: "Message sent successfully!", type: "success" });

    // ✅ Clear form after submit
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Get In <span className="text-foreground">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I’m always open to new opportunities and discussions.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">mayannk27kr@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground">+91 00000 00000</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <p className="text-muted-foreground mb-4">Connect With Me</p>
            <div className="flex justify-center items-center gap-5">
              <a
                href="https://www.linkedin.com/in/mayank-kumar-4192762b7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/MayankConsole"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/mayannnn.k?igsh=YWNlcm4xanFkbGxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-background/40 backdrop-blur-lg rounded-2xl shadow-md p-8 border border-border/30">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Hello, I'd like to talk about..."
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-foreground resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};
