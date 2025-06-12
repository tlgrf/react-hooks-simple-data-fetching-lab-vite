
import { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //Fetches data from the API
    async function fetchData() {
        setLoading(true); //reset the Loading indicator so "loading..." message, shows inbetween fetches
        setError(null) //
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const jsonData = await response.json()
            setData(jsonData)

        } catch (err) {
            setError(err)

        }
        finally {
            setLoading(false)
        }
    }
    // on first render, load a dog image
    useEffect(() => { fetchData() }, []
    )
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>ERROR: {error.message}</p>
    }
    if (data) {
        return (
            <div>
                <h1>Who let the dogs out??</h1>
                <img src={data.message}></img>
                <button onClick={fetchData}>WOOF WOOF!</button>

            </div>
        )
    }
    return (null)
}
export default App