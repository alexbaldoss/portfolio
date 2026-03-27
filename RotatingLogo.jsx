// src/components/RotatingLogo.jsx
import logoWheel from '../assets/logo-wheel.svg'

export default function RotatingLogo({ size = '260px' }) {
  return (
    <div style={{ width: size, height: size }}>
      <img
        src={logoWheel}
        alt="Logo wheel"
        style={{
          width: '90%',
          height: '90%',
        }}
      />
    </div>
  )
}