import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Intro } from '../../components/Intro';
import { Leader } from '../../components/Leader';
import { Advantages } from '../../components/Advantages';
import { Result } from '../../components/Result';
import { About } from '../../components/About';
import { Hole } from '../../components/Hole';
import { Map } from '../../components/Map';
import { Folders } from '../../components/Folders'

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Intro />
      <About />
      <Advantages />
      <Leader />
      <Result />
      <Hole />
      <Map />
      <Folders />
      <Need />
      <HeartSection />
    </div>
  );
};
