import { useState, useEffect } from "react"
import ImageContainer from '../../components/image_container'


const Shows = () => {
    const [name, setName] = useState('')
    const [series, setSeries] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.tvmaze.com/search/shows?q=${name}`).then(res => res.json()).then((data) => {
            setSeries(data.map((serie) => serie.show))
            setLoading(false)
        })
    }, [name])
    const setNameInput = (e) => {
        setName(e.target.value)
    }
    return (      
        <div >
            <input className="inputName" name="serieName" value={name} onChange={(e) => setNameInput(e)}/>     
            <div className='container'>{
                isLoading? <p>Loading...</p> : series.length == 0? <p>No series data</p>:
                series.map((serie) => <ImageContainer serie={serie}/>)
            }</div>    
            
            
        </div>
    )
}

export default Shows