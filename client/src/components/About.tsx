import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, IdCard, Building2, Globe, Star } from "lucide-react";

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
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#E8F1F6" }}>
              <span className="text-sm font-medium" style={{ color: "#1E4D6B" }}>Sobre o Especialista</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#212529" }}>
              Dr. Ronan Vieira
            </h3>

            <p className="text-lg mb-6 font-medium" style={{ color: "#2A8FA8" }}>
              Neurologista · Neuropediatra · Especialista em AVC
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              <strong>Dr. Ronan José Vieira Neto</strong> é neurologista e neuropediatra formado pela
              <strong> Universidade de São Paulo (USP)</strong>, com residência médica em Neurologia
              pela <strong>UNICAMP</strong> — um dos programas mais rigorosos do Brasil.
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Sua trajetória o levou a dois dos maiores centros mundiais em AVC: realizou fellowship em
              <strong> AVC na infância e adolescência no Hospital for Sick Children (SickKids)</strong> e
              em <strong>AVC adulto no Toronto Western Hospital</strong> — ambos vinculados à
              Universidade de Toronto, Canadá. Uma formação internacional rara entre neurologistas brasileiros.
            </p>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Com consultas de <strong>45 a 60 minutos</strong>, o Dr. Ronan oferece um atendimento que
              prioriza entender completamente o paciente, explicar o diagnóstico com clareza e tomar
              decisões compartilhadas. Atende <strong>crianças, adolescentes e adultos</strong>,
              presencialmente e por teleconsulta.
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
                src="https://neuroronan.com/dr/wp-content/uploads/2022/01/Foto-Dr-Ronan.jpeg"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t"
          style={{ borderColor: "rgba(42, 143, 168, 0.2)" }}
        >
          {[
            { value: "USP + UNICAMP + Toronto", label: "Trajetória acadêmica de elite em 3 países" },
            { value: "0 a 99 anos", label: "Neurologia adulta e pediátrica em um único especialista" },
            { value: "45–60 min", label: "Consultas completas, sem pressa, com diagnóstico preciso" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-xl md:text-2xl font-bold mb-2" style={{ color: "#1A2B4A" }}>{item.value}</div>
              <div className="text-base" style={{ color: "#3C3C3C" }}>{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-3xl md:text-4xl font-bold italic max-w-3xl mx-auto mb-8" style={{ color: "#1A2B4A" }}>
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