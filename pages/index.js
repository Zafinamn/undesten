import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

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
        img: "/images/logo.png",
      },
      {
        name: "Борцтой гурилтай шөл",
        desc: "Борц, гурил, уламжлалт шөл",
        price: "—",
        kcal: null,
        img: "/images/test.png",
      },
      { name: "Битүү шөл", desc: "Битүүлэг аргаар чанасан уламжлалт шөл", price: "—", kcal: null, img: null },
      { name: "Банштай цай", desc: "Сүүтэй цай, банштай", price: "—", kcal: null, img: null },
      { name: "Тасалсан гурилтай шөл", desc: "Тасалсан гурилтай, махтай шөл", price: "—", kcal: null, img: null },
      { name: "Хурган бантан", desc: "Хурганы мах, бантан", price: "—", kcal: null, img: null },
      { name: "Тагтуритан", desc: "Уламжлалт онцлог шөл", price: "—", kcal: null, img: null },
      { name: "Кимчижигэ", desc: "Кимчи суурьтай халуун шөл", price: "—", kcal: null, img: null },
    ],
  },
  {
    num: "",
    mn: "2 ДУГААР ХООЛ",
    en: "Main dishes",
    items: [
      { name: "Үхрийн чанасан хавирга", desc: "Үхрийн хавирга, уламжлалт аргаар чанасан", price: "—", kcal: null, img: null },
      { name: "Үхрийн өвчүүний хирсэнтэй цуйван", desc: "Үхрийн өвчүү, хирсэн, цуйван", price: "—", kcal: null, img: null },
      { name: "Сыртэй хуушуур", desc: "Хуушуур, сыр", price: "—", kcal: null, img: null },
      { name: "Борцтой хонины мах будаатай хуурга", desc: "Борц, хонины мах, будаа хуурга", price: "—", kcal: null, img: null },
      { name: "Хуушуур сет", desc: "Хуушуур сет", price: "—", kcal: null, img: null },
      { name: "Бууз сет", desc: "Бууз сет", price: "—", kcal: null, img: null },
      { name: "Хонины шарсан мах", desc: "Хонины мах шарсан", price: "—", kcal: null, img: null },
      { name: "Хонины шарсан хавирга", desc: "Хонины хавирга шарсан", price: "—", kcal: null, img: null },
      { name: "Хавиргатай цуйван", desc: "Хавирга, цуйван", price: "—", kcal: null, img: null },
      { name: "Шарсан банш", desc: "Шарсан банш", price: "—", kcal: null, img: null },
      { name: "Сыртэй халуун ногоотой тахиа", desc: "Тахиа, сыр, халуун ногоо", price: "—", kcal: null, img: null },
      { name: "Жеьюг", desc: "Онцлог жорын тахиа", price: "—", kcal: null, img: null },
      { name: "Сыртэй тахиа", desc: "Тахиа, сыр", price: "—", kcal: null, img: null },
      { name: "Мантуутай гахай", desc: "Гахайн мах, мантуу", price: "—", kcal: null, img: null },
      { name: "Өндөгтэй хуурга", desc: "Өндөг, хуурга", price: "—", kcal: null, img: null },
      { name: "Терияки соустай тахиа", desc: "Тахиа, терияки соус", price: "—", kcal: null, img: null },
      { name: "Шаржигнуур тахиа", desc: "Шаржигнасан тахиа", price: "—", kcal: null, img: null },
    ],
  },
  {
    num: "",
    mn: "БАГЦИЙН ХООЛ СЭТ",
    en: "Set meals",
    items: [
      { name: "Махан цуглуулга", desc: "Олон төрлийн мах, 4–5 хүнд зориулсан багц", price: "—", kcal: null, img: null, serving: "4–5 хүн" },
      { name: "Хамаг монгол сэт", desc: "Монгол хоолны бүрэн цуглуулга, 4–5 хүнд зориулсан багц", price: "—", kcal: null, img: null, serving: "4–5 хүн" },
    ],
  },
];

function MenuCard({ item }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        margin: "0 1rem 1.8rem",
        border: "1px solid" + (isHovered ? " #e8c87a" : " #4a3a2a"),
        borderRadius: 12,
        overflow: "hidden",
        background: "linear-gradient(135deg, #2a211b 0%, #1f1815 100%)",
        boxShadow: isHovered ? "0 16px 40px rgba(232, 200, 122, 0.2)" : "0 8px 20px rgba(0, 0, 0, 0.5)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        position: "relative",
      }}>
      {item.img ? (
        <div style={{ position: "relative", overflow: "hidden", height: 280 }}>
          {!imageLoaded && (
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
              background: "linear-gradient(135deg, #3a2e24 0%, #2a1f19 100%)",
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1
            }}>
              <div style={{ width: 40, height: 40, border: "3px solid #e8c87a", borderTop: "3px solid transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
            </div>
          )}
          <Image
            src={item.img} alt={item.name} fill
            style={{ objectFit: "cover", transition: "transform 0.4s ease", transform: isHovered ? "scale(1.08)" : "scale(1)", opacity: imageLoaded ? 1 : 0 }}
            onLoad={() => setImageLoaded(true)}
          />
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            background: isHovered ? "linear-gradient(180deg, rgba(232,200,122,0.1) 0%, rgba(0,0,0,0.5) 100%)" : "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)",
            transition: "background 0.4s ease",
          }} />
        </div>
      ) : (
        <div style={{
          width: "100%", height: 280, background: "linear-gradient(135deg, #3a2e24 0%, #2a1f19 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, color: "#8a7a69", letterSpacing: 1, fontWeight: 500,
        }}>
          ийшээ зураг шаана
        </div>
      )}

      <div style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".6rem", marginBottom: ".9rem" }}>
          <span style={{ fontSize: 20, flexShrink: 0, transition: "transform 0.3s ease", transform: isHovered ? "scale(1.2) rotate(5deg)" : "scale(1)" }}>🐑</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#f5d88f", letterSpacing: ".6px", textTransform: "uppercase", lineHeight: 1.3 }}>
            {item.name}
          </span>
        </div>
        <p style={{ fontSize: 13.5, color: "#d4b896", lineHeight: 1.7, marginBottom: "1.2rem", fontWeight: 500 }}>
          {item.desc}
        </p>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderTop: "1px solid rgba(232, 200, 122, 0.2)", paddingTop: "1rem", marginTop: "1rem" }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#f5d88f" }}>
            {item.price}
            <span style={{ fontSize: 14, fontWeight: 600, color: "#d9a567", marginLeft: 5 }}>₮</span>
          </div>
          <div style={{ fontSize: 12, color: "#a89470", fontWeight: 500, letterSpacing: "0.5px" }}>
            {item.kcal ? `kcal: ${item.kcal}` : item.serving || ""}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ num, mn, en }) {
  const hasNum = num && num.trim().length > 0;
  return (
    <div style={{ textAlign: "center", padding: "1.5rem 1rem 1rem", maxWidth: 560, margin: '0 auto 1rem' }}>
      <div style={{ display: "inline-flex", alignItems: "baseline", gap: hasNum ? ".75rem" : 0, justifyContent: "center" }}>
        {hasNum && (
          <span style={{ fontSize: 11, letterSpacing: 2.5, color: "#a89470", textTransform: "uppercase", fontWeight: 700 }}>{num}</span>
        )}
        <span style={{ fontSize: 36, fontWeight: 700, color: "#f5d88f", letterSpacing: 2, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>{mn}</span>
      </div>
      <p style={{ fontSize: 12.5, color: "#c4a876", letterSpacing: 3, textTransform: "uppercase", margin: "0.7rem auto 1.3rem", maxWidth: 300, fontWeight: 600 }}>{en}</p>
      <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #e8c87a 20%, #e8c87a 80%, transparent)", margin: "0 auto 0.5rem", width: 140, borderRadius: 1 }} />
      <div style={{ height: 0.5, background: "linear-gradient(90deg, transparent, rgba(232, 200, 122, 0.3), transparent)", margin: "0.5rem auto 0", width: 180 }} />
    </div>
  );
}

export default function Menu() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBtnStyle = {
    padding: '0.85rem 1.2rem',
    background: 'linear-gradient(135deg, #4a3a2a 0%, #3a2e24 100%)',
    color: '#f5d88f',
    border: '1.5px solid #6a5a42',
    borderRadius: 8,
    fontSize: 13.5,
    fontWeight: 700,
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: 0.7,
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    transition: 'all 0.3s ease',
  };

  const navBtnHoverIn = (e) => {
    e.currentTarget.style.background = 'linear-gradient(135deg, #5a4a3a 0%, #4a3a2a 100%)';
    e.currentTarget.style.boxShadow = '0 6px 20px rgba(245, 216, 143, 0.2)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };
  const navBtnHoverOut = (e) => {
    e.currentTarget.style.background = 'linear-gradient(135deg, #4a3a2a 0%, #3a2e24 100%)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body {
          background: #1a1614;
          touch-action: pan-y pinch-zoom;
          -webkit-text-size-adjust: 100%;
          overflow-x: hidden;
          width: 100%;
          min-height: 100vh;
        }
        button { transition: all 0.3s ease; }
        button:hover { transform: translateY(-2px); }
        @media (max-width: 600px) {
          #nav-buttons { flex-wrap: wrap; gap: 0.5rem; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #e8c87a, #d4a574);
          transform-origin: left;
          z-index: 1000;
        }
      `}</style>

      {/* Fixed Header */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10000,
        background: '#1a1614',
        borderBottom: '1px solid rgba(245, 216, 143, 0.2)',
        padding: '0.5rem', textAlign: 'center',
      }}>
        <h1 className={inter.className} style={{ fontSize: 28, fontWeight: 900, color: '#f5d88f', margin: 0, textShadow: '0 2px 10px rgba(245, 216, 143, 0.5)', letterSpacing: 2, textTransform: 'uppercase' }}>
          Үндэстэн Зоог
        </h1>
        <p className={inter.className} style={{ fontSize: 12, color: '#c4a876', margin: '0.1rem 0 0 0', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>
          Mongolian Restaurant
        </p>
      </div>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />

      {/* Hero / Nav */}
      <div id="hero" style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
        background: '#1a1614',
        overflow: 'hidden',
        padding: '5.5rem 1rem 1.5rem',
      }}>
        {/* Navigation Buttons */}
        <div id="nav-buttons" style={{
          display: 'flex', justifyContent: 'center', gap: '0.8rem',
          padding: '0.6rem 1rem', position: 'relative', zIndex: 1,
          flexWrap: 'wrap',
          background: '#1a1614',
          border: '1px solid rgba(245, 216, 143, 0.2)',
          borderRadius: 18,
          boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
        }}>
          <button onClick={() => document.getElementById('soups').scrollIntoView({ behavior: 'smooth' })} onMouseEnter={navBtnHoverIn} onMouseLeave={navBtnHoverOut} style={navBtnStyle}>1 ДҮГЭЭР ХООЛ</button>
          <button onClick={() => document.getElementById('main-dishes').scrollIntoView({ behavior: 'smooth' })} onMouseEnter={navBtnHoverIn} onMouseLeave={navBtnHoverOut} style={navBtnStyle}>2 ДУГААР ХООЛ</button>
          <button onClick={() => document.getElementById('set-meals').scrollIntoView({ behavior: 'smooth' })} onMouseEnter={navBtnHoverIn} onMouseLeave={navBtnHoverOut} style={navBtnStyle}>БАГЦИЙН ХООЛ СЭТ</button>
        </div>
      </div>

      {/* Menu Sections */}
      {sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          id={section.en.toLowerCase().replace(' ', '-')}
          style={{
            padding: '2rem 1rem',
            background: '#1a1614',
            border: '1px solid rgba(245, 216, 143, 0.2)',
            borderRadius: 18,
            boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
            margin: '1rem auto',
            maxWidth: 1200,
          }}>
          <SectionHeader num={section.num} mn={section.mn} en={section.en} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {section.items.map((item, itemIndex) => (
              <MenuCard key={itemIndex} item={item} />
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        borderTop: "1.5px solid rgba(232, 200, 122, 0.25)",
        margin: "1rem 0 0 0",
        background: '#1a1614',
        padding: "1.5rem 1rem",
      }}>
        <p style={{ fontSize: 13, color: "#d4b896", letterSpacing: 1.5, lineHeight: 2.2, marginBottom: 10, fontWeight: 600, textTransform: "uppercase" }}>
          ТА ТАВТАЙ САЙХАН ХООЛЛООРОЙ
        </p>
        <p style={{ fontSize: 10, color: "#a8936a", letterSpacing: 0.8, lineHeight: 1.8, textTransform: "uppercase", margin: 0 }}>
          Developed by<br />
          <span style={{ fontSize: 12.5, color: "#f5d88f", fontWeight: 900, letterSpacing: 1.5 }}>Goo Agency</span>
        </p>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(232, 200, 122, 0.5)'; e.currentTarget.style.transform = 'scale(1.15)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(232, 200, 122, 0.35)'; e.currentTarget.style.transform = 'scale(1)'; }}
        style={{
          position: 'fixed', right: '12px', bottom: '30px',
          width: 54, height: 54,
          background: 'linear-gradient(135deg, #f5d88f, #e8b560)',
          color: '#1a1614', border: '2px solid #d4a567', borderRadius: '50%',
          fontSize: 26, fontWeight: 'bold', cursor: 'pointer', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(232, 200, 122, 0.35)',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}>
        ↑
      </button>
    </>
  );
}
