import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

/*
 * WHITELABEL: Personalizar
 * - Titulo e descricao da secao
 * - Topicos de conteudo educativo (titulo + descricao)
 * - Quantidade de cards
 * - Cores: #2A8FA8 (primary), #2C3E50 (secondary), #E8F1F6 (muted)
 */

export default function HowItWorks() {
  const topics = [
    {
      title: "O que é AVC e como reconhecer?",
      description: "AVC (Acidente Vascular Cerebral) ocorre quando o fluxo de sangue ao cérebro é interrompido. Reconheça com o método FAST: Fraqueza facial, Alteração de braço, Sintoma de fala e Tempo — ligue 192 imediatamente.",
    },
    {
      title: "AVC pode acontecer em crianças?",
      description: "Sim. AVC pediátrico é raro, mas real — e frequentemente subdiagnosticado. O Dr. Ronan é especialista nesse tema, com fellowship específico no SickKids Toronto, maior referência mundial em AVC infantil.",
    },
    {
      title: "TDAH: quando buscar avaliação?",
      description: "Dificuldade de concentração, impulsividade e hiperatividade persistentes que afetam o desempenho escolar ou social são sinais de alerta. O diagnóstico correto exige avaliação neurológica especializada — não apenas questionários.",
    },
    {
      title: "Enxaqueca ou dor de cabeça comum?",
      description: "Enxaqueca é uma condição neurológica crônica, não apenas 'dor de cabeça forte'. Tem tratamentos eficazes quando corretamente diagnosticada. Se a dor impede atividades ou se repete, procure um neurologista.",
    },
    {
      title: "O que esperar de uma consulta com o Dr. Ronan?",
      description: "Consultas de 45-60 minutos, com anamnese completa, exame neurológico detalhado e explicação clara do diagnóstico e plano terapêutico. Você sai entendendo o que tem e o que será feito. Sem pressa.",
    },
    {
      title: "Como funciona a teleconsulta?",
      description: "Consulta por videochamada com toda a atenção e qualidade do atendimento presencial. Para pacientes fora de São Paulo ou com dificuldade de deslocamento. Quando indicado, retorno presencial em até 30 dias, sem custo adicional.",
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
            <span className="text-sm font-medium" style={{ color: "#2A8FA8" }}>Conteudo Educativo</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Neurologia que você entende
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Informação acessível sobre condições neurológicas — porque entender o que acontece no seu cérebro é parte do tratamento.
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
                <BookOpen className="w-5 h-5" style={{ color: "#2A8FA8" }} />
              </div>

              <h4 className="text-lg font-bold mb-3" style={{ color: "#212529" }}>
                {topic.title}
              </h4>

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