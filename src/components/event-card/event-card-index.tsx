import { useNavigate } from "react-router-dom";
import { EventCardContainer } from "./event-card-styles";

interface EventCardInterface {
    id: number;
    name: string,
    description: string,
    date: number,
    location: string
}

export function EventCard({ id, name, description, date, location }: EventCardInterface) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/evento')
    }

    return (
        <EventCardContainer onClick={handleClick}>

                <img src="love.jpg" />

                <h1>
                    {name}
                </h1>
                
                <span>{location}</span>

                <p>
                    {new Date(date).toLocaleDateString('pt-BR')}
                </p>

        </EventCardContainer>
    )
}