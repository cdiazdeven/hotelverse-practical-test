import { createContext, useContext, useState, ReactNode } from 'react';

import { AppContextType } from '../types/AppContextType';

import { defaultEmptyNews } from '../utils/defaultValues';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  
  const [category, setCategory] = useState('technology');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [loadingErrorMessage, setLoadingErrorMessage] = useState('');
  const [newsDetail, setNewsDetail] = useState(defaultEmptyNews);

  return (
    <AppContext.Provider value={
        { category, 
          page, 
          pageSize, 
          loading, 
          newsDetail, 
          loadingError,
          loadingErrorMessage,
          setCategory, 
          setPage, 
          setPageSize, 
          setNewsDetail, 
          setLoading,
          setLoadingError,
          setLoadingErrorMessage
        }
    }>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser utilizado dentro de AppContextProvider');
  }
  return context;
};
