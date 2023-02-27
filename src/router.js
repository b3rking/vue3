import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./components/DcHeros";
import CalendarApp from "./components/CalendarApp";
import HomeApp from "./components/HomeApp";

const routes = [
    { path: "/", component: HomeApp },
    { path: "/dc-heros", component: DcHeros },
    { path: "/calendar", component: CalendarApp },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
