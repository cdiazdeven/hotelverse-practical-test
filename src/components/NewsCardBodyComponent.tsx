
import { NewsDetailBodyProps } from '../types/NewsType';
import ImageComponent from './ImageComponent';

const NewsCardBodyComponent = ({ news, isFullDetail } : NewsDetailBodyProps) => {
    return (
        <>
            {news.urlToImage && (
                <ImageComponent newsDetail={news} />
            )}
            <h5 className={`card-title mt-4 ${isFullDetail ? '' : 'text-truncate'}`}>
                {news.title}
            </h5>
            <p className={`card-text mt-4 ${isFullDetail ? '' : 'text-truncate'}`}>
                {news.description}
            </p>
            <p className="card-text">
                <small className="text-muted">
                {new Date(news.publishedAt).toLocaleDateString()}
                </small>
            </p>
        </>
    )
}

export default NewsCardBodyComponent