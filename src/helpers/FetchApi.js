import React, { useEffect, useState }  from "react"; 

function MyFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch('https://api.mediehuset.net/rordal/run')
            .then((res) => res.json())
            .then((data) => {
                setData(data.items); //Data handling
            })
            .catch((err) => {
                setError(err); //Error Handling
            })
            .finally(() => {
                setLoading(false); //Loading
            });
    }, []);

    if (loading) {
        return <p>Laster ind data...</p>; //Loading
    }

    if (error || !Array.isArray(data)) {
        return <p>Der var fejl med at laste ind din data!</p> //Error
    }

    //Data
    return (
    <>
      <>
        {data&&data.map((item) => [ 
            <div key={item.id}>
            <h3 className="distance-title">{item.title}</h3>
            <div className="distance-content">{item.description}</div>
            </div>
            ])}
     </>
    </>
    );
}

export default MyFetch; 