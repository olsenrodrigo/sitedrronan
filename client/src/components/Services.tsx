import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    "AVC Isquêmico e Hemorrágico (adulto)",
    "AVC na Infância e Adolescência",
    "Neuropediatria — Avaliação completa",
    "TDAH — Diagnóstico e tratamento",
    "Suspeita de Autismo (TEA)",
    "Atraso de Fala e Desenvolvimento",
    "Epilepsia e Crises Convulsivas",
    "Enxaqueca e Cefaleias Crônicas",
    "Tontura e Vertigem",
    "Fraqueza Muscular e Dormência",
    "Aneurismas Cerebrais",
    "Malformações Arteriovenosas (MAV)",
    "Trombose Venosa Cerebral",
    "Dissecção Arterial",
    "Síndrome do Pânico",
    "Teleconsulta — todo o Brasil",
    "Segunda Opinião em Neurologia",
    "Retorno presencial pós-teleconsulta",
  ];

  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#F0F6FA" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(42, 143, 168, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1A2B4A" }}>Especialidades</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            O que o Dr. Ronan trata
          </h3>

          <p className="text-xl max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Neurologia adulta e pediátrica em um único especialista com formação internacional —
            da primeira infância à vida adulta, do consultório ao hospital de referência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border"
              style={{ borderColor: "rgba(42, 143, 168, 0.15)" }}
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#2A8FA8" }} />
              <span className="font-medium" style={{ color: "#212529" }}>{service}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #1A2B4A 0%, #1E4D6B 50%, #2A8FA8 100%)" }}
        >
          <h4 className="text-3xl font-bold mb-4 text-white">
            O cérebro do seu filho também precisa de um especialista
          </h4>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "rgba(168, 216, 232, 0.9)" }}>
            O Dr. Ronan é um dos únicos neurologistas no Brasil com fellowship dedicado ao AVC em
            crianças e adolescentes — formado no SickKids Toronto, referência mundial.
            Atendimento particular, com atenção individual e diagnóstico baseado nas evidências mais atuais.
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#1A2B4A" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar Consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
}