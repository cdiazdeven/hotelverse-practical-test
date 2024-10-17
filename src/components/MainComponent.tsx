import { useState, useEffect } from 'react';

import { useAppContext } from "../context/AppContext";

import CategoryFilter from "./CategoryFilter"

import { NewsCardArrayProps } from '../types/NewsType';

import NewsCardComponent from './NewsCardComponent';

import ButtonComponent from './ButtonComponent';

import ErrorComponent from './ErrorComponent';

const MainComponent = ( { newsArray } : NewsCardArrayProps ) => {   

    const { category, page, loadingError } = useAppContext();

    const [news,setNews] = useState(newsArray)    

    const maxLoadAttempts = 4

    useEffect(() => {
        setNews(newsArray)
    },[
        newsArray
    ])

    return (

        <div className="container">                  

            <div className="row mb-4 mt-4">

                <div className="col-12 text-white">
                    <h1 className="my-4">Breaking news about {category}</h1>
                </div>

                <div className="col-6 col-lg-2 col-sm-6 text-center">
                    <CategoryFilter />
                </div>

                <div className="col-6 col-lg-2 col-sm-5 text-center">
                    {page < maxLoadAttempts && (
                        <div >
                            <ButtonComponent resetNewsQuantity={false} buttonText={'Load more...'} />
                        </div>
                    )}
                    {page == maxLoadAttempts && (
                        <div >
                            <ButtonComponent resetNewsQuantity={true} buttonText={'Load less...'} />
                        </div>
                    )}
                </div>

            </div>

            <div className="row">

                {news.map((item,index) => (
                    <div key={item.title} className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card mb-3">
                            <NewsCardComponent key={item.title} news={item} index={index} />
                        </div>
                    </div>
                ))}

            </div>   

            {loadingError && (
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row justify-content-center">

                        <div className="col-12 col-lg-6 col-md-6">
                            <ErrorComponent />
                        </div>
                    
                    </div>
                </div>
            )}                 
        
        </div>
    )

}

export default MainComponent

