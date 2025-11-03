import HeroSection from "../components/Herosection";
import MenuSection from "../components/MenuSection";
import { motion } from "framer-motion";
import "./Pages.css";

export default function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />
      <section className="intro-section">
        <h2>Welcome to Little Lemon 🍋</h2>
        <p>
          Enjoy authentic Mediterranean cuisine made from fresh, locally sourced ingredients.
        </p>
      </section>
      <MenuSection />
    </motion.div>
  );
}