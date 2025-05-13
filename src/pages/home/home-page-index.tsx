import { EventCardHome } from "../../components/event-card-home/event-card-home-index";
import { PhotoCard } from "../../components/photos-card/photos-card-index";
import { Carousel } from "./carousel/carousel-index";
import { HomePageContainer } from "./home-page-styles";


export function HomePage() {
    const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg']

    return (
        <HomePageContainer>
            <Carousel/>
            
            <div className="highlight">
                <h2>DESTAQUES</h2>
                <img src="/bannerlv.jpg" />
                <h4>Título do Destaque</h4>
                <p>Este é um texto de destaque</p>
                <a>Comprar ingresso</a>
            </div>

            <div className="week">
                <h2>ESSA SEMANA</h2>
                <div className="week-content" >
                    <EventCardHome />
                    <EventCardHome />
                    <EventCardHome />
                </div>
            </div>

            <div className="photos" >
                <div className="photo-title">
                    <h2>FOTOS COM A 314</h2>

                    <p>As melhores fotos com uma imersão que você nunca viu!</p>
                </div>

                <div className="eventCardPhoto">{
                    images.map((url, index) => 
                            <PhotoCard key={index} url={url}/>
                        )
                    }
                </div>

                <button>
                    Ver fotos
                </button>
            </div>
        </HomePageContainer>
    )
}