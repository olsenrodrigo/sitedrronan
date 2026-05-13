import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const goTo = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #0D1B2A 0%, #1A2B4A 40%, #1E4D6B 100%)"
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(13, 27, 42, 0.97), rgba(26, 43, 74, 0.75), rgba(26, 43, 74, 0.25))" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Neurologista em São Paulo |{" "}
              <span style={{ color: "#C8963C" }}>
                Neuropediatria e AVC em adultos jovens e crianças
              </span>
            </h1>

            <p className="text-lg mb-3 leading-snug" style={{ color: "#A8D8E8" }}>
              Diagnóstico neurológico preciso com base em evidência científica, observação clínica e experiência internacional
            </p>

            <p className="text-base mb-5 leading-relaxed" style={{ color: "rgba(168, 216, 232, 0.85)" }}>
              Atendimento especializado em <strong>neurologia e neuropediatria em São Paulo</strong>, com foco em <strong>AVC (derrame), atraso de fala, autismo, TDAH e cefaleia</strong>. Consulta completa, com avaliação individualizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("contact")}
                className="group px-6 py-3 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer"
                style={{ background: "linear-gradient(135deg, #C8963C 0%, #E0A84A 100%)" }}
              >
                <Calendar size={18} />
                Agendar Consulta
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("about")}
                className="px-6 py-3 backdrop-blur-sm text-white rounded-full font-medium border-2 transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.25)" }}
              >
                <User size={18} />
                Conheça o Especialista
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-5 border-t"
            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
          >
            {[
              { value: "USP + UNICAMP", label: "Formação de Elite" },
              { value: "Toronto", label: "Fellowship Internacional" },
              { value: "0 a 99 anos", label: "Neurologia para todas as idades" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg md:text-xl font-bold mb-1" style={{ color: "#C8963C" }}>{stat.value}</div>
                <div className="text-sm" style={{ color: "#A8D8E8" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </div>
  );
}
