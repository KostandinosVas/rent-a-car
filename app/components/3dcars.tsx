'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cube'
import styles from './3dcars.module.css'

function SliderWithNav({ slides }: { slides: { src: string; alt: string }[] }) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <div className={styles.sliderBlock}>
      <div className={styles.sliderWrap}>
        <Swiper
          effect="cube"
          grabCursor
          loop
          modules={[EffectCube]}
          cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
          onSwiper={setSwiper}
        >
          {slides.map((s) => (
            <SwiperSlide key={s.src}><img src={s.src} alt={s.alt} /></SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.navRow}>
        <button className={styles.navBtn} aria-label="Previous" onClick={() => swiper?.slidePrev()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className={styles.navBtn} aria-label="Next" onClick={() => swiper?.slideNext()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Cars3D() {
  return (
    <section className={styles.carsSection}>
      {/* Row 1: Slider LEFT, info RIGHT */}
      <div className={styles.carRow}>
        <SliderWithNav slides={[
          { src: '/images/3dimages/front.webp', alt: 'Astrler V300 front' },
          { src: '/images/3dimages/left.webp', alt: 'Astrler V300 left' },
          { src: '/images/3dimages/rear.webp', alt: 'Astrler V300 rear' },
          { src: '/images/3dimages/right.webp', alt: 'Astrler V300 right' },
        ]} />
        <div className={styles.carInfo}>
          <h2>Astrler V300</h2>
          <p className={styles.carTagline}>
            Born on the track, refined for the road. The V300 delivers raw power
            wrapped in aerodynamic elegance — a machine that responds to every instinct.
          </p>
          <div className={styles.carSpecs}>
            <div className={styles.carSpec}>
              <span className={styles.label}>Engine</span>
              <span className={styles.value}>4.0L V8</span>
            </div>
            <div className={styles.carSpec}>
              <span className={styles.label}>0–100 km/h</span>
              <span className={styles.value}>3.1 s</span>
            </div>
            <div className={styles.carSpec}>
              <span className={styles.label}>Top Speed</span>
              <span className={styles.value}>320 km/h</span>
            </div>
            <div className={styles.carSpec}>
              <span className={styles.label}>Power</span>
              <span className={styles.value}>620 hp</span>
            </div>
          </div>
          <div className={styles.carPrice}>$850 <span>/ day</span></div>
          <a href="/cars/5" className={styles.rentBtn}>Rent This Car</a>
        </div>
      </div>

      {/* Row 2: info LEFT, Slider RIGHT */}
      <div className={`${styles.carRow} ${styles.carRowReverse}`}>
        <div className={styles.carInfo}>
          <h2>Lesiac Z1500</h2>
          <p className={styles.carTagline}>
            Silence is its weapon. The Z1500 fuses cutting-edge electric propulsion
            with a sculpted body that cuts through air — and expectations.
          </p>
          <div className={styles.carSpecs}>
            <div className={styles.carSpec}>
              <span className={styles.label}>Drivetrain</span>
              <span className={styles.value}>All-Electric</span>
            </div>
            <div className={styles.carSpec}>
              <span className={styles.label}>0–100 km/h</span>
              <span className={styles.value}>2.7 s</span>
            </div>
            <div className={styles.carSpec}>
              <span className={styles.label}>Range</span>
              <span className={styles.value}>620 km</span>
            </div>
            <div className={styles.carSpec}>
              <span className={styles.label}>Power</span>
              <span className={styles.value}>1,500 hp</span>
            </div>
          </div>
          <div className={styles.carPrice}>$1,200 <span>/ day</span></div>
          <a href="/cars/6" className={styles.rentBtn}>Rent This Car</a>
        </div>
        <SliderWithNav slides={[
          { src: '/images/3dimages/purple04.webp', alt: 'Lesiac Z1500 view 1' },
          { src: '/images/3dimages/purple03.webp', alt: 'Lesiac Z1500 view 2' },
          { src: '/images/3dimages/purple02.webp', alt: 'Lesiac Z1500 view 3' },
          { src: '/images/3dimages/purple01.webp', alt: 'Lesiac Z1500 view 4' },
        ]} />
      </div>
    </section>
  )
}
