
import {useState} from 'react';

function Cards({id, name , info , image , price , removeTour }){
    const [flag , setFlag] = useState(false);

    const description = (flag)?info:`${info.substr(0,180)}...`;
    function flagHandler(){
        setFlag(!flag);
    }
    const content = !flag?"Read more" : "Less more";




    return (
        <div className="sub-container">
            <div className="image">
                <img src={image} alt="Hello"></img>
                
            </div>
            <div className="descrpition">
                <div className="sub-desc">
                    <h3 className='title'>{name}</h3>
                    <h3 className='price'>Rs. {price}</h3>
                </div>
                <div className="main-descr">
                    {description}
                    <span onClick={flagHandler}>{content} </span>
                </div>
                <div className='btn'>
                    <button onClick={()=>removeTour(id)}>Not Interested</button>
                </div>

            </div>







        </div>

    )


}

export default Cards;