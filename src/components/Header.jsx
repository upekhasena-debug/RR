import React from 'react'

const RIcon = ({ fill }) => (
  <svg viewBox="0 0 90 111" xmlns="http://www.w3.org/2000/svg" width="36" height="44" style={{ flexShrink: 0 }}>
    <path
      d="M5.7,64a20.23,20.23,0,0,1,1.6-8.05A20.48,20.48,0,0,1,17.25,45a20.23,20.23,0,0,1,8-1.6h16.7a8.2,8.2,0,0,0,4.55-1.2,7.58,7.58,0,0,0,2.75-3,9.34,9.34,0,0,0,0-8,7.58,7.58,0,0,0-2.75-3.05,8.2,8.2,0,0,0-4.55-1.2H17.1a12.4,12.4,0,0,1-12.4-12.4h37.3a19.89,19.89,0,0,1,16.7,8.4,21.46,21.46,0,0,1,3.5,8.3,20.69,20.69,0,0,1-4.2,17.2,19.52,19.52,0,0,1-8.2,5.9l9.61,18a8.4,8.4,0,0,1-7.41,12.36h0l-6.9-13.2q-1.41-2.4-2.85-5.2t-2.85-5.1a22.2,22.2,0,0,0-2.9-3.85,4.28,4.28,0,0,0-3-1.55H25.38a8.12,8.12,0,0,0-5.25,1.82,8,8,0,0,0-3,6.38"
      fill={fill}
    />
    <circle cx="76" cy="14.9" r="8.9" fill={fill} />
  </svg>
)

export default function Header({ theme, toggleTheme, showBack, onBack }) {
  const isCoral = theme === 'coral'
  const bgColor = isCoral ? '#EF4136' : '#2C2C2A'
  const textColor = isCoral ? '#FFFFFF' : '#EF4136'
  const iconFill = isCoral ? '#FFFFFF' : '#EF4136'

  return (
    <header style={{ backgroundColor: bgColor }} className="w-full px-4 pt-4 pb-3 flex-shrink-0">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          {showBack && (
            <button
              onClick={onBack}
              style={{ color: textColor }}
              className="mr-1 text-2xl font-bold leading-none"
              aria-label="Back"
            >
              ←
            </button>
          )}
          <RIcon fill={iconFill} />
          <div>
            <div
              style={{ color: textColor, fontFamily: 'Nunito', fontWeight: 900, letterSpacing: '-0.03em', fontSize: '1.25rem', lineHeight: 1 }}
            >
              recovery road
            </div>
            <div style={{ color: textColor, fontSize: '0.65rem', opacity: 0.85, marginTop: 2, fontWeight: 500 }}>
              your physio. in a box. for desk humans.
            </div>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          style={{
            color: textColor,
            border: `1.5px solid ${textColor}`,
            borderRadius: 20,
            padding: '3px 10px',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            background: 'transparent',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            marginTop: 4,
          }}
        >
          ● {isCoral ? 'CORAL' : 'DARK'}
        </button>
      </div>
    </header>
  )
}
