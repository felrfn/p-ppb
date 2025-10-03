import React from "react";

const GITHUB_USERNAME = "felrfn";
const PROFILE_IMAGE_URL = `https://github.com/${GITHUB_USERNAME}.png`;

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
        <img
          src={PROFILE_IMAGE_URL}
          width={160}
          height={160}
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",
            margin: "0 auto 1rem",
            border: "3px solid #e5e7eb",
          }}
        />

        <h1 style={{ margin: "0.5rem 0 0.25rem", fontSize: "1.75rem" }}>
          Rafael Ardiansyah
        </h1>
        <p style={{ margin: 0, color: "#6b7280", fontSize: "1rem" }}>
          NIM: 21120123120007
        </p>
      </section>
    </main>
  );
}
