// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import RotatingLogo from '../components/RotatingLogo'

const C = '#C7D1C2'
const FONT = "'Univers Next Pro', 'Univers LT Std', 'Helvetica Neue', Helvetica, Arial, sans-serif"

const pw = (v) => `${(v / 1920) * 100}vw`
const ph = (v) => `${(v / 1080) * 100}vh`

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

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#F5F4F1',
      width: '100vw',
      height: '100vh',
      position: 'relative',
      fontFamily: FONT,
      overflow: 'hidden',
    }}>

      {/* ── HEADER LINE WITH LABELS ───────────────────────────────── */}
      <div style={{
        position: 'absolute',
        top: ph(36),
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: pw(96),
        paddingRight: pw(96),
      }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: C, transformOrigin: 'right center', animation: 'slideInLeft 1.2s ease forwards' }} />
        <Node />
        <span style={{ fontSize: pw(18), fontWeight: 300, color: '#000', fontFamily: FONT, padding: `0 ${pw(12)}` }}>
          alessandro boscaino
        </span>
        <Node />
        <div style={{ flex: 3, height: '1px', backgroundColor: C, transformOrigin: 'right center', animation: 'slideInLeft 1.4s ease forwards' }} />
        <Node />
        <span style={{ fontSize: pw(18), fontWeight: 300, color: '#000', fontFamily: FONT, padding: `0 ${pw(12)}` }}>
          fashion, art, design
        </span>
        <Node />
        <div style={{ flex: 3, height: '1px', backgroundColor: C, transformOrigin: 'left center', animation: 'slideInRight 1.4s ease forwards' }} />
        <Node />
        <span style={{ fontSize: pw(18), fontWeight: 300, color: '#000', fontFamily: FONT, padding: `0 ${pw(12)}` }}>
          vancouver, bc
        </span>
        <Node />
        <div style={{ flex: 1, height: '1px', backgroundColor: C, transformOrigin: 'left center', animation: 'slideInRight 1.2s ease forwards' }} />
      </div>

      {/* ── RIGHT VERTICAL LINE ───────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(1133),
        top: ph(147),
        width: '1px',
        height: ph(522),
        backgroundColor: C,
      }} />

      {/* ELLIPSE top — X:1128, Y:146 */}
      <div style={{
        position: 'absolute',
        left: pw(1128),
        top: ph(146),
        width: pw(10),
        height: pw(10),
        borderRadius: '50%',
        backgroundColor: C,
      }} />

      {/* "creative" — X:1148, Y:139 */}
      <div style={{
        position: 'absolute',
        left: pw(1148),
        top: ph(139),
        width: pw(84),
        height: ph(17),
        fontSize: pw(18),
        fontWeight: 300,
        fontFamily: FONT,
        color: '#000',
        whiteSpace: 'nowrap',
      }}>creative</div>

      {/* ELLIPSE bottom — X:1128, Y:659 */}
      <div style={{
        position: 'absolute',
        left: pw(1128),
        top: ph(659),
        width: pw(10),
        height: pw(10),
        borderRadius: '50%',
        backgroundColor: C,
      }} />

      {/* "art" — X:1148, Y:653 */}
      <div style={{
        position: 'absolute',
        left: pw(1148),
        top: ph(653),
        width: pw(84),
        height: ph(17),
        fontSize: pw(18),
        fontWeight: 300,
        fontFamily: FONT,
        color: '#000',
        whiteSpace: 'nowrap',
      }}>art</div>

      {/* ── GRADIENT BLOB ─────────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(480),
        top: ph(180),
        width: pw(580),
        height: ph(400),
        background: 'radial-gradient(ellipse at center, rgba(199,209,194,0.5) 0%, rgba(199,209,194,0.18) 50%, transparent 72%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* ── HERO LINES ────────────────────────────────────────────── */}

      {/* GRAPHIC DESIGNER */}
      <div style={{
        position: 'absolute',
        left: pw(96), top: ph(133),
        width: pw(998), height: ph(96),
        fontSize: pw(100), fontWeight: 400, lineHeight: 1,
        textTransform: 'uppercase', textAlign: 'right',
        color: '#000', fontFamily: FONT, zIndex: 1,
        whiteSpace: 'nowrap', overflow: 'visible',
      }}>GRAPHIC DESIGNER</div>

      {/* UI/UX DESIGNER */}
      <div style={{
        position: 'absolute',
        left: pw(249), top: ph(249),
        width: pw(845), height: ph(92),
        fontSize: pw(100), fontWeight: 400, lineHeight: 1,
        textTransform: 'uppercase', textAlign: 'right',
        color: '#000', fontFamily: FONT, zIndex: 1,
        whiteSpace: 'nowrap', overflow: 'visible',
      }}>UI/UX DESIGNER</div>

      {/* A NATIVE OF */}
      <div style={{
        position: 'absolute',
        left: pw(395), top: ph(361),
        width: pw(845), height: ph(91),
        fontSize: pw(100), fontWeight: 400, lineHeight: 1,
        textTransform: 'uppercase', textAlign: 'right',
        color: '#000', fontFamily: FONT, zIndex: 1,
        whiteSpace: 'nowrap', overflow: 'visible',
      }}>A NATIVE OF</div>

      {/* THE CAPITAL OF FASHION */}
      <div style={{
        position: 'absolute',
        left: pw(242), top: ph(472),
        width: pw(1290), height: ph(92),
        fontSize: pw(100), fontWeight: 400, lineHeight: 1,
        textTransform: 'uppercase', textAlign: 'right',
        color: '#000', fontFamily: FONT, zIndex: 1,
        whiteSpace: 'nowrap', overflow: 'visible',
      }}>THE CAPITAL OF FASHION</div>

      {/* MILANO */}
      <div style={{
        position: 'absolute',
        left: pw(242), top: ph(584),
        width: pw(852), height: ph(92),
        fontSize: pw(100), fontWeight: 400, lineHeight: 1,
        textTransform: 'uppercase', textAlign: 'right',
        color: '#000', fontFamily: FONT, zIndex: 1,
        whiteSpace: 'nowrap', overflow: 'visible',
      }}>MILANO</div>

      {/* ── PARAGRAPH ACCENT LINE ─────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(680), top: ph(764),
        width: '1px', height: ph(271),
        backgroundColor: C, zIndex: 1,
      }} />
      <div style={{ position: 'absolute', left: pw(675), top: ph(759) }}>
        <Node />
      </div>

      {/* ── PARAGRAPH ─────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: pw(700), top: ph(764),
        width: pw(414), height: ph(271),
        zIndex: 1,
      }}>
        <p style={{
          fontSize: pw(18), lineHeight: ph(23),
          fontWeight: 300, color: '#000',
          fontFamily: FONT, textAlign: 'right', margin: 0,
        }}>
          Art is a form of self-expression, art is where you walk, art is what eat, what you are eyes want to perceive es art.
          <br /><br />
          Creativity is intelligence having fun, it is taking a stroll with yourself, admire and appreciate the aesthetic of a certain building and get inspired for your works.
          <br /><br />
          This is what I aim to do with design, having fun while getting inspired everyday of my life. Enjoy what you do and you won't work one day.
        </p>
      </div>

      {/* ── QUOTE ─────────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        right: '5vw', top: ph(597),
        width: '14vw',
      }}>
        <p style={{
          fontSize: pw(18), lineHeight: ph(23),
          fontWeight: 300, color: '#000',
          fontFamily: FONT, textAlign: 'right', margin: 0,
        }}>Even abstract shapes must have a likeness.</p>
      </div>

      {/* ── LOGO ──────────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        right: '5vw', top: ph(645),
        width: '22vw', height: '22vw',
      }}>
        <RotatingLogo size="22vw" />
      </div>

      {/* ── BOTTOM NAV ────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', left: pw(96), top: ph(1019) }}>
        <Link to="/" style={{
          position: 'absolute', left: 0,
          width: pw(73), height: ph(28),
          fontSize: pw(18), lineHeight: ph(20),
          fontWeight: 600, color: '#000',
          fontFamily: FONT, textDecoration: 'none', opacity: 1,
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
          fontWeight: 300, color: '#000',
          fontFamily: FONT, textDecoration: 'none', opacity: 0.5,
        }}>ABOUT</Link>
      </div>

    </div>
  )
}