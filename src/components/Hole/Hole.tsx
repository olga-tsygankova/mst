import styles from './styles.module.css';
import { Circle } from './Circle';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CardScrollAnimation = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(`.${styles.card}`);
      const wrapperCards = containerRef.current.querySelector(`.${styles.cardWrapper}`);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 10%',
          end: 'bottom',
          scrub: true,
          pin: true,
          markers: true,
        }
      });

      timeline.to(wrapperCards, {
        x: -1500,
        ease: 'power2.out',
        duration: 10
      }, 0);

      timeline.fromTo(cards,
        { x: 1000, opacity: 0, scale: 0 },
        {
          x: 0, opacity: 1, scale: 1,
          stagger: 0.5,
          ease: 'power2.out',
          duration: 2
        },
        0
      );
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      {children}
    </div>
  );
};

export const Hole = () => {
  return (
    <CardScrollAnimation>
      <h2 className={styles.title}>Комплексно подходим к&nbsp;решению маркетинговых задач бизнеса</h2>
      <div className={styles.slider}>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Circle />
            </div>
            <h3 className={styles.cardTitle}>Создаем сайты</h3>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>Landing Page</li>
                <li className={styles.cardItem}>Многостраничный сайт</li>
                <li className={styles.cardItem}>Квиз</li>
                <li className={styles.cardItem}>Сайт-визитка</li>
                <li className={styles.cardItem}>Интернет-магазин</li>
                <li className={styles.cardItem}>Блог</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardFirst}`}>
            <div className={styles.cardIcon}>
              <Circle />
            </div>
            <h3 className={styles.cardTitle}>Приводим лидов –<br />горячих клиентов</h3>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>Подбираем и фильтруем лидов по конкретным критериям бизнеса, обеспечивая качественные заявки.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Circle />
            </div>
            <h3 className={styles.cardTitle}>Настраиваем и ведем<br />рекламные кампании</h3>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>Яндекс Директ</li>
                <li className={styles.cardItem}>Google Реклама</li>
              </ul>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Circle />
            </div>
            <h3 className={styles.cardTitle}>Запускаем<br />и ведем SMM</h3>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>YouTube</li>
                <li className={styles.cardItem}>Telegram</li>
                <li className={styles.cardItem}>ВКонтакте</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CardScrollAnimation>
  );
};
