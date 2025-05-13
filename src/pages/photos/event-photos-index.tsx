import { EventsPhotosCard } from "../../components/events-photos-card/events-photos-card-index";
import { PhotosContainer } from "./event-photos-styles";
import SearchIcon from '@mui/icons-material/Search';

export function PhotosPage() {
    return (
        <PhotosContainer>

            <div className='searchBox'>
                <div className="Search">
                    <SearchIcon className="icon" />

                    <input type="text" placeholder="Search" prefix='aaaaa' pattern='aaaaa' title='aaaaa'/>
                </div>

                <p>Exemplo: love com voc...</p>
            </div>


            <div className="content">
                <EventsPhotosCard />
                <EventsPhotosCard />
                <EventsPhotosCard />
                <EventsPhotosCard />
                <EventsPhotosCard />
            </div>

        </PhotosContainer>
    )
}