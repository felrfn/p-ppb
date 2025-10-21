import React from "react";

const groupMembers = [
  {
    name: "RAFAEL ARDIANSYAH",
    nim: "21120123120007",
    githubUsername: "felrfn",
  },
  {
    name: "RAFI RAI PASHA AFANDI",
    nim: "21120123130073",
    githubUsername: "Rai9189",
  },
  {
    name: "AKMAL FADLI SIFA",
    nim: "21120123130083",
    githubUsername: "Wizard-Gandalf",
  },
  {
    name: "MUHAMMAD ARDAN FADLI",
    nim: "21120123140157",
    githubUsername: "RDN14",
  },
];

export default function ProfilePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#f9fafb",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 560,
          background: "#fff",
          borderRadius: 16,
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            textAlign: "left",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              margin: "0 0 1.5rem",
              fontSize: "1.5rem",
              color: "#1f2937",
            }}
          >
            Kelompok 19
          </h2>
          <p
            style={{
              textAlign: "center",
              margin: "-1.5rem 0 2rem",
              color: "#4b5563",
              fontSize: "1rem",
            }}
          >
            Praktikum Pemrograman Perangkat Bergerak (PPB)
          </p>

          <div
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {groupMembers.map((member) => (
              <a
                key={member.nim}
                href={`https://github.com/${member.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1rem",
                  background: "#f9fafb",
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  gap: "1rem",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.2s ease-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.backgroundColor = "#f9fafb";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={`https://github.com/${member.githubUsername}.png`}
                  width={64}
                  height={64}
                  alt={`Foto ${member.name}`}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #e5e7eb",
                  }}
                />
                <div style={{ flex: 1, textAlign: "left" }}>
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#1f2937",
                      fontSize: "1rem",
                      display: "block",
                    }}
                  >
                    {member.name}
                  </span>
                  <span
                    style={{
                      color: "#6b7280",
                      fontFamily: "monospace",
                      fontSize: "0.875rem",
                    }}
                  >
                    {member.nim}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
