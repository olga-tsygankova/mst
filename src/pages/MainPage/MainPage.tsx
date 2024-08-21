import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Intro } from '../../components/Intro';
import { Leader } from '../../components/Leader';
import { Advantages } from '../../components/Advantages';
import { Result } from '../../components/Result';

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>      
      <Intro />
      <Advantages />
      <Leader />
      <Result />
      <Need />
      <HeartSection />
    </div>
  );
};
