export interface NewsType {
    title: string;
    description: string;
    publishedAt: string;
    urlToImage: string;
    author: string;
    content: string;
    url: string;
}

export interface NewsDetailProps {
    newsDetail: NewsType;
}

export interface NewsDetailBodyProps {
    news: NewsType;
    isFullDetail: boolean;
}

export interface NewsCardProps {
    news: NewsType;
    index: number;
}

export interface NewsCardArrayProps {
    newsArray: NewsType[];    
}

export interface IndexPageNewsPageProps {
    newsArray: NewsType[]; 
    loadError: boolean;
    loadErrorMessage: string;
}