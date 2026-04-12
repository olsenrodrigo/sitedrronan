import { motion } from "framer-motion";
import { GraduationCap, Globe, Clock, Heart, Brain, Stethoscope } from "lucide-react";

/*
 * WHITELABEL: Personalizar
 * - Titulo e subtitulo
 * - Cards de diferenciais (icone, titulo, descricao)
 * - Cores: #5B8C9B (primary), #2C3E50 (secondary), #EDF2F4 (muted)
 */

export default function Differentials() {
  const differentials = [
    {
      icon: Globe,
      title: "Formação internacional única",
      description: "Dois fellowships realizados no Canadá — SickKids e Toronto Western Hospital, dois dos centros mais reconhecidos do mundo em AVC. Uma formação que pouquíssimos neurologistas brasileiros possuem.",
    },
    {
      icon: Brain,
      title: "O único especialista para toda a família",
      description: "Neuropediatra e neurologista adulto em um único médico. Seu filho, você e seus pais podem ser atendidos pelo mesmo especialista de elite, sem fragmentar o cuidado.",
    },
    {
      icon: Clock,
      title: "Consultas de 45 a 60 minutos",
      description: "Muito acima do padrão de 15-20 minutos. Tempo real para ouvir, examinar, explicar e planejar — porque neurologia complexa exige atenção completa, não pressa.",
    },
    {
      icon: Stethoscope,
      title: "Teleconsulta com retorno garantido",
      description: "Consulta online para todo o Brasil. Quando indicado, retorno presencial em São Paulo em até 30 dias, sem custo adicional. Tecnologia a serviço do cuidado.",
    },
    {
      icon: GraduationCap,
      title: "Membro da Academia Americana de Neurologia",
      description: "Credencial internacional rara para médicos brasileiros. Acesso às mais recentes diretrizes e publicações científicas mundiais aplicadas diretamente ao seu cuidado.",
    },
    {
      icon: Heart,
      title: "Medicina com empatia e clareza",
      description: "Pacientes descrevem o Dr. Ronan como 'impecável' e 'totalmente disposto a ajudar'. Você recebe explicações claras sobre diagnóstico, opções e o que esperar do tratamento.",
    },
  ];

  return (
    <section id="differentials" className="py-24" style={{ backgroundColor: "#F0F6FA" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(42, 143, 168, 0.15)" }}>
              <span className="text-sm font-medium" style={{ color: "#1A2B4A" }}>Por que escolher</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
              O que faz o Dr. Ronan diferente
            </h3>

            <p className="text-xl" style={{ color: "#3C3C3C" }}>
              Formação de elite, cuidado humanizado e o tempo que você merece.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border text-center"
                style={{ borderColor: "rgba(42, 143, 168, 0.15)" }}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #1E4D6B 0%, #2A8FA8 100%)" }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold mb-4" style={{ color: "#212529" }}>
                  {item.title}
                </h4>

                <p className="leading-relaxed" style={{ color: "#3C3C3C" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}