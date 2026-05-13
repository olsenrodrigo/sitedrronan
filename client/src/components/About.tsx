import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, IdCard, Building2, Globe, Star } from "lucide-react";
import drRonanPhoto from "../assets/images/dr-ronan.jpg";

export default function About() {
  const credentials = [
    { icon: GraduationCap, text: "Graduação em Medicina — USP (2007–2013)" },
    { icon: Briefcase, text: "Residência em Neurologia — UNICAMP (2014–2018)" },
    { icon: Globe, text: "Fellowship AVC Infantil — SickKids Toronto (2018–2020)" },
    { icon: Globe, text: "Fellowship AVC Adulto — Toronto Western Hospital (2020–2021)" },
    { icon: Award, text: "Membro da Academia Americana de Neurologia (AAN)" },
    { icon: Building2, text: "Equipe Hospital Sírio-Libanês — São Paulo" },
    { icon: Star, text: "Título de Especialista em Neuropediatria — RQE 65878" },
    { icon: IdCard, text: "CRM-SP 161754" },
  ];

  return (
    <section id="about" className="py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#E8F1F6" }}>
              <span className="text-sm font-medium" style={{ color: "#1E4D6B" }}>Sobre o Especialista</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#212529" }}>
              Neurologista e Neuropediatra com formação pela USP e especialização internacional
            </h2>

            <p className="text-lg mb-6 font-medium" style={{ color: "#2A8FA8" }}>
              Referência em neurologia vascular e diagnóstico de condições complexas
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Neurologista e neuropediatra em São Paulo, formado pela <strong>USP</strong>, com residência pela
              <strong> UNICAMP</strong> e especialização internacional em AVC (acidente vascular cerebral)
              infantil e adulto pela <strong>Universidade de Toronto</strong> (SickKids e Toronto Western Hospital).
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Atua no diagnóstico e tratamento de doenças neurológicas em todas as idades, com
              foco em <strong>AVC em jovens, atraso de fala, autismo, cefaleia</strong> e distúrbios neurológicos complexos.
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Seu diferencial está na combinação de:
            </p>
            <ul className="mb-6 space-y-2 pl-4">
              {["Medicina baseada em evidências", "Observação clínica detalhada", "Atendimento individualizado"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-base" style={{ color: "#3C3C3C" }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#2A8FA8" }} />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Consultas com tempo adequado permitem uma avaliação profunda, essencial para casos que não tiveram <strong>diagnóstico claro anteriormente</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ borderColor: "rgba(42, 143, 168, 0.15)", backgroundColor: "rgba(232, 241, 246, 0.4)" }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E8F1F6" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#1E4D6B" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#212529" }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-sm">
              <img
                src={drRonanPhoto}
                alt="Dr. Ronan José Vieira Neto — Neurologista e Neuropediatra"
                className="w-full h-[550px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-3xl -z-10" style={{ backgroundColor: "rgba(200, 150, 60, 0.1)" }} />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full -z-10" style={{ backgroundColor: "rgba(42, 143, 168, 0.1)" }} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-bold italic max-w-3xl mx-auto mb-6" style={{ color: "#1A2B4A" }}>
            "Cada cérebro é único. Cada paciente merece um diagnóstico à altura dessa complexidade."
          </blockquote>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 text-white rounded-full font-medium hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "linear-gradient(135deg, #1E4D6B 0%, #2A8FA8 100%)" }}
          >
            Agendar minha consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}