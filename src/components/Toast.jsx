import { useEffect } from "react";
import { X } from "lucide-react";

export const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeStyles = {
    success: "bg-green-500/20 text-green-400 border-green-500/40",
    error: "bg-red-500/20 text-red-400 border-red-500/40",
    warning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
    info: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  };

  return (
    <div
      className={`fixed top-6 right-6 flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg backdrop-blur-md animate-fade-in-up z-50 transition-all ${typeStyles[type]}`}
    >
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="p-1 rounded-md hover:bg-white/10 transition"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
