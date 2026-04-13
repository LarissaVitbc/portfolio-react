import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const projects = [
    {
      title: "Site de Restaurante",
      desc: "Desenvolvi uma interface responsiva focada em hierarquia visual clara, facilitando a navegação do usuário.",
      link: "https://github.com/LarissaVitbc",
    },
    {
      title: "Landing Page Agência de Viagens",
      desc: "Interface moderna orientada à conversão com experiência fluida e responsiva.",
      link: "https://github.com/LarissaVitbc",
    },
    {
      title: "Site de Café",
      desc: "Interface com formulários e estrutura organizada garantindo integração visual e funcional.",
      link: "https://github.com/LarissaVitbc",
    },
  ];

  return (
    <div
      style={{
        background: darkMode ? "#0f172a" : "#ffffff",
        color: darkMode ? "#ffffff" : "#1a1a1a",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
        }}
      >
        <h1 style={{ color: "#1A56A0" }}>Larissa Vitória</h1>

        <button
          onClick={toggleTheme}
          style={{
            background: "#1A56A0",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Modo {darkMode ? "Claro" : "Escuro"}
        </button>
      </header>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "32px", marginBottom: "10px" }}
        >
          Transformo ideias em interfaces que as pessoas adoram usar.
        </motion.h2>

        <p style={{ color: "#555" }}>
          Desenvolvedora Front-end & UX/UI Designer em formação | HTML · CSS · JavaScript · React · Figma
        </p>
      </section>

      {/* Sobre */}
      <section style={{ maxWidth: "800px", margin: "auto", padding: "40px" }}>
        <h2>Sobre Mim</h2>
        <p>
          Desenvolvedora Front-end & UX/UI em formação, com mais de 2 anos de experiência em sistemas informatizados.
          Focada em criar interfaces intuitivas, funcionais e visualmente atraentes com base em boas práticas de usabilidade.
        </p>
      </section>

      {/* Projetos */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Projetos</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {projects.map((proj, i) => (
            <div
              key={i}
              style={{
                background: darkMode ? "#1e293b" : "#f5f5f5",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <a href={proj.link} target="_blank">
                <button
                  style={{
                    marginTop: "10px",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: "1px solid #1A56A0",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Ver no GitHub
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experiência */}
      <section style={{ maxWidth: "800px", margin: "auto", padding: "40px" }}>
        <h2>Experiência</h2>
        <p>Drogaria Nova Esperança — Conferente (2023–2025)</p>
        <ul>
          <li>Controle de estoque em sistema informatizado</li>
          <li>Redução de perdas por vencimento em 20%</li>
          <li>100% conformidade com normas</li>
        </ul>
      </section>

      {/* Contato */}
      <section style={{ textAlign: "center", padding: "40px" }}>
        <h2>Contato</h2>
        <p>larissavitbc@gmail.com</p>
        <p>github.com/LarissaVitbc</p>
        <p>linkedin.com/in/larissa-vitoriatech</p>
      </section>

      <footer style={{ textAlign: "center", padding: "20px" }}>
        © 2026 Larissa Vitória
      </footer>
    </div>
  );
}