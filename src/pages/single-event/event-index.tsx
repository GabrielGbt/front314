import { ArrowForward } from "@mui/icons-material";
import { EventPageContainer } from "./event-styles";
import { formatDateToBrazil } from "../../utils/dateFormat";


interface Event {
    id: string;
    image: string;
    name: string;
    description: string;
    date: number;
    location: string;
    link: string;
    sectors: Sector[];
    points: Point[];
}

interface Sector {
    id: string;
    name: string;
    price: string;
}

interface Point {
    id: string;
    title: string;
    text: string;
}



export function EventPage() {
    const event: Event = {
        id: "1",
        name: "Love com você",
        description: "This is a description of the event",
        date: 1643723400,
        location: "Location 1",
        link: "https://localhost:5173/evento",
        image: "/bannerlv.jpg",
        sectors: [
            {
                id: "1",
                name: "Camarote residencial - masculino",
                price: "80,00"
            },
            {
                id: "3",
                name: "Camarote residencial - Feminino",
                price: "50,00"
            },
            {
                id: "2",
                name: "Pista - masculino",
                price: "40,00"
            },
            {
                id: "4",
                name: "Pista - feminino",
                price: "20,00"
            }
        ],
        points: [
            {
                id: "1",
                title: "Descrição do evento",
                text: "Chegou em Divinópolis a festa mais RAIZ do Brasil! Agora o petêco vai cair a foia! Prepare-se para uma experiência única, comandada por Nattanzinho com muita música boa. Só pra quem é raiz de verdade! \n\n Em breve mais informações.",
            },
            {
                id: "2",
                title: "LOCAL",
                text: "Localizado no centro da cidade, fácil acesso.",
            },
            {
                id: "3",
                title: "PREÇOS",
                text: "Preços acessíveis, para todos.",
            },
            {
                id: "4",
                title: "CONTATO",
                text: "Entre em contato conosco, para mais informações.",
            },
            {
                id: "5",
                title: "INGRESSOS MEIA ENTRADA SOCIAL",
                text: "TODOS os participantes poderão utilizar o benefício da MEIA ENTRADA mediante a entrega de 1kg de alimento NA ENTRADA DO EVENTO.",
            },
            {
                id: "6",
                title: "POLÍTICA DE COMPRA E REEMBOLSO",
                text: "•⁠⁠Os ingressos são pessoais e intransferíveis, mesmo através de procuração registrada em cartório; \n•⁠Entra em vigor o Art. 49 da Lei 8.078/09 do Código de Defesa do Consumidor que garante um prazo legal de 7 dias para o consumidor desistir da compra, sendo realizado reembolso integral do produto pago, desde que seja 48 horas antes do evento;  \n•⁠O não comparecimento ao evento invalidará o ingresso e não permitirá reembolso."
            },
            {
                id: "7",
                title: "EDIÇÃO DE PARTICIPANTES",
                text: "Você poderá editar o participante de um ingresso apenas uma vez. Essa opção ficará disponível até 24 horas antes do início do evento."
            }
        ]
    }

    return (
        <EventPageContainer>
            <div className="init">
                
                <img src={event.image}/>

                <div className="intro">
                    <h1>
                        {event.name}
                    </h1>
                    
                    <h4>
                        {event.description}
                    </h4>

                    <h3>
                        {formatDateToBrazil(event.date)}
                    </h3>

                    <button>
                        Comprar Ingresso
                        <ArrowForward fontSize="large" />
                    </button>
                </div>

            </div>

            <div className="content">

                <div className="left">
                    <h2>
                        {event.name}
                    </h2>
                    
                    {
                        event.points.map((e) => 
                            <div>
                                <h3>{e.title}</h3>
                                <p>{e.text}</p>
                            </div> 
                        )
                    }
                </div>



                <div className="right" >
                    <div className="title">
                        <h2>
                            Ingressos
                        </h2>
                    </div>

                    {event.sectors.map((e) => 
                    <>
                        <div className="sector-unit">
                            <h4>{e.name}</h4>
                                <h3>
                                    R$ {e.price}
                                </h3>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </EventPageContainer>
    )
}