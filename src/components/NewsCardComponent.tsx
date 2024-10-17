import { useRouter } from 'next/router';

import { memo } from 'react';

import { useAppContext } from "../context/AppContext";

import { NewsCardProps } from '../types/NewsType';

import NewsCardBodyComponent from './NewsCardBodyComponent';

function NewsCardComponent({ news, index } : NewsCardProps ) {

    const router = useRouter();

    const { setNewsDetail } = useAppContext();

    const showDetails = () => {
        setNewsDetail(news)
        router.push(`/news/${index}`);
    };

    return (        

        <div>
            
            <div className="card-body">

                <div>
                    <NewsCardBodyComponent news={news} isFullDetail={false} />
                </div>                
                
                <div className="text-center">
                    <button className='btn btn-sm mt-2 btn-primary' onClick={showDetails}>Show full article</button>
                </div>
            </div>
        </div>
    );
}

export default memo(NewsCardComponent);
