import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const avcServices = [
    "AVC isquêmico e hemorrágico",
    "Sintomas de derrame",
    "Aneurisma cerebral",
    "Trombose cerebral",
    "Malformações vasculares",
    "Dissecção arterial",
    "Prevenção de AVC",
  ];

  const infantilServices = [
    "Atraso de fala infantil",
    "Suspeita de autismo",
    "TDAH",
    "Dor de cabeça frequente (cefaleia)",
    "Tontura e fraqueza",
    "Convulsões",
    "Dificuldade de aprendizagem",
  ];

  return (
    <section id="services" className="py-14" style={{ backgroundColor: "#F0F6FA" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(42, 143, 168, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1A2B4A" }}>Serviços</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#212529" }}>
            Tratamento neurológico completo em São Paulo
          </h2>

          <p className="text-xl max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Diagnóstico, investigação e acompanhamento especializado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border"
            style={{ borderColor: "rgba(42, 143, 168, 0.15)" }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#1A2B4A" }}>
              Tratamento de AVC e doenças neurovasculares
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Atendimento especializado em <strong>AVC (derrame) em adultos jovens e crianças</strong>, com investigação de causas raras e acompanhamento completo.
            </p>
            <ul className="space-y-3">
              {avcServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#2A8FA8" }} />
                  <span className="font-medium" style={{ color: "#212529" }}>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border"
            style={{ borderColor: "rgba(42, 143, 168, 0.15)" }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#1A2B4A" }}>
              Neurologia infantil e queixas neurológicas comuns
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Avaliação completa de crianças com <strong>atraso de fala, autismo, TDAH</strong> e dificuldades escolares, além de sintomas neurológicos em adultos.
            </p>
            <ul className="space-y-3">
              {infantilServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#2A8FA8" }} />
                  <span className="font-medium" style={{ color: "#212529" }}>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            className="px-8 py-4 text-white rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "linear-gradient(135deg, #1A2B4A 0%, #2A8FA8 100%)" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
}
