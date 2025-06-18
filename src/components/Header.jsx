import styles from './Header.module.css';

export default function Header({ lang, setLang }) {
  return (
    <header>
      <button
        className={`${styles['btn-header']} unselectable ${
          lang === 'ENG' ? styles['btn-header-active'] : ''
        }`}
        onClick={() => setLang('ENG')}
      >
        <span>ENG</span>
      </button>

      <div className={styles['container-lang-right']}>
        <button
          className={`${styles['btn-header']} ${
            styles['btn-cyr']
          } unselectable ${lang === 'CYR' ? styles['btn-header-active'] : ''}`}
          onClick={() => setLang('CYR')}
        >
          <span>ЋИР</span>
        </button>

        <button
          className={`${styles['btn-header']} ${
            styles['btn-lat']
          } unselectable ${lang === 'LAT' ? styles['btn-header-active'] : ''}`}
          onClick={() => setLang('LAT')}
        >
          <span>LAT</span>
        </button>
      </div>
    </header>
  );
}
