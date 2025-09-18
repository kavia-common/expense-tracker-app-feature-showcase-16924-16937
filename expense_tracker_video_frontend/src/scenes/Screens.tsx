import React from "react";
import { FONT_STACK, theme } from "../theme";
import { FadeInUp } from "../components/Primitives";

// Reusable row
const Row: React.FC<{
  left: React.ReactNode;
  right: React.ReactNode;
  accent?: string;
}> = ({ left, right, accent }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "16px 20px",
      borderBottom: "1px solid #F3F4F6",
      background: accent ? `${accent}09` : "transparent",
    }}
  >
    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 12 }}>{left}</div>
    <div style={{ fontWeight: 700, color: theme.text }}>{right}</div>
  </div>
);

const Pill: React.FC<{ color: string; text: string }> = ({ color, text }) => (
  <div
    style={{
      padding: "6px 10px",
      borderRadius: 999,
      background: `${color}22`,
      color,
      fontFamily: FONT_STACK,
      fontSize: 14,
      fontWeight: 700,
    }}
  >
    {text}
  </div>
);

// PUBLIC_INTERFACE
export const DashboardScreen: React.FC = () => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          padding: 20,
          borderBottom: "1px solid #E5E7EB",
          background: "#F9FAFB",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: FONT_STACK,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontWeight: 800 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: theme.primary,
              boxShadow: "0 0 0 6px rgba(37,99,235,0.2)",
            }}
          />
          Overview
        </div>
        <Pill color={theme.secondary} text="This Month" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, padding: 20, flex: 1 }}>
        <FadeInUp>
          <div
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              borderRadius: 16,
              boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
              padding: 20,
            }}
          >
            <div style={{ fontFamily: FONT_STACK, fontWeight: 800, fontSize: 18, marginBottom: 10 }}>
              Spending by Category
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "Food", color: theme.primary, value: 48 },
                { label: "Travel", color: theme.secondary, value: 25 },
                { label: "Bills", color: "#10B981", value: 15 },
                { label: "Other", color: "#6B7280", value: 12 },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center", flex: 1 }}>
                  <div
                    style={{
                      height: 140,
                      background: `${s.color}22`,
                      borderRadius: 12,
                      position: "relative",
                      overflow: "hidden",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: `${s.value}%`,
                        background: s.color,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontFamily: FONT_STACK,
                      fontWeight: 700,
                      color: theme.text,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>

        <FadeInUp from={8}>
          <div
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              borderRadius: 16,
              boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
              padding: 20,
            }}
          >
            <div style={{ fontFamily: FONT_STACK, fontWeight: 800, fontSize: 18, marginBottom: 10 }}>
              Monthly Trend
            </div>
            <div
              style={{
                height: 160,
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                background: `linear-gradient(180deg, ${theme.primary}12, #fff)`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 20,
                  right: 20,
                  bottom: 20,
                  height: 4,
                  background: "#E5E7EB",
                  borderRadius: 999,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 20,
                  right: 20,
                  bottom: 20,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                  borderRadius: 999,
                  width: "70%",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <Pill color={theme.primary} text="Budget" />
              <Pill color={theme.secondary} text="Actual" />
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

// PUBLIC_INTERFACE
export const TransactionsScreen: React.FC = () => {
  const items = [
    { name: "Groceries", date: "Aug 02", amount: "-$54.12", accent: theme.primary },
    { name: "Taxi", date: "Aug 04", amount: "-$12.80", accent: theme.secondary },
    { name: "Utilities", date: "Aug 05", amount: "-$75.00", accent: "#10B981" },
    { name: "Coffee", date: "Aug 07", amount: "-$3.90", accent: "#6B7280" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          padding: 20,
          borderBottom: "1px solid #E5E7EB",
          background: "#F9FAFB",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: FONT_STACK,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontWeight: 800 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: theme.primary,
              boxShadow: "0 0 0 6px rgba(37,99,235,0.2)",
            }}
          />
          Transactions
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <Pill color={theme.primary} text="All" />
          <Pill color={theme.secondary} text="Filters" />
        </div>
      </div>

      <div style={{ padding: 4, flex: 1 }}>
        {items.map((row, idx) => (
          <FadeInUp key={row.name} from={idx * 3}>
            <Row
              left={
                <>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: row.accent,
                    }}
                  />
                  <div style={{ fontFamily: FONT_STACK, fontWeight: 700 }}>{row.name}</div>
                  <div style={{ color: "#6B7280", fontFamily: FONT_STACK, fontSize: 14 }}>
                    {row.date}
                  </div>
                </>
              }
              right={<span style={{ color: "#111827" }}>{row.amount}</span>}
              accent={idx % 2 === 0 ? theme.primary : undefined}
            />
          </FadeInUp>
        ))}
      </div>
    </div>
  );
};

// PUBLIC_INTERFACE
export const BudgetsScreen: React.FC = () => {
  const budgets = [
    { label: "Food", used: 420, total: 600, color: theme.primary },
    { label: "Travel", used: 130, total: 250, color: theme.secondary },
    { label: "Bills", used: 310, total: 400, color: "#10B981" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          padding: 20,
          borderBottom: "1px solid #E5E7EB",
          background: "#F9FAFB",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: FONT_STACK,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontWeight: 800 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: theme.secondary,
              boxShadow: "0 0 0 6px rgba(245,158,11,0.2)",
            }}
          />
          Budgets
        </div>
        <Pill color="#10B981" text="On Track" />
      </div>

      <div style={{ padding: 20, display: "grid", gap: 16 }}>
        {budgets.map((b, idx) => {
          const pct = Math.min(100, Math.round((b.used / b.total) * 100));
          return (
            <FadeInUp key={b.label} from={idx * 4}>
              <div
                style={{
                  background: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: 14,
                  padding: 18,
                  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                    fontFamily: FONT_STACK,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: b.color,
                      }}
                    />
                    <div style={{ fontWeight: 800 }}>{b.label}</div>
                  </div>
                  <div style={{ color: "#374151", fontWeight: 700 }}>
                    ${b.used} / ${b.total}
                  </div>
                </div>
                <div
                  style={{
                    height: 10,
                    background: "#E5E7EB",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${pct}%`,
                      height: "100%",
                      background: b.color,
                    }}
                  />
                </div>
              </div>
            </FadeInUp>
          );
        })}
      </div>
    </div>
  );
};
