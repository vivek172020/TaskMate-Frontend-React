import React, { useState } from 'react'
import seticon01 from '../Images/ftr_set_icon_01.png'
import seticon02 from '../Images/ftr_set_icon_white_02.png'


export default function PointSale(props) {

    const [isHovered, setIsHovered] = useState(false);

    const mouseEnterFunction = () => {
        setIsHovered(true);
    };

    const mouseLeaveFunction = () => {
        setIsHovered(false);
    };
    return (
        <>
            <div onMouseEnter={mouseEnterFunction} onMouseLeave={mouseLeaveFunction} className="point_text_inner">
                <div className="point_text_item" >
                    <img className={`img-fluid ${isHovered ? 'd-none' : ''}`} src={props.data.img} alt="" width="70" height="70" />
                    <img className={`img-fluid ${isHovered ? '' : 'd-none'}`} src={props.data.whiteimg} alt="" width="70" height="70" />
                    <h2 className='mt-5'>{props.data.title}</h2>
                    <p>{props.data.description}</p>
                    <div className='py-3'>
                        <a href="" className="bookdemo know">Know More</a>
                    </div>
                </div>
            </div>
        </>
    )
}


{/* style="box-shadow: none; background-image: none; background-color: rgb(255, 255, 255);" */ }
// style="display: none;" img
// style="color: rgb(51, 51, 51);" pp
// style="color: rgb(51, 51, 51);" h2
// style="color: rgb(51, 51, 51);" p
// style="color: rgb(51, 51, 51);" p