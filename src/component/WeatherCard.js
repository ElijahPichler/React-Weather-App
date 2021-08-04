import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import {WiDaySunny, WiDaySunnyOvercast} from "react-icons/wi"
export const WeatherCard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="card">
                 <div className="icons">{Math.round((props.temp -273.15) * (9/5) + 32) > 80 ? (<WiDaySunny size='150' />): (<WiDaySunnyOvercast size='150'/>) }</div>
                    
                <Card.Body>
                <Card.Title className="header">{props.city.charAt(0).toUpperCase() + props.city.slice(1).toLowerCase()}</Card.Title>
                <Card.Text className="temp"style={{color:Math.round((props.temp -273.15) * (9/5) + 32) > 80?"red":"blue"}}>{Math.round((props.temp -273.15) * (9/5) + 32)}&deg;F</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" className="card inside">
                    <ListGroupItem>Max Temp:{Math.round((props.maxTemp -273.15) * (9/5) + 32)}</ListGroupItem>
                    <ListGroupItem>Min Temp:{Math.round((props.minTemp -273.15) * (9/5) + 32)}</ListGroupItem>
                    <ListGroupItem>Feels like:{Math.round((props.feelsLike -273.15) * (9/5) + 32)}</ListGroupItem>
                </ListGroup>
            
            </Card>
        </div>
    )
}
export default WeatherCard
