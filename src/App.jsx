import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "Site de Restaurante",
      desc: "Interface responsiva com foco em usabilidade.",
      link: "https://github.com/LarissaVitbc",
    },
    {
      title: "Landing Page Agência",
      desc: "Design moderno focado em conversão.",
      link: "https://github.com/LarissaVitbc",
    },
    {
      title: "Site de Café",
      desc: "Estrutura organizada com formulários.",
      link: "https://github.com/LarissaVitbc",
    },
  ];

  return (
    <div
      style={{
        background: darkMode ? "#0f172a" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <h2>Larissa Vitória</h2>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 16px",
            background: "#1A56A0",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Modo {darkMode ? "Claro" : "Escuro"}
        </button>
      </header>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1>Transformo ideias em interfaces que as pessoas adoram usar.</h1>
        <p>
          Desenvolvedora Front-end & UX/UI Designer em formação
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
                border: "1px solid #ddd",
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

      {/* Contato */}
      <section style={{ textAlign: "center", padding: "40px" }}>
        <h2>Contato</h2>
        <p>larissavitbc@gmail.com</p>
      </section>
    </div>
  );
}