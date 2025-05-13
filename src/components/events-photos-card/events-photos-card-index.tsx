import { EventsPhotosCardContainer } from "./events-photos-card-styles";

export function EventsPhotosCard() {
    
    return (
        <EventsPhotosCardContainer>
            <img src="loveart.png" />

            <h4>
                love com vc <br/> {new Date().getFullYear()}
            </h4>
        </EventsPhotosCardContainer>
    )
}