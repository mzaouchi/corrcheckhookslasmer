import { Rating } from "@mui/material"
import { Button } from "react-bootstrap"

const FilterMovies=({setFiTitle, setNjoum, fiTitle, njoum})=>{

    const handleReset=()=>{
        setFiTitle('')
        setNjoum(0)
    }

    return(
        <div>
            <input value={fiTitle} type="text" onChange={(e)=> setFiTitle(e.target.value)}/>
            <Rating value={njoum} onChange={(e)=> setNjoum(e.target.value)}/>
            <Button variant="warning" onClick={handleReset}>Reste</Button>
        </div>
    )
}

export default FilterMovies