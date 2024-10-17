
import { useRouter } from 'next/router';
import { useAppContext } from "../../src/context/AppContext";

import NewsCardBody from '../../src/components/NewsCardBodyComponent';

import styles from '../../styles/Index.module.css'

export default function NewsDetail() {

    const router = useRouter();

    const { category, page, newsDetail: news, setNewsDetail, setLoading } = useAppContext();

    const showHomeScreen = () => {
      setLoading(true)
        router.push(
          {
            pathname: '/',
            query: { category, page },
          }
        );
    };

    return (
      <div>

        <div className={styles.content}>

          <div className={styles.background}></div>

          <div className={styles.overlay}></div>

          <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>

            <div className="card shadow-lg" style={{ width: '40rem' }}>

                <div className="card-body">
                    
                    <div>
                      <NewsCardBody news={news} isFullDetail={true} />
                    </div>

                    <div className="text-center">
                      <button className='btn btn-sm mt-2 btn-primary' onClick={showHomeScreen}>Back to list</button>
                    </div>
                    
                </div>

            </div>

          </div>
        </div>
      </div>
      
    )
  
}
