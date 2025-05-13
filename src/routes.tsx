import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./layout/app-layout";
import { HomePage } from "./pages/home/home-page-index";
import { Eventos } from "./pages/Eventos/eventos-index";
import { EventPage } from "./pages/single-event/event-index";
import { PhotosPage } from "./pages/photos/event-photos-index";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/eventos", element: <Eventos /> },
            { path: "/evento", element: <EventPage /> },
            { path: "/fotos", element: <PhotosPage /> },
        ]
    }
])