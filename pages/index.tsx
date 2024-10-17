import { GetServerSideProps } from "next"

import { useEffect } from "react"

import MainComponent from "../src/components/MainComponent"
import { useRouter } from "next/router"

import { fetchNewsByCategory } from '../src/services/apiService'
import { useAppContext } from "../src/context/AppContext"

import { IndexPageNewsPageProps } from "../src/types/NewsType"

import styles from '../styles/Index.module.css'

const Index = ( { newsArray, loadError,loadErrorMessage } : IndexPageNewsPageProps ) => {

  const router = useRouter();
  const { category, 
          page, 
          pageSize, 
          setPage, 
          loadingError, 
          setLoading, 
          setLoadingError, 
          setLoadingErrorMessage 
        } = useAppContext();  

  setLoadingError(loadError)
  setLoadingErrorMessage(loadErrorMessage)
  
  const reloadNews = () => {
    router.push({
      pathname: '/',
      query: { category, page },
    });
  }

  useEffect(() => {
    reloadNews()
  }, [category,page])

  useEffect(() => {
    setLoading(false)
  },[newsArray])

  return (
    
        <div>
          <div className={styles.background}></div>

          <div className={styles.overlay}></div>

          <div className={styles.content}>

            <MainComponent newsArray={newsArray} />

          </div>

        </div>
        
      )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {  

  const { API_URL, API_KEY } = process.env

  const { category = "technology" } = context.query 
  const { page = 1 } = context.query 
  const { pageSize = 10 } = context.query

  const realPageSize = (page as number) * (pageSize as number)

  try {

    const newsArray = await fetchNewsByCategory(API_URL as string,API_KEY as string,category as string,page as number,realPageSize as number)

    return {
        props: {
            newsArray,
            loadError: false,
            loadErrorMessage: ''
        }
    }
      
  } catch (error) {

    return {
        props: {
            newsArray: [],
            loadError: true,
            loadErrorMessage: (error as Error).message || 'An unexpected error occurred'
        }
    }

  }

};