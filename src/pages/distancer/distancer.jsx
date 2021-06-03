import React, { useEffect, useState }  from "react"; 
import { useParams } from 'react-router-dom';
import '../distancer/distancer.scss'

function DenLange() {
    const [data, setData] = useState({});
    const {id} = useParams()

    useEffect(() => {
        const doFetch = async () => {
            let response = await fetch(`https://api.mediehuset.net/rordal/run/${id}`)
            let data = await response.json()
            setData(data.item)
            
        }
        doFetch()
          
    }, );

    //Data
    return (
      <>
            <div key={data.id}>
            <h3 className="distance-title">{data.title}</h3>
            <div className="distance-content">{data.description}</div>
            </div>
      
     </>
    );
}  



export default DenLange; 