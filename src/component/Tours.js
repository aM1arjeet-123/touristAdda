import Cards from './Cards'


function Tours({tours , removeTour , typeHandler}){
    return (
        <div className="body">
            <div className="heading">
                <h2>Tourist Adda</h2>
            </div>
            <div className='various-prop'>
                <button onClick={()=>typeHandler("All")}>All</button>
                <button onClick={()=>typeHandler("cultural")}>cultural</button>
                <button onClick={()=>typeHandler("historic")}>historic</button>
                <button onClick={()=>typeHandler("Adventure")}>Adventure</button>
            </div>
            <div className="container">{
                tours.map( (tour)=>{
                    return <Cards key= {tours.id} {...tour} removeTour={removeTour}></Cards>
                })
            }
            </div>





        </div>




    );

}

export default Tours;