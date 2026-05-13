import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

/*
 * WHITELABEL: Personalizar
 * - Depoimentos de pacientes
 * - CTA de agendamento
 * - Endereco do consultorio
 * - Cores: #2A8FA8 (primary), #1A2B4A (secondary), #F0F6FA (muted)
 */

export default function FAQ() {
  const testimonials = [
    {
      text: "Bom dia, Dr. Ronan! Que você tenha uma semana abençoada e produtiva. Continue fazendo a diferença na vida de cada paciente e famílias, Vc é querido e nem sabe! Deus abençoe",
      name: "Paciente",
      detail: "Neurologia — São Paulo",
    },
    {
      text: "Gostaria de lhe informar que sua paciente (caso de Guillain Barre, no Sabará em julho/2025) está bem recuperada, com mobilidade e força em praticamente 100%... Recentemente em consulta de rotina, os reflexos neurológicos estavam todos de volta… Muito obrigada por seu diagnóstico preciso, mesmo em uma situação de uma síndrome com parâmetros não muito claros… Desejamos Saúde e paz a você, com muita dedicação e sucesso na jornada profissional! Um grande abraço!",
      name: "Familiar de paciente",
      detail: "Neurologia — Hospital Sabará",
    },
    {
      text: "Minha sogra sofreu um AVC cerebelar e, infelizmente, fomos surpreendidos por uma conduta médica inicial completamente equivocada, profissionais inexperientes, sem supervisão adequada, liberando paciente grave sem tomografia, aumentando o risco de vida dela. Foi quando o Dr. Ronan entrou no caso. Ele identificou o AVC, corrigiu imediatamente a conduta e nos orientou com clareza sobre o que fazer nas primeiras 24/48 horas, período crítico que poderia definir entre sequelas, um novo AVC ou até óbito. Graças a ele, tivemos acesso a um cuidado sério, técnico e humano. Um médico que assume responsabilidade, tem firmeza, empatia e uma competência rara. Mudou o rumo da história da nossa família. Eternamente gratos.",
      name: "Noemi Vidal",
      detail: "Neurologia Vascular — São Paulo",
    },
  ];

  return (
    <section id="faq" className="py-14" style={{ backgroundColor: "#F0F6FA" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(91, 140, 155, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1A2B4A" }}>Depoimentos</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#212529" }}>
            O que dizem os pacientes
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Experiências reais de quem passou pela consulta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border relative"
              style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: "#2A8FA8" }} />

              <p className="text-base leading-relaxed mb-6" style={{ color: "#3C3C3C" }}>
                "{item.text}"
              </p>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" style={{ color: "#2A8FA8" }} />
                ))}
              </div>

              <div>
                <p className="font-semibold text-sm" style={{ color: "#212529" }}>{item.name}</p>
                <p className="text-xs" style={{ color: "#2A8FA8" }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl p-10 text-center text-white"
          style={{ background: "linear-gradient(135deg, #1A2B4A 0%, #1E4D6B 50%, #2A8FA8 100%)" }}
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Pronto para cuidar do seu cérebro com quem entende de verdade?
          </h4>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg" style={{ color: "rgba(168, 216, 232, 0.9)" }}>
            <span>Atendimento particular</span>
            <span>|</span>
            <span>Presencial e Teleconsulta</span>
            <span>|</span>
            <span>São Paulo — SP</span>
          </div>
          <p className="text-base mb-8" style={{ color: "rgba(168, 216, 232, 0.7)" }}>
            Av. Marquês de São Vicente, 2219 — Conj. 316 — Jardim das Perdizes, São Paulo/SP
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#1A2B4A" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar consulta agora
          </button>
        </motion.div>
      </div>
    </section>
  );
}