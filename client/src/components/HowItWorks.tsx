import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function HowItWorks() {
  const topics = [
    {
      title: "Meu filho não fala, devo me preocupar?",
      description: "Atraso de fala pode indicar necessidade de avaliação neurológica. Uma consulta especializada ajuda a identificar a causa e traçar o melhor caminho para o desenvolvimento da criança.",
    },
    {
      title: "Dor de cabeça frequente é normal?",
      description: "Cefaleias recorrentes precisam de investigação. Enxaqueca é uma condição neurológica crônica com tratamentos eficazes — mas o diagnóstico correto exige avaliação especializada.",
    },
    {
      title: "Quais são os sinais de AVC?",
      description: "Fraqueza, fala alterada, tontura e visão turva são sinais de alerta. Use o método FAST: Fraqueza facial, Alteração de braço, Sintoma de fala e Tempo — ligue 192 imediatamente.",
    },
    {
      title: "AVC pode acontecer em jovens?",
      description: "Sim, e muitas vezes é subdiagnosticado. AVC em adultos jovens e crianças tem causas específicas que exigem investigação especializada e acompanhamento adequado.",
    },
    {
      title: "Quando procurar um neurologista para o meu filho?",
      description: "Suspeita de autismo, TDAH, convulsões, dificuldade de aprendizagem ou atraso no desenvolvimento são indicações claras para avaliação neuropediátrica.",
    },
    {
      title: "Como funciona a teleconsulta?",
      description: "Consulta por videochamada com toda a atenção e qualidade do atendimento presencial. Disponível para todo o Brasil. Quando indicado, retorno presencial em São Paulo sem custo adicional.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#E8F1F6" }}>
            <span className="text-sm font-medium" style={{ color: "#2A8FA8" }}>Orientação Especializada</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Quando procurar um neurologista?
          </h2>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Dúvidas comuns de pacientes e famílias — porque entender os sinais neurológicos é o primeiro passo para o cuidado certo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#E8F1F6" }}
              >
                <HelpCircle className="w-5 h-5" style={{ color: "#2A8FA8" }} />
              </div>

              <h3 className="text-lg font-bold mb-3" style={{ color: "#212529" }}>
                {topic.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
