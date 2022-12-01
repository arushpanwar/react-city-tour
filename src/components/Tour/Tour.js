import React, {useState} from 'react'
import './Tour.scss'

const Tour = (props) => {
    const { id, city, img, name, info } = props.tour;
    const {removeTour}=props;
    const [infoClicked, setInfoClicked] = useState(false);

    const handleInfoClick = () => {
        setInfoClicked(!infoClicked);
    }
    
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 m-10">
            <div className="image-container relative group">
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 block" />
                <span className='close-btn' onClick={()=>removeTour(id)}><i className='fas fa-window-close absolute top-[5%] right-[5%] text-2xl cursor-pointer hidden group-hover:block'></i></span>
            </div>
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{city}</span>
                <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                <br />
                <div className="info">
                    <h2 className="text-sm font-semibold tracking-wide">Info <span><i className='fas fa-caret-square-down' onClick={handleInfoClick}></i></span></h2>
                </div>
            </div>
            {infoClicked&& <p className="dark:text-gray-100">{info}</p>}
            
        </div>
    )
}

export default Tour