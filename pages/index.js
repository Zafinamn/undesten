import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

// ============================================================
//  Үндэстэн Зоог — QR Menu
//  pages/index.jsx  (Next.js Pages Router)
//
//  HOW TO ADD PRICES:
//    Find the item by name, change price: "—" to e.g. price: "25,000"
//
//  HOW TO ADD PHOTOS:
//    1. Put your .jpg/.png files in /public/images/
//    2. Change img: null  →  img: "/images/your-photo.jpg"
//
//  HOW TO ADD/REMOVE ITEMS:
//    Just add or remove an object inside the items: [] array
// ============================================================

const sections = [
  {
    num: "",
    mn: "1 ДҮГЭЭР ХООЛ",
    en: "Soups",
    items: [
      {
        name: "Үндэстэн нэрийн шөл",
        desc: "Нэрийн шөл, уламжлалт аргаар чанасан",
        price: "34,900",
        kcal: null,
        img: "/images/zx.jpg",
      },
      {
        name: "Тойгны шөл мини хуушуур",
        desc: "Тойгны шөл, мини хуушуurtай",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Борцтой гурилтай шөл",
        desc: "Борц, гурил, уламжлалт шөл",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Битүү шөл",
        desc: "Битүүлэг аргаар чанасан уламжлалт шөл",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Банштай цай",
        desc: "Сүүтэй цай, банштай",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Тасалсан гурилтай шөл",
        desc: "Тасалсан гурилтай, махтай шөл",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Хурган бантан",
        desc: "Хурганы мах, бантан",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Тагтуритан",
        desc: "Уламжлалт онцлог шөл",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Кимчижигэ",
        desc: "Кимчи суурьтай халуун шөл",
        price: "—",
        kcal: null,
        img: null,
      },
    ],
  },
  {
    num: "",
    mn: "2 ДУГААР ХООЛ",
    en: "Main dishes",
    items: [
      {
        name: "Үхрийн чанасан хавирга",
        desc: "Үхрийн хавирга, уламжлалт аргаар чанасан",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Үхрийн өвчүүний хирсэнтэй цуйван",
        desc: "Үхрийн өвчүү, хирсэн, цуйван",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Сыртэй хуушуур",
        desc: "Хуушуур, сыр",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Борцтой хонины мах будаатай хуурга",
        desc: "Борц, хонины мах, будаа хуурга",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Хуушуур сет",
        desc: "Хуушуур сет",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Бууз сет",
        desc: "Бууз сет",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Хонины шарсан мах",
        desc: "Хонины мах шарсан",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Хонины шарсан хавирга",
        desc: "Хонины хавирга шарсан",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Хавиргатай цуйван",
        desc: "Хавирга, цуйван",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Шарсан банш",
        desc: "Шарсан банш",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Сыртэй халуун ногоотой тахиа",
        desc: "Тахиа, сыр, халуун ногоо",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Жеьюг",
        desc: "Онцлог жорын тахиа",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Сыртэй тахиа",
        desc: "Тахиа, сыр",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Мантуутай гахай",
        desc: "Гахайн мах, мантуу",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Өндөгтэй хуурга",
        desc: "Өндөг, хуурга",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Терияки соустай тахиа",
        desc: "Тахиа, терияки соус",
        price: "—",
        kcal: null,
        img: null,
      },
      {
        name: "Шаржигнуур тахиа",
        desc: "Шаржигнасан тахиа",
        price: "—",
        kcal: null,
        img: null,
      },
    ],
  },
  {
    num: "",
    mn: "БАГЦИЙН ХООЛ СЭТ",
    en: "Set meals",
    items: [
      {
        name: "Махан цуглуулга",
        desc: "Олон төрлийн мах, 4–5 хүнд зориулсан багц",
        price: "—",
        kcal: null,
        img: null,
        serving: "4–5 хүн",
      },
      {
        name: "Хамаг монгол сэт",
        desc: "Монгол хоолны бүрэн цуглуулга, 4–5 хүнд зориулсан багц",
        price: "—",
        kcal: null,
        img: null,
        serving: "4–5 хүн",
      },
    ],
  },
];

// ── Card component ──────────────────────────────────────────
function MenuCard({ item }) {
  return (
    <div style={{
      margin: "0 1rem 1.5rem",
      border: "0.5px solid #3a2e24",
      borderRadius: 4,
      overflow: "hidden",
      background: "#221c17",
    }}>
      {/* Photo */}
      {item.img ? (
        <img
          src={item.img}
          alt={item.name}
          style={{ width: "100%", height: 304, objectFit: "cover", display: "block" }}
        />
      ) : (
        <div style={{
          width: "100%", height: 304, background: "#2a211b",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, color: "#5a4a3a", letterSpacing: 1,
        }}>
          ийшээ зураг шаана
        </div>
      )}

      {/* Body */}
      <div style={{ padding: "1rem 1.1rem 1.2rem" }}>
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".5rem" }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>🐑</span>
          <span style={{
            fontSize: 15, fontWeight: 700, color: "#e8c87a",
            letterSpacing: ".5px", textTransform: "uppercase",
          }}>
            {item.name}
          </span>
        </div>

        {/* Description */}
        <p style={{ fontSize: 13, color: "#b09880", lineHeight: 1.65, marginBottom: ".9rem" }}>
          {item.desc}
        </p>

        {/* Footer: price + kcal/serving */}
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          borderTop: "0.5px solid #3a2e24", paddingTop: ".75rem",
        }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#e8ddd0" }}>
            {item.price}
            <span style={{ fontSize: 12, fontWeight: 400, color: "#a08060", marginLeft: 2 }}>₮</span>
          </div>
          <div style={{ fontSize: 12, color: "#7a6a58" }}>
            {item.kcal ? `kcal: ${item.kcal}` : item.serving || ""}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section header ──────────────────────────────────────────
function SectionHeader({ num, mn, en }) {
  const hasNum = num && num.trim().length > 0;

  return (
    <div style={{ textAlign: "center", padding: "1.5rem 1rem .5rem" }}>
      <div style={{ display: "inline-flex", alignItems: "baseline", gap: hasNum ? ".75rem" : 0, justifyContent: "center" }}>
        {hasNum && (
          <span style={{ fontSize: 11, letterSpacing: 2, color: "#7a6a58", textTransform: "uppercase" }}>
            {num}
          </span>
        )}
        <span style={{ fontSize: 28, fontWeight: 700, color: "#e8c87a", letterSpacing: 1 }}>
          {mn}
        </span>
      </div>
      <p style={{ fontSize: 12, color: "#a08060", letterSpacing: 3, textTransform: "uppercase", margin: "0.25rem auto .75rem", maxWidth: 260 }}>
        {en}
      </p>
      <div style={{ height: .5, background: "#3a2e24", margin: "0 auto .25rem", width: 120 }} />
    </div>
  );
}

// ── Main page ───────────────────────────────────────────────
export default function Menu() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body {
          background: #1a1614;
          touch-action: pan-y pinch-zoom;
          -webkit-text-size-adjust: 100%;
          overflow-x: hidden;
        }
      `}</style>

      <div
        className={inter.variable}
        style={{
          background: "#1a1614",
          color: "#e8ddd0",
          fontFamily: "var(--font-inter), Inter, sans-serif",
          maxWidth: 520,
          margin: "0 auto",
          position: "relative",
        }}
      >

        {/* Mongolian symbol watermark */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 200,
          color: "rgba(232, 200, 122, 0.05)",
          zIndex: 0,
          pointerEvents: "none",
          fontFamily: "serif",
        }}>
          ᠠ
        </div>

        {/* ── Hero / Logo ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 1rem 1.5rem", position: "relative", zIndex: 1 }}>
          <img
            src="/logo_upscaled_sharpened_4x.png"
            alt="Үндэстэн Зоог"
            style={{ width: 450, height: 450, objectFit: "cover", background: "transparent", marginBottom: "1.5rem" }}
          />
          <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, color: "#e8c87a", textAlign: "center" }}>
            ҮНДЭСТЭН ЗООГ
          </h1>
          <p style={{ fontSize: 10, letterSpacing: 3, color: "#a08060", marginTop: 5, textTransform: "uppercase" }}>
            Уламжлалт Монгол хоол
          </p>
        </div>

        {/* ── Navigation Buttons ── */}
        <div id="nav-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem', position: 'relative', zIndex: 1 }}>
          <button onClick={() => document.getElementById('soups').scrollIntoView({behavior: 'instant'})} style={{ padding: '0.5rem 1rem', background: '#3a2e24', color: '#e8c87a', border: 'none', borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>1 ДҮГЭЭР ХООЛ</button>
          <button onClick={() => document.getElementById('main-dishes').scrollIntoView({behavior: 'instant'})} style={{ padding: '0.5rem 1rem', background: '#3a2e24', color: '#e8c87a', border: 'none', borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>2 ДУГААР ХООЛ</button>
          <button onClick={() => document.getElementById('set-meals').scrollIntoView({behavior: 'instant'})} style={{ padding: '0.5rem 1rem', background: '#3a2e24', color: '#e8c87a', border: 'none', borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>БАГЦИЙН ХООЛ СЭТ</button>
        </div>

        {/* ── Sections ── */}
        {sections.map((sec, i) => (
          <div id={sec.en.toLowerCase().replace(/\s+/g, '-')} key={i} style={{ marginBottom: i < sections.length - 1 ? "1rem" : 0, position: "relative", zIndex: 1 }}>
            <SectionHeader num={sec.num} mn={sec.mn} en={sec.en} />
            {sec.items.map((item, j) => (
              <MenuCard key={j} item={item} />
            ))}
          </div>
        ))}

        {/* ── Footer ── */}
        <div style={{
          textAlign: "center", padding: "1.5rem 1rem 3rem",
          borderTop: "0.5px solid #3a2e24", margin: "0 1rem",
          position: "relative", zIndex: 1,
        }}>
          <p style={{ fontSize: 11, color: "#7a6a58", letterSpacing: 1, lineHeight: 1.9, marginBottom: 6 }}>
            ТА ТАВТАЙ САЙХАН ХООЛЛООРОЙ
          </p>
          <p style={{ fontSize: 9, color: "#a08060", letterSpacing: 0.5, lineHeight: 1.6, textTransform: "uppercase", margin: 0 }}>
            Developed by<br />
            <span style={{ fontSize: 11, color: "#e8c87a", fontWeight: 900, letterSpacing: 1.2 }}>
              Goo Agency
            </span>
          </p>
        </div>

        {/* ── Scroll to Top Button ── */}
        <button onClick={() => document.getElementById('nav-buttons').scrollIntoView({behavior: 'instant'})} style={{
          position: 'fixed',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 40,
          height: 30,
          background: '#1a1614',
          color: '#e8ddd0',
          border: 'none',
          borderRadius: 0,
          fontSize: 18,
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          ↑
        </button>

      </div>
    </>
  );
}
