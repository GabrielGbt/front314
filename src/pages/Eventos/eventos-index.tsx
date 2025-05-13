import SearchIcon from '@mui/icons-material/Search';
import { EventCard } from "../../components/event-card/event-card-index";
import { EventosContainer } from "./eventos-style";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Evento {
    id: number;
    name: string;
    description: string;
    date: number;
    location: string;
}

export function Eventos() {
    const list: Evento[]  = [
        {
          "id": 1,
          "name": "Tech Innovators Conference",
          "description": "A gathering of the brightest minds in technology and innovation.",
          "date": 1755277200000,
          "location": "São Paulo, SP"
        },
        {
          "id": 2,
          "name": "Art & Design Expo",
          "description": "An exhibition showcasing contemporary art and cutting-edge design.",
          "date": 1756753200000,
          "location": "Rio de Janeiro, RJ"
        },
        {
          "id": 3,
          "name": "Global Climate Summit",
          "description": "Leaders and activists discuss global environmental challenges and solutions.",
          "date": 1758452400000,
          "location": "Brasília, DF"
        },
        {
          "id": 4,
          "name": "Startup Pitch Night",
          "description": "Early-stage startups pitch to a panel of investors and mentors.",
          "date": 1753497000000,
          "location": "Curitiba, PR"
        },
        {
          "id": 5,
          "name": "International Food Festival",
          "description": "Enjoy dishes and drinks from over 40 countries.",
          "date": 1754990400000,
          "location": "Salvador, BA"
        },
        {
          "id": 6,
          "name": "Music in the Park",
          "description": "Live performances by local and international artists.",
          "date": 1756581600000,
          "location": "Porto Alegre, RS"
        },
        {
          "id": 7,
          "name": "AI & Machine Learning Workshop",
          "description": "Hands-on sessions with industry experts in artificial intelligence.",
          "date": 1758315000000,
          "location": "Recife, PE"
        },
        {
          "id": 8,
          "name": "Community Hackathon",
          "description": "48 hours of coding to solve local issues with tech.",
          "date": 1762147200000,
          "location": "Florianópolis, SC"
        },
        {
          "id": 9,
          "name": "Digital Marketing Summit",
          "description": "Explore the latest strategies and tools in digital marketing.",
          "date": 1763124000000,
          "location": "Fortaleza, CE"
        },
        {
          "id": 10,
          "name": "Book Fair & Author Talks",
          "description": "Meet authors, browse books, and attend readings.",
          "date": 1757488800000,
          "location": "Belo Horizonte, MG"
        },
        {
          "id": 11,
          "name": "Yoga & Wellness Retreat",
          "description": "Rejuvenate your mind and body in a peaceful environment.",
          "date": 1754638800000,
          "location": "Ilhabela, SP"
        },
        {
          "id": 12,
          "name": "E-Sports Championship Finals",
          "description": "Watch top teams battle it out in the arena.",
          "date": 1764585600000,
          "location": "Manaus, AM"
        }
      ]
      
      

    return (
        <EventosContainer>

            <div className='searchBox'>
                <div className="Search">
                    <SearchIcon className="icon" />

                    <input type="text" placeholder="Search" prefix='aaaaa' pattern='aaaaa' title='aaaaa'/>
                </div>

                <p>Exemplo: love com voc...</p>
            </div>

            <div className="list">
                {
                    list.map((e, index) => <EventCard key={index} id={e.id} name={e.name} description={e.description} date={e.date} location={e.location} />)
                }
            </div>

            <div className="steps">
                <Stack spacing={5} direction="row" sx={{ color: "white" }}>
                    <Pagination count={12} color='primary' variant='outlined' 
                        sx={{
                        '& .MuiPaginationItem-root': {
                            color: '#888', // non-selected text color
                            borderColor: '#ccc',
                        },
                        '& .Mui-selected': {
                            color: '#fff',
                            backgroundColor: '#1976d2',
                            borderColor: '#1976d2',
                        }
                        }} />
                </Stack>
            </div>
        </EventosContainer>
    )
}