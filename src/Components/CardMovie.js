import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

const CardMovie=({el})=>{

    const [show, setShow] = useState(false)

    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} style={{width : "286px", height:"407px"}}/>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
            {
                show ? el.description : `${el.description.substring(0,50)}...`
            }
            <button className={show ? "ahmer" : "akhther"} onClick={()=> setShow(!show)}>{show ? "Show less" : "Show more"}</button>
          <br/>
          <br/>
          <Rating  value={el.rating} readOnly />
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default CardMovie