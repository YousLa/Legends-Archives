import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Champions from "../components/champions/Champions";
import CardChampion from "../components/champions/cardChampion/CardChampion";
import GameMode from "../components/gameMode/GameMode";
import NotFound from "../components/notFound/NotFound";
import Ranked from "../components/ranked/Ranked";
import Summoner from "../components/summoner/Summoner";
import Player from "../components/player/Player";

const router = createBrowserRouter([
    {
        path: "",
        element: <Home />
    },
    {
        path: "champions",
        children: [
            {
                path: "",
                element: <Champions />
            },
            // {
            //     path: ":id",
            //      element : <CardChampion />,
            // }
        ]
    },
    {
        path: "gamemode",
        element: <GameMode />
    },
    {
        path: "ranked",
        element: <Ranked />
    },
    {
        path: "summoner",
        element: <Summoner />
    },
    {
        path: "player",
        element: <Player />
    },
    {
        path: "notfound",
        element: <NotFound />
    },
    {
        path: "*",
        element: <Navigate to="/notfound" />
        // On redirige vers la route notfound
    }
])

export default router;