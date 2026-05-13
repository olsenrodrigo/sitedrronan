import { motion } from "framer-motion";
import { MapPin, Clock, Users, Shield } from "lucide-react";

/*
 * WHITELABEL: Personalizar
 * - Titulo e descricao
 * - Features do consultorio
 * - Endereco completo
 * - Embed do Google Maps
 * - Cores: #5B8C9B (primary), #2C3E50 (secondary), #EDF2F4 (muted)
 */

export default function Locations() {
  const features = [
    {
      icon: Shield,
      text: "Consultório em São Paulo — Barra Funda e Higienópolis",
    },
    {
      icon: Clock,
      text: "Teleconsulta disponível para todo o Brasil",
    },
    {
      icon: Users,
      text: "Avaliação individualizada e acompanhamento próximo",
    },
  ];

  return (
    <section id="locations" className="py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(42, 143, 168, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1A2B4A" }}>Consultório</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#212529" }}>
            Neurologista em São Paulo, atendimento presencial e telemedicina
          </h2>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Consultórios em São Paulo e teleconsulta disponível para todo o Brasil.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border"
                  style={{ borderColor: "rgba(42, 143, 168, 0.15)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E8F1F6" }}>
                    <feature.icon className="w-5 h-5" style={{ color: "#2A8FA8" }} />
                  </div>
                  <span className="font-medium pt-2" style={{ color: "#212529" }}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl border space-y-4"
              style={{ borderColor: "rgba(42, 143, 168, 0.2)", backgroundColor: "rgba(232, 241, 246, 0.5)" }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#2A8FA8" }} />
                <div>
                  <p className="font-bold" style={{ color: "#212529" }}>Barra Funda — Instituto Emunah</p>
                  <p style={{ color: "#3C3C3C" }}>
                    Av. Marquês de São Vicente, 2219 — Conj. 316<br />
                    Jardim das Perdizes — São Paulo/SP<br />
                    CEP: 05065-000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#2A8FA8" }} />
                <div>
                  <p className="font-bold" style={{ color: "#212529" }}>Higienópolis — Clínica Levy</p>
                  <p style={{ color: "#3C3C3C" }}>
                    Av. Angélica, 688 — 13º andar<br />
                    São Paulo/SP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#2A8FA8" }} />
                <div>
                  <p className="font-bold" style={{ color: "#212529" }}>Horários de Atendimento</p>
                  <p style={{ color: "#3C3C3C" }}>
                    Segunda a Sexta: 8h–20h<br />
                    Sábado: 7h–13h
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "rgba(42, 143, 168, 0.15)", position: "relative", minHeight: "480px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=EMNH+Instituto+de+Medicina+Av+Marques+de+Sao+Vicente+2219+Sao+Paulo&output=embed&z=16&hl=pt-BR"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório do Dr. Ronan Vieira — EMNH Instituto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}