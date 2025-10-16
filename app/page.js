'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const timings = [
      0,     // Scene 0: Title fade in
      4000,  // Scene 1: Professionals seeking
      9000,  // Scene 2: Digital India map
      15000, // Scene 3: Connections forming
      21000, // Scene 4: Happy connections
      26000, // Scene 5: Final message
    ];

    const timeouts = timings.slice(1).map((time, index) =>
      setTimeout(() => setScene(index + 1), time)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <main className={styles.main}>
      <audio autoPlay loop>
        <source src="/audio.mp3" type="audio/mpeg" />
      </audio>

      {/* Scene 0: Opening Title */}
      {scene === 0 && (
        <div className={`${styles.scene} ${styles.fadeIn}`}>
          <div className={styles.titleCard}>
            <h1 className={styles.mainTitle}>Free Referrals Across India</h1>
            <h2 className={styles.subtitle}>Inspire Reach</h2>
          </div>
        </div>
      )}

      {/* Scene 1: Professionals Seeking */}
      {scene === 1 && (
        <div className={`${styles.scene} ${styles.fadeIn}`}>
          <div className={styles.professionalsGrid}>
            <div className={`${styles.professional} ${styles.slideInLeft}`}>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <svg viewBox="0 0 100 100" className={styles.icon}>
                  <path d="M50 10 L70 30 L60 30 L60 50 L40 50 L40 30 L30 30 Z M30 55 L70 55 L75 90 L25 90 Z" fill="white"/>
                </svg>
              </div>
              <p className={styles.professionLabel}>Designer</p>
              <div className={styles.searchIndicator}>🔍</div>
            </div>

            <div className={`${styles.professional} ${styles.slideInRight}`}>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <svg viewBox="0 0 100 100" className={styles.icon}>
                  <rect x="20" y="30" width="60" height="50" fill="none" stroke="white" strokeWidth="4"/>
                  <circle cx="35" cy="45" r="5" fill="white"/>
                  <circle cx="65" cy="45" r="5" fill="white"/>
                  <path d="M30 60 Q50 70 70 60" stroke="white" strokeWidth="4" fill="none"/>
                </svg>
              </div>
              <p className={styles.professionLabel}>Factory Worker</p>
              <div className={styles.searchIndicator}>🔍</div>
            </div>

            <div className={`${styles.professional} ${styles.slideInLeft}`}>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <svg viewBox="0 0 100 100" className={styles.icon}>
                  <rect x="25" y="35" width="50" height="35" rx="3" fill="none" stroke="white" strokeWidth="4"/>
                  <rect x="30" y="40" width="40" height="20" fill="white"/>
                  <rect x="35" y="70" width="30" height="3" fill="white"/>
                </svg>
              </div>
              <p className={styles.professionLabel}>Engineer</p>
              <div className={styles.searchIndicator}>🔍</div>
            </div>

            <div className={`${styles.professional} ${styles.slideInRight}`}>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                <svg viewBox="0 0 100 100" className={styles.icon}>
                  <path d="M30 40 L50 25 L70 40 M30 40 L30 75 L70 75 L70 40" fill="none" stroke="white" strokeWidth="4"/>
                  <path d="M25 50 L75 50 M50 50 L50 75" stroke="white" strokeWidth="4"/>
                </svg>
              </div>
              <p className={styles.professionLabel}>Marketer</p>
              <div className={styles.searchIndicator}>🔍</div>
            </div>
          </div>
          <p className={styles.sceneText}>Professionals seeking trusted connections...</p>
        </div>
      )}

      {/* Scene 2: Digital India Map */}
      {scene === 2 && (
        <div className={`${styles.scene} ${styles.fadeIn}`}>
          <svg viewBox="0 0 800 600" className={styles.indiaMap}>
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ff6b6b', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#feca57', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#48dbfb', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Simplified India outline */}
            <path className={styles.mapOutline}
              d="M 400 50 L 450 80 L 480 100 L 500 140 L 510 180 L 520 220 L 510 260 L 490 300 L 470 340 L 450 370 L 430 390 L 410 400 L 390 395 L 370 380 L 350 360 L 330 330 L 310 300 L 295 270 L 285 240 L 280 210 L 285 180 L 295 150 L 310 120 L 330 95 L 360 75 L 380 60 Z"
              fill="url(#mapGradient)"
              stroke="#ffffff"
              strokeWidth="2"
              filter="url(#glow)"/>

            {/* Cities as glowing points */}
            <circle className={styles.city} cx="320" cy="180" r="8" fill="#ffeb3b"/>
            <circle className={styles.city} cx="380" cy="220" r="8" fill="#ffeb3b"/>
            <circle className={styles.city} cx="420" cy="160" r="8" fill="#ffeb3b"/>
            <circle className={styles.city} cx="460" cy="240" r="8" fill="#ffeb3b"/>
            <circle className={styles.city} cx="390" cy="300" r="8" fill="#ffeb3b"/>
            <circle className={styles.city} cx="350" cy="260" r="8" fill="#ffeb3b"/>
            <circle className={styles.city} cx="440" cy="320" r="8" fill="#ffeb3b"/>
            <circle className={styles.city} cx="310" cy="240" r="8" fill="#ffeb3b"/>

            {/* Connecting lines */}
            <line className={styles.connection} x1="320" y1="180" x2="380" y2="220" stroke="#00ff88" strokeWidth="2"/>
            <line className={styles.connection} x1="380" y1="220" x2="420" y2="160" stroke="#00ff88" strokeWidth="2"/>
            <line className={styles.connection} x1="420" y1="160" x2="460" y2="240" stroke="#00ff88" strokeWidth="2"/>
            <line className={styles.connection} x1="460" y1="240" x2="390" y2="300" stroke="#00ff88" strokeWidth="2"/>
            <line className={styles.connection} x1="390" y1="300" x2="350" y2="260" stroke="#00ff88" strokeWidth="2"/>
            <line className={styles.connection} x1="350" y1="260" x2="440" y2="320" stroke="#00ff88" strokeWidth="2"/>
            <line className={styles.connection} x1="310" y1="240" x2="380" y2="220" stroke="#00ff88" strokeWidth="2"/>
            <line className={styles.connection} x1="320" y1="180" x2="310" y2="240" stroke="#00ff88" strokeWidth="2"/>
          </svg>
          <p className={styles.sceneText}>Connecting professionals across India...</p>
        </div>
      )}

      {/* Scene 3: Connections Forming */}
      {scene === 3 && (
        <div className={`${styles.scene} ${styles.fadeIn}`}>
          <div className={styles.networkAnimation}>
            <svg viewBox="0 0 800 500" className={styles.networkSvg}>
              {Array.from({ length: 30 }).map((_, i) => {
                const angle = (i / 30) * Math.PI * 2;
                const radius = 150 + (i % 3) * 60;
                const cx = 400 + Math.cos(angle) * radius;
                const cy = 250 + Math.sin(angle) * radius;
                return (
                  <g key={i}>
                    <line
                      className={styles.networkLine}
                      x1="400" y1="250"
                      x2={cx} y2={cy}
                      stroke="#4dabf7"
                      strokeWidth="2"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                    <circle
                      className={styles.networkNode}
                      cx={cx} cy={cy} r="6"
                      fill="#fff"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  </g>
                );
              })}
              <circle cx="400" cy="250" r="20" fill="#ffd43b" className={styles.centerNode}/>
            </svg>
          </div>
          <p className={styles.sceneText}>Building trusted networks...</p>
        </div>
      )}

      {/* Scene 4: Happy Connections */}
      {scene === 4 && (
        <div className={`${styles.scene} ${styles.fadeIn}`}>
          <div className={styles.successStories}>
            <div className={`${styles.storyCard} ${styles.floatUp}`}>
              <div className={styles.handshake}>
                <svg viewBox="0 0 200 200" className={styles.handshakeIcon}>
                  <path d="M50 100 L70 80 L90 100 L110 80 L130 100 L150 80"
                    stroke="#4caf50" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  <circle cx="70" cy="70" r="15" fill="#2196f3"/>
                  <circle cx="130" cy="70" r="15" fill="#ff9800"/>
                </svg>
              </div>
              <p>✓ Connected</p>
            </div>

            <div className={`${styles.storyCard} ${styles.floatUp}`} style={{ animationDelay: '0.3s' }}>
              <div className={styles.laptop}>
                <svg viewBox="0 0 200 200" className={styles.laptopIcon}>
                  <rect x="40" y="60" width="120" height="80" rx="5" fill="#1976d2" stroke="#fff" strokeWidth="3"/>
                  <rect x="50" y="70" width="100" height="60" fill="#64b5f6"/>
                  <rect x="30" y="140" width="140" height="10" rx="2" fill="#1976d2"/>
                  <text x="100" y="110" fill="white" fontSize="40" textAnchor="middle">✓</text>
                </svg>
              </div>
              <p>✓ Working Together</p>
            </div>

            <div className={`${styles.storyCard} ${styles.floatUp}`} style={{ animationDelay: '0.6s' }}>
              <div className={styles.smile}>
                <svg viewBox="0 0 200 200" className={styles.smileIcon}>
                  <circle cx="100" cy="100" r="60" fill="#ffd700" stroke="#fff" strokeWidth="3"/>
                  <circle cx="80" cy="85" r="8" fill="#333"/>
                  <circle cx="120" cy="85" r="8" fill="#333"/>
                  <path d="M70 110 Q100 140 130 110" stroke="#333" strokeWidth="5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <p>✓ Success!</p>
            </div>
          </div>
          <p className={styles.sceneText}>Empowering professionals to grow together</p>
        </div>
      )}

      {/* Scene 5: Final Message */}
      {scene >= 5 && (
        <div className={`${styles.scene} ${styles.fadeIn}`}>
          <div className={styles.finalCard}>
            <h1 className={styles.finalTitle}>Free Referrals Across India</h1>
            <h2 className={styles.finalSubtitle}>Inspire Reach</h2>
            <div className={styles.contactInfo}>
              <svg viewBox="0 0 24 24" className={styles.emailIcon} fill="white">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <p className={styles.email}>inspirereach.solutions@gmail.com</p>
            </div>
            <div className={styles.tagline}>Connecting India, One Referral at a Time</div>
          </div>
        </div>
      )}
    </main>
  );
}
