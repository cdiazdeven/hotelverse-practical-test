import { NewsType } from "./NewsType";

export interface AppContextType {
    category: string;
    page: number;
    pageSize: number;
    loading: boolean;
    loadingError: boolean;
    loadingErrorMessage: string;
    newsDetail: NewsType;
    setPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    setCategory: (category: string) => void;
    setLoading: (loading: boolean) => void;
    setLoadingError: (loadingError: boolean) => void;
    setLoadingErrorMessage: (loadingErrorMessage: string) => void;
    setNewsDetail: (newsDetail: NewsType) => void;
}