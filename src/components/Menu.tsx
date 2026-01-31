import { useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";
import "./Menu.css";

export type MenuItem = {
  label: string;
  to: string;
};

export default function Menu({ items }: { items: MenuItem[] }) {
  const navigate = useNavigate();

  return (
    <div className="menuBox" style={styles.box}>
      {items.map((item, index) => (
        <button
          key={item.to || item.label}
          type="button"
          onClick={() => navigate(item.to)}
          style={{
            ...styles.row,
            ...(index !== items.length - 1 ? styles.rowBorder : undefined),
          }}
        >
          <span style={styles.label}>{item.label}</span>
          <span style={styles.chev}>›</span>
        </button>
      ))}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  box: {
    width: 280,
    border: "1px solid #111",
    overflow: "hidden",
    background: "#fff",
  },
  row: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 16,

    borderRadius: 0,
    appearance: "none",
    WebkitAppearance: "none",
  },
  rowBorder: { borderBottom: "1px solid #111" },
  label: { fontWeight: 500 },
  chev: { fontSize: 20, lineHeight: 1 },
};
