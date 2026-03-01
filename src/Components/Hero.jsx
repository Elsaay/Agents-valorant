import { motion } from "framer-motion";
import "../Style/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      />

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>Valorant’s Agents</span>
      </motion.h1>

      <div className="light-sweep"></div>
        <div className="particles">
  {Array.from({ length: 25 }).map((_, i) => (
    <span key={i} style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`
    }}></span>
  ))}
</div>
    </div>
  );
}