import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Error = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  // TIMEOUT TO GO TO MAIN PAGE
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className={styles.found}>
      <h1>404|PAGE IS NOT FOUND </h1>
      Go to
      {/* <button onClick={() => router.push('/')} className={styles.button}>
        Home Page
      </button> */}
      <button onClick={handleClick} className={styles.button}>
        Home Page
      </button>
    </div>
  );
};

export default Error;
