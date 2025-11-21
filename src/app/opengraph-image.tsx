import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Pushkar Kathayat - Full Stack Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const profilePicData = await readFile(
    join(process.cwd(), 'public/pushkar_kathayat_face_pic.png'),
    'base64'
  )
  const profilePicSrc = `data:image/png;base64,${profilePicData}`

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Main Card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '60px',
            background: 'linear-gradient(145deg, rgba(39, 39, 42, 0.9) 0%, rgba(24, 24, 27, 0.95) 100%)',
            borderRadius: '32px',
            padding: '50px 70px',
            border: '1px solid rgba(63, 63, 70, 0.5)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Profile Picture */}
          <div
            style={{
              display: 'flex',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(139, 92, 246, 0.5)',
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
            }}
          >
<img
              src={profilePicSrc}
              width="180"
              height="180"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Text Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                fontSize: '52px',
                fontWeight: 700,
                color: '#fafafa',
                letterSpacing: '-1px',
              }}
            >
              Pushkar Kathayat
            </div>
            <div
              style={{
                fontSize: '28px',
                fontWeight: 500,
                background: 'linear-gradient(90deg, #a78bfa, #818cf8)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Full Stack Developer
            </div>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '8px',
              }}
            >
              {['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'].map((tech) => (
                <div
                  key={tech}
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#a1a1aa',
                    background: 'rgba(63, 63, 70, 0.5)',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(82, 82, 91, 0.5)',
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '40px',
            fontSize: '18px',
            color: '#71717a',
          }}
        >
          pushkarkathayat.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
