import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./pages/DcHeros";
import CalendarApp from "./pages/CalendarApp";
import HomeApp from "./pages/HomeApp";
import MarkdownApp from "./pages/MarkdownApp";
import CalculatriceApp from "./components/calculatrice/CalculatriceApp";
import Slider from "./pages/SliderApp";

const routes = [
    { path: "/", component: HomeApp },
    { path: "/dc-heros", component: DcHeros },
    { path: "/calendar", component: CalendarApp },
    { path: "/calculatrice", component: CalculatriceApp },
    { path: "/markdown", component: MarkdownApp },
    { path: "/slider", component: Slider },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;