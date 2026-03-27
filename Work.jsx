// src/pages/Work.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RotatingLogo from '../components/RotatingLogo'

const C = '#C7D1C2'
const FONT = "'Univers Next Pro', 'Univers LT Std', 'Helvetica Neue', Helvetica, Arial, sans-serif"

const pw = (v) => `${(v / 1920) * 100}vw`
const ph = (v) => `${(v / 1080) * 100}vh`

const projects = [
  { title: 'ThreadLoop', tags: 'UI/UX Design with Figma, Illustrator', bg: '#EDE9DF', comingSoon: false, link: '/work/threadloop' },
  { title: 'Coming Soon', tags: '', bg: C, comingSoon: true, link: null },
  { title: 'Coming Soon', tags: '', bg: C, comingSoon: true, link: null },
]

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

export default function Work() {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()

  const total = projects.length
  const prevIdx = (current - 1 + total) % total
  const nextIdx = (current + 1) % total

  const prev = () => setCurrent(prevIdx)
  const next = () => setCurrent(nextIdx)

  const project = projects[current]
  const prevProject = projects[prevIdx]
  const nextProject = projects[nextIdx]

  return (
    <div style={{
      backgroundColor: '#F5F4F1',
      width: '100vw',
      height: '100vh',
      position: 'relative',
      fontFamily: FONT,
      overflow: 'hidden',
    }}>

      {/* ── HEADER LINE WITH "my work" ────────────────────────────── */}
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
        <div style={{ flex: 3, height: '1px', backgroundColor: C, transformOrigin: 'right center', animation: 'slideInLeft 1.2s ease forwards' }} />
        <Node />
        <span style={{ fontSize: pw(18), fontWeight: 300, color: '#000', fontFamily: FONT, padding: `0 ${pw(12)}` }}>
          my work
        </span>
        <Node />
        <div style={{ flex: 3, height: '1px', backgroundColor: C, transformOrigin: 'left center', animation: 'slideInRight 1.2s ease forwards' }} />
      </div>

      {/* ── EMAIL ─────────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        top: ph(80), left: pw(96),
        display: 'flex',
        alignItems: 'center',
        gap: pw(8),
      }}>
        <span style={{ fontSize: pw(13), fontWeight: 300, color: '#000', fontFamily: FONT }}>
          alex.bosca10@gmail.com
        </span>
        <Node />
      </div>

      {/* ── LEFT PROJECT ──────────────────────────────────────────── */}
      <div
        onClick={prev}
        style={{
          position: 'absolute',
          left: pw(-160),
          top: '50%',
          transform: 'translateY(-50%)',
          width: pw(531),
          height: pw(531),
          borderRadius: '50%',
          backgroundColor: prevProject.bg,
          opacity: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'opacity 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 0.8}
        onMouseLeave={e => e.currentTarget.style.opacity = 0.5}
      >
        <span style={{ fontSize: pw(16), fontWeight: 300, color: '#000', fontFamily: FONT, letterSpacing: '0.1em' }}>
          {prevProject.comingSoon ? 'Coming Soon' : prevProject.title}
        </span>
      </div>

      {/* ── CENTER PROJECT FRAME + CIRCLE ─────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: pw(531),
        height: pw(531),
      }}>
        {!project.comingSoon && (
          <>
            {/* Node on top-left corner */}
            <div style={{ position: 'absolute', top: -5, left: -5, zIndex: 3 }}>
              <Node />
            </div>

            {/* Top line — grows right from node */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '1px',
              backgroundColor: C,
              transformOrigin: 'left center',
              animation: 'slideInRight 1s ease forwards',
              zIndex: 2,
            }} />

            {/* Left line — grows down from node */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '1px',
              height: '100%',
              backgroundColor: C,
              transformOrigin: 'top center',
              animation: 'slideInDown 1s ease forwards',
              zIndex: 2,
            }} />

            {/* Project name + tags */}
            <div style={{
              position: 'absolute',
              top: -28, left: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: pw(12),
              zIndex: 3,
            }}>
              <span style={{ fontSize: pw(16), fontWeight: 600, color: '#000', fontFamily: FONT, whiteSpace: 'nowrap' }}>
                {project.title}
              </span>
              <span style={{ fontSize: pw(13), fontWeight: 300, color: '#000', fontFamily: FONT, whiteSpace: 'nowrap', marginLeft: 'auto' }}>
                {project.tags}
              </span>
            </div>
          </>
        )}

        {/* Circle */}
        <div
          onClick={() => !project.comingSoon && navigate(project.link)}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '96%',
            height: '96%',
            borderRadius: '50%',
            backgroundColor: project.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            transition: 'background-color 0.4s',
            cursor: project.comingSoon ? 'default' : 'pointer',
          }}>
          <span style={{ fontSize: pw(28), fontWeight: project.comingSoon ? 300 : 600, color: '#000', fontFamily: FONT, letterSpacing: project.comingSoon ? '0.1em' : 'normal' }}>
            {project.comingSoon ? 'Coming Soon' : project.title}
          </span>
        </div>
      </div>

      {/* ── RIGHT PROJECT ─────────────────────────────────────────── */}
      <div
        onClick={next}
        style={{
          position: 'absolute',
          right: pw(-160),
          top: '50%',
          transform: 'translateY(-50%)',
          width: pw(531),
          height: pw(531),
          borderRadius: '50%',
          backgroundColor: nextProject.bg,
          opacity: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'opacity 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 0.8}
        onMouseLeave={e => e.currentTarget.style.opacity = 0.5}
      >
        <span style={{ fontSize: pw(16), fontWeight: 300, color: '#000', fontFamily: FONT, letterSpacing: '0.1em' }}>
          {nextProject.comingSoon ? 'Coming Soon' : nextProject.title}
        </span>
      </div>

      {/* ── BOTTOM NAV ────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', left: pw(96), top: ph(1019) }}>
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
          fontWeight: 600, color: '#000',
          fontFamily: FONT, textDecoration: 'none', opacity: 1,
        }}>WORK</Link>

        <Link to="/about" style={{
          position: 'absolute', left: pw(292),
          width: pw(122), height: ph(28),
          fontSize: pw(18), lineHeight: ph(20),
          fontWeight: 300, color: '#000',
          fontFamily: FONT, textDecoration: 'none', opacity: 0.5,
        }}>ABOUT</Link>
      </div>

      {/* ── RESUME BUTTON ─────────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        left: '50%', bottom: ph(36),
        transform: 'translateX(-50%)',
      }}>
        href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    backgroundColor: C,
    border: 'none',
    borderRadius: pw(50),
    padding: `${ph(14)} ${pw(48)}`,
    fontSize: pw(16),
    fontWeight: 400,
    fontFamily: FONT,
    letterSpacing: '0.1em',
    cursor: 'pointer',
    color: '#000',
    textDecoration: 'none',
    display: 'inline-block',
  }}>RESUME</a>
```

Commit message:
```
Fix #9 - Make RESUME button functional with link to PDF
      </div>

      {/* ── LOGO BOTTOM RIGHT ─────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        right: pw(96), bottom: ph(20),
        width: pw(80), height: pw(80),
      }}>
        <RotatingLogo size={pw(80)} />
      </div>

    </div>
  )
}
