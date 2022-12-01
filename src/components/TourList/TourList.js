import React, { useState } from 'react'
import Tour from '../Tour/Tour'
import './TourList.scss'
import { tourData } from '../tourData'
// const axios = require("axios");




const TourList = () => {
    const [tourDataState, setTourDataState] = useState(tourData);
    
    const removeTour = (id) => {
        const sortedTours = tourDataState.filter((tour) => tour.id !== id);
        setTourDataState(sortedTours);
    };

    return (
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Cities</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {tourDataState.map((tour) => {
                        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />
                    })
                    }
                </div>
            </div>
        </section>
    )
}

export default TourList