import React from "react";

const DEFAULT_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg";

// Utility function to format date
const formatDate = (isoDate) => {
  if (!isoDate) return "N/A";

  const date = new Date(isoDate);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options); // 05-Sep-2025
};

export default function FeedCard({ post }) {
  return (
    <div
      className="feed-card"
      onClick={() => window.open(post.link, "_blank")}
      style={{
        cursor: "pointer",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "12px",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <img
        src={DEFAULT_IMAGE}
        alt="Microsoft"
        style={{ width: "50px", height: "50px", objectFit: "contain" }}
      />
      <div>
        <h3 style={{ margin: "0 0 4px 0" }}>{post.title}</h3>
        <p style={{ margin: "2px 0", color: "#555" }}>
          <strong>Author:</strong> {post.author || "Unknown"}
        </p>
        <p style={{ margin: "2px 0", color: "#555" }}>
          <strong>Published Date:</strong> {formatDate(post.date)}
        </p>
      </div>
    </div>
  );
}
