// src/pages/ThreadLoop.jsx
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import RotatingLogo from '../components/RotatingLogo'

const C = '#C7D1C2'
const FONT = "'Univers Next Pro', 'Univers LT Std', 'Helvetica Neue', Helvetica, Arial, sans-serif"

const pw = (v) => `${(v / 1920) * 100}vw`

export default function ThreadLoop() {
  const ballRef = useRef(null)
  const [ballVisible, setBallVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBallVisible(true) },
      { threshold: 0.3 }
    )
    if (ballRef.current) observer.observe(ballRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{
      backgroundColor: '#F5F4F1',
      width: '100vw',
      position: 'relative',
      fontFamily: FONT,
      overflowX: 'hidden',
    }}>

      {/* ── HEADER LINE "ThreadLoop" ──────────────────────────────── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: pw(96),
        paddingRight: pw(96),
        paddingTop: pw(24),
        paddingBottom: pw(24),
      }}>
        <div style={{ flex: 3, height: '1px', backgroundColor: C, transformOrigin: 'right center', animation: 'slideInLeft 1.2s ease forwards' }} />
        <div style={{ width: pw(10), height: pw(10), borderRadius: '50%', backgroundColor: C, flexShrink: 0 }} />
        <span style={{ fontSize: pw(18), fontWeight: 300, color: '#000', fontFamily: FONT, padding: `0 ${pw(12)}` }}>
          ThreadLoop
        </span>
        <div style={{ width: pw(10), height: pw(10), borderRadius: '50%', backgroundColor: C, flexShrink: 0 }} />
        <div style={{ flex: 3, height: '1px', backgroundColor: C, transformOrigin: 'left center', animation: 'slideInRight 1.2s ease forwards' }} />
      </div>

      {/* ── IMAGE GRID ────────────────────────────────────────────── */}
      <div style={{
        paddingLeft: pw(96),
        paddingRight: pw(96),
        position: 'relative',
      }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0, bottom: 0,
          width: '1px',
          backgroundColor: C,
          zIndex: 1,
        }} />

        {/* Horizontal line */}
        <div style={{
          position: 'absolute',
          left: 0, right: 0,
          top: '50%',
          height: '1px',
          backgroundColor: C,
          zIndex: 1,
        }} />

        {/* 2x2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: pw(34),
          padding: pw(17),
        }}>
          <div style={{ height: pw(392), backgroundColor: '#D9D9D9' }} />
          <div style={{ height: pw(392), backgroundColor: '#D9D9D9' }} />
          <div style={{ height: pw(392), backgroundColor: '#D9D9D9' }} />
          <div style={{ height: pw(392), backgroundColor: '#D9D9D9' }} />
        </div>

        {/* Dot top */}
        <div style={{ position: 'absolute', left: 'calc(50% - 5px)', top: '-5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: C, zIndex: 4 }} />
        {/* Dot middle */}
        <div style={{ position: 'absolute', left: 'calc(50% - 5px)', top: 'calc(50% - 5px)', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: C, zIndex: 4 }} />
        {/* Dot bottom */}
        <div style={{ position: 'absolute', left: 'calc(50% - 5px)', bottom: '-5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: C, zIndex: 4 }} />
      </div>

      {/* ── CASE STUDY LINE ───────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: pw(96),
        paddingRight: pw(96),
        marginTop: pw(80),
        marginBottom: pw(80),
      }}>
        <div style={{ width: pw(10), height: pw(10), borderRadius: '50%', backgroundColor: C, flexShrink: 0 }} />
        <div style={{ flex: 1, height: '1px', backgroundColor: C }} />
        <div style={{ width: pw(10), height: pw(10), borderRadius: '50%', backgroundColor: C, flexShrink: 0 }} />
        <span style={{ fontSize: pw(18), fontWeight: 300, color: '#000', fontFamily: FONT, padding: `0 ${pw(12)}` }}>
          Case study
        </span>
        <div style={{ width: pw(10), height: pw(10), borderRadius: '50%', backgroundColor: C, flexShrink: 0 }} />
        <div style={{ flex: 1, height: '1px', backgroundColor: C }} />
        <div style={{ width: pw(10), height: pw(10), borderRadius: '50%', backgroundColor: C, flexShrink: 0 }} />
      </div>

      {/* ── CASE STUDY SECTIONS ───────────────────────────────────── */}
      <div style={{ paddingLeft: pw(387), paddingRight: pw(200) }}>

        {/* 1. CONTEXT */}
        <div style={{ marginBottom: pw(120) }}>
          <div style={{ fontSize: pw(42), fontWeight: 500, color: '#000', fontFamily: FONT, marginBottom: pw(40) }}>1. CONTEXT</div>
          <div style={{ width: pw(900), fontSize: pw(18), fontWeight: 400, lineHeight: '1.6', color: '#333', fontFamily: FONT }}>
            Online resale platforms have optimized for efficiency — high listing volume, rapid browsing, and transaction speed. However, clothing is not a neutral object. It exists in relation to the body. Sizing varies across brands, eras, and cuts, meaning a "medium" in one label may differ drastically from another. Without visible proportion or silhouette, buyers are forced to imagine how a garment might sit on them. In second-hand commerce, imagination introduces uncertainty, and uncertainty reduces confidence. ThreadLoop isolates this hesitation as a structural design problem.
          </div>
        </div>

        {/* 2. DESIGN POSITIONING */}
        <div style={{ marginBottom: pw(120) }}>
          <div style={{ fontSize: pw(42), fontWeight: 500, color: '#000', fontFamily: FONT, marginBottom: pw(40) }}>2. DESIGN POSITIONING</div>
          <div style={{ width: pw(900), fontSize: pw(18), fontWeight: 400, lineHeight: '1.6', color: '#333', fontFamily: FONT }}>
            ThreadLoop does not attempt to dismantle familiar marketplace systems. The grid remains. Filtering remains. Navigation remains intuitive. Preserving this architecture reduces cognitive load and aligns with user expectations. The intervention instead lies in content standards. Every listing must include worn imagery. Garments must be styled and presented in context. Fit must be observable rather than speculative. This transforms browsing behavior without disrupting usability.
          </div>
        </div>

        {/* 3. FIT TRANSPARENCY */}
        <div style={{ marginBottom: pw(120) }}>
          <div style={{ fontSize: pw(42), fontWeight: 500, color: '#000', fontFamily: FONT, marginBottom: pw(40) }}>3. FIT TRANSPARENCY</div>
          <div style={{ width: pw(900), fontSize: pw(18), fontWeight: 400, lineHeight: '1.6', color: '#333', fontFamily: FONT }}>
            On ThreadLoop, fit is not treated as secondary metadata. Primary imagery centers how the garment behaves on the body — how it drapes, where it falls, and how it proportions. Measurements are still present, but they are contextualized rather than abstracted. The goal is not to eliminate uncertainty entirely, but to reduce speculative interpretation. By making embodiment a requirement rather than an option, ThreadLoop increases clarity without increasing interface complexity.
          </div>
        </div>

        {/* 4. COMMUNITY */}
        <div style={{ marginBottom: pw(120) }}>
          <div style={{ fontSize: pw(42), fontWeight: 500, color: '#000', fontFamily: FONT, marginBottom: pw(40) }}>4. COMMUNITY</div>
          <div style={{ width: pw(900), fontSize: pw(18), fontWeight: 400, lineHeight: '1.6', color: '#333', fontFamily: FONT }}>
            ThreadLoop integrates public product-level discussion beneath each listing. Rather than isolating fit-related questions within private messages, commentary remains visible to all users. This creates shared clarity and distributed knowledge. Community functions as reinforcement rather than decoration; each visible exchange strengthens collective understanding of how a garment behaves beyond its original description. Trust in resale environments is social as much as visual, and ThreadLoop integrates that reality into its structure.
          </div>
        </div>

        {/* 5. OUTCOME */}
        <div style={{ marginBottom: pw(120) }}>
          <div style={{ fontSize: pw(42), fontWeight: 500, color: '#000', fontFamily: FONT, marginBottom: pw(40) }}>5. OUTCOME</div>
          <div style={{ width: pw(900), fontSize: pw(18), fontWeight: 400, lineHeight: '1.6', color: '#333', fontFamily: FONT }}>
            ThreadLoop demonstrates that differentiation in saturated digital marketplaces does not always require radical redesign. By redefining listing requirements and surfacing communal dialogue, the platform increases perceived trust, fit transparency, styling inspiration, and community engagement. The grid remains intact, but the experience becomes embodied.
          </div>
        </div>

        {/* 6. REFLECTION */}
        <div style={{ marginBottom: pw(120) }}>
          <div style={{ fontSize: pw(42), fontWeight: 500, color: '#000', fontFamily: FONT, marginBottom: pw(40) }}>6. REFLECTION</div>
          <div style={{ width: pw(900), fontSize: pw(18), fontWeight: 400, lineHeight: '1.6', color: '#333', fontFamily: FONT }}>
            This project reinforced a broader design principle: innovation often lies not in replacing systems, but in questioning what those systems have normalized. In resale ecosystems, abstraction of fit has become standard. ThreadLoop challenges that abstraction by making embodiment required. The result is not disruptive; it is deliberate.
          </div>
        </div>

      </div>

      {/* ── PROTOTYPE BUTTON + LINE ───────────────────────────────── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: pw(96),
        paddingRight: pw(96),
        marginBottom: pw(160),
        gap: pw(24),
      }}>
        <button style={{
          backgroundColor: C,
          border: 'none',
          borderRadius: pw(50),
          padding: `${pw(20)} ${pw(40)}`,
          fontSize: pw(16),
          fontWeight: 400,
          fontFamily: FONT,
          letterSpacing: '0.1em',
          cursor: 'pointer',
          color: '#000',
          flexShrink: 0,
        }}>PROTOTYPE</button>
        <div style={{ flex: 1, height: '1px', backgroundColor: C }} />
      </div>

      {/* ── NEXT PROJECT ──────────────────────────────────────────── */}
      <div ref={ballRef} style={{
        position: 'relative',
        height: pw(650),
        marginBottom: pw(80),
      }}>

        {/* "Next project" top left */}
        <div style={{
          position: 'absolute',
          left: pw(242), top: pw(60),
          fontSize: pw(42), fontWeight: 400,
          color: '#000', fontFamily: FONT,
        }}>Next project</div>

        {/* Ball — right, vertically centered */}
        <div
          onClick={() => {}}
          style={{
            position: 'absolute',
            right: pw(96),
            top: '50%',
            transform: ballVisible ? 'translateY(-50%)' : 'translateY(-50%) translateX(-300px)',
            opacity: ballVisible ? 0.5 : 0,
            transition: 'transform 1s ease, opacity 0.8s ease',
            width: pw(531), height: pw(531),
            borderRadius: '50%',
            backgroundColor: C,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = 0.8}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.5}
        >
          <span style={{ fontSize: pw(16), fontWeight: 300, color: '#000', fontFamily: FONT, letterSpacing: '0.1em' }}>
            PLACEHOLDER
          </span>
        </div>

        {/* Line at vertical center, ending at ball left edge */}
<div style={{
  position: 'absolute',
  left: 0,
  right: `calc(${pw(96)} + ${pw(531)})`,
  top: '50%',
  height: '1px',
  backgroundColor: C,
}} />

        {/* "name of the project" just above the line */}
        <div style={{
          position: 'absolute',
          left: pw(242),
          top: '50%',
          transform: 'translateY(-120%)',
          fontSize: pw(18), fontWeight: 400,
          color: '#000', fontFamily: FONT,
        }}>
          name of the project
        </div>

      </div>

      {/* ── BOTTOM NAV ────────────────────────────────────────────── */}
      <div style={{
        position: 'relative',
        paddingLeft: pw(96),
        paddingBottom: pw(48),
        height: pw(80),
      }}>
        <Link to="/" style={{
          position: 'absolute', left: pw(96),
          fontSize: pw(18), fontWeight: 300, color: '#000',
          fontFamily: FONT, textDecoration: 'none', opacity: 0.5,
        }}>HOME</Link>
        <Link to="/work" style={{
          position: 'absolute', left: pw(242),
          fontSize: pw(18), fontWeight: 300, color: '#000',
          fontFamily: FONT, textDecoration: 'none', opacity: 0.5,
        }}>WORK</Link>
        <Link to="/about" style={{
          position: 'absolute', left: pw(388),
          fontSize: pw(18), fontWeight: 300, color: '#000',
          fontFamily: FONT, textDecoration: 'none', opacity: 0.5,
        }}>ABOUT</Link>

        <div style={{
          position: 'absolute',
          right: pw(96),
          top: 0,
          width: pw(80), height: pw(80),
        }}>
          <RotatingLogo size={pw(80)} />
        </div>
      </div>

    </div>
  )
}