import { EventCardHomeContainer } from "./event-card-home-styles";

export function EventCardHome() {
    return (
        <EventCardHomeContainer>
            <img src="/love.jpg" />
            <h2>Título do Evento</h2>
            <p>Data do Evento: dd/mm/aaaa</p>
            <p>Local: Local do Evento</p>
        </EventCardHomeContainer>
    )
}