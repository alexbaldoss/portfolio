// src/pages/About.jsx
import { Link } from 'react-router-dom'

const C = '#C7D1C2'
const FONT = "'Univers Next Pro', 'Univers LT Std', 'Helvetica Neue', Helvetica, Arial, sans-serif"

const pw = (v) => `${(v / 1920) * 100}vw`
const ph = (v) => `${(v / 2247) * 100}vw`

function Node() {
  return (
    <div style={{
      width: pw(10), height: pw(10),
      minWidth: 6, minHeight: 6,
      borderRadius: '50%',
      backgroundColor: C,
      flexShrink: 0,
    }} />
  )
}

export default function About() {
  return (
    <div style={{
      backgroundColor: '#F5F4F1',
      width: '100vw',
      height: ph(2247),
      position: 'relative',
      fontFamily: FONT,
      overflowX: 'hidden',
      overflowY: 'auto',
    }}>

      {/* ── HEADER LINE WITH "about" ──────────────────────────────── */}
      <div style={{
        position: 'fixed',
        top: `${(36 / 1080) * 100}vh`,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: pw(96),
        paddingRight: pw(96),
        zIndex: 100,
        backgroundColor: '#F5F4F1',
        paddingTop: '8px',
        paddingBottom: '8px',
      }}>
        <div style={{ flex: 3, height: '1px', backgroundColor: C, transformOrigin: 'right center', animation: 'slideInLeft 1.2s ease forwards' }} />
        <Node />
        <span style={{ fontSize: pw(18), fontWeight: 300, color: '#000', fontFamily: FONT, padding: `0 ${pw(12)}` }}>
          about
        </span>
        <Node />
        <div style={{ flex: 3, height: '1px', backgroundColor: C, transformOrigin: 'left center', animation: 'slideInRight 1.2s ease forwards' }} />
      </div>

      {/* ── HORIZONTAL LINE 1 — Y:231 ─────────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(96),
        top: ph(231),
        width: pw(1728),
        height: '1px',
        backgroundColor: C,
      }} />

      {/* ── TOP LEFT — Name + Skills + Quote ──────────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(96),
        top: ph(232),
        width: `calc(${pw(961)} - ${pw(96)})`,
        height: ph(799),
        padding: pw(32),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: pw(18), fontWeight: 400, color: '#000', fontFamily: FONT }}>
            Alessandro Boscaino
          </span>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: pw(14), fontWeight: 300, color: '#555', fontFamily: FONT }}>Graphic Design</div>
            <div style={{ fontSize: pw(14), fontWeight: 300, color: '#555', fontFamily: FONT }}>Web Design</div>
            <div style={{ fontSize: pw(14), fontWeight: 300, color: '#555', fontFamily: FONT }}>Visual & Brand Systems</div>
          </div>
        </div>
        <p style={{ fontSize: pw(18), fontWeight: 300, fontStyle: 'italic', color: '#555', fontFamily: FONT, margin: 0 }}>
          Design as structure, not noise.
        </p>
      </div>
{/* ── TOP RIGHT — Photo ─────────────────────────────────────── */}
<img
  src="/src/assets/alessandro.jpeg"
  style={{
    position: 'absolute',
    left: pw(961),
    top: ph(232),
    width: pw(863),
    height: ph(799),
    objectFit: 'cover',
  }}
/>

      {/* ── HORIZONTAL LINE 2 — Y:1031 ────────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(96),
        top: ph(1031),
        width: pw(1728),
        height: '1px',
        backgroundColor: C,
      }} />

      {/* ── VERTICAL LINE — X:960, Y:1031, H:1216 ────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(960),
        top: ph(1031),
        width: '1px',
        height: ph(1216),
        backgroundColor: C,
      }} />

      {/* ── BOTTOM LEFT — Video placeholder ───────────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(96),
        top: ph(1032),
        width: pw(864),
        height: ph(798),
        backgroundColor: '#DDDDD8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: 0,
          height: 0,
          borderTop: `${pw(30)} solid transparent`,
          borderBottom: `${pw(30)} solid transparent`,
          borderLeft: `${pw(50)} solid rgba(0,0,0,0.3)`,
        }} />
      </div>

      {/* ── BOTTOM RIGHT — Bio ────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(1117),
        top: ph(1067),
        width: pw(438),
      }}>

        {/* ALESSANDRO BOSCAINO */}
        <div style={{
          width: pw(438),
          fontSize: pw(56),
          fontWeight: 500,
          lineHeight: 1.2,
          color: '#000',
          fontFamily: FONT,
          textTransform: 'uppercase',
          marginBottom: pw(24),
        }}>
          ALESSANDRO<br />BOSCAINO
        </div>

        {/* PARAGRAPH 1 */}
        <div style={{
          width: pw(414),
          fontSize: pw(18),
          fontWeight: 400,
          lineHeight: pw(23),
          color: '#333',
          fontFamily: FONT,
          marginBottom: pw(48),
        }}>
          Visually and digitally focused on clarity, restraint, and systems-driven design. My work explores the intersection of graphic design, web design, and brand identity, with an emphasis on minimal aesthetics and thoughtful composition.
        </div>

        {/* DESIGN APPROACH */}
        <div style={{
          width: pw(290),
          fontSize: pw(36),
          fontWeight: 400,
          color: '#000',
          fontFamily: FONT,
          marginBottom: pw(24),
        }}>
          Design Approach
        </div>

        {/* PARAGRAPH 2 */}
        <div style={{
          width: pw(414),
          fontSize: pw(18),
          fontWeight: 400,
          lineHeight: pw(23),
          color: '#333',
          fontFamily: FONT,
        }}>
          My practice is rooted in observation and iteration. I value systems over decoration, clarity over complexity, and design that communicates quietly but confidently. My work often balances expressive restraint with functional precision.
        </div>

      </div>

  {/* ── BOTTOM NAV ────────────────────────────────────────────── */}
<div style={{ position: 'absolute', left: pw(96), top: ph(2180) }}>
  <Link to="/" style={{
    position: 'absolute', left: 0,
    width: pw(73), height: ph(28),
    fontSize: pw(18), lineHeight: ph(20),
    fontWeight: 300, color: '#000',
    fontFamily: FONT, textDecoration: 'none', opacity: 0.5,
  }}>HOME</Link>

  <Link to="/work" style={{
    position: 'absolute', left: pw(146),
    width: pw(122), height: ph(28),
    fontSize: pw(18), lineHeight: ph(20),
    fontWeight: 300, color: '#000',
    fontFamily: FONT, textDecoration: 'none', opacity: 0.5,
  }}>WORK</Link>

  <Link to="/about" style={{
    position: 'absolute', left: pw(292),
    width: pw(122), height: ph(28),
    fontSize: pw(18), lineHeight: ph(20),
    fontWeight: 600, color: '#000',
    fontFamily: FONT, textDecoration: 'none', opacity: 1,
  }}>ABOUT</Link>
</div>

    </div>
  )
}