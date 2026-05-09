'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import styles from './3dcars.module.css'

const swiperConfig = {
  effect: 'cube' as const,
  grabCursor: true,
  loop: true,
  modules: [EffectCube, Pagination],
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: true,
}

export default function Cars3D() {
  return (
    <section className={styles.carsSection}>
      {/* Row 1: Slider LEFT, info RIGHT */}
      <div className={styles.carRow}>
        <div className={styles.sliderWrap}>
          <Swiper {...swiperConfig}>
            <SwiperSlide><img src="/images/3dimages/front.webp" alt="Astrler V300 front" /></SwiperSlide>
            <SwiperSlide><img src="/images/3dimages/left.webp" alt="Astrler V300 left" /></SwiperSlide>
            <SwiperSlide><img src="/images/3dimages/rear.webp" alt="Astrler V300 rear" /></SwiperSlide>
            <SwiperSlide><img src="/images/3dimages/right.webp" alt="Astrler V300 right" /></SwiperSlide>
          </Swiper>
        </div>
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
          <div className={styles.carPrice}>$245,000 <span>starting price</span></div>
        </div>
      </div>

      {/* Row 2: info LEFT, Slider RIGHT */}
      <div className={styles.carRow}>
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
          <div className={styles.carPrice}>$389,000 <span>starting price</span></div>
        </div>
        <div className={styles.sliderWrap}>
          <Swiper {...swiperConfig}>
            <SwiperSlide><img src="/images/3dimages/purple04.webp" alt="Lesiac Z1500 view 1" /></SwiperSlide>
            <SwiperSlide><img src="/images/3dimages/purple03.webp" alt="Lesiac Z1500 view 2" /></SwiperSlide>
            <SwiperSlide><img src="/images/3dimages/purple02.webp" alt="Lesiac Z1500 view 3" /></SwiperSlide>
            <SwiperSlide><img src="/images/3dimages/purple01.webp" alt="Lesiac Z1500 view 4" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
