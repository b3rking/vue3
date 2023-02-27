import { createRouter, createWebHashHistory } from "vue-router";
import DcHeros from "./components/DcHeros";
import CalendarApp from "./components/CalendarApp";

const routes = [
    { path: "/dc-heros", component: DcHeros },
    { path: "/calendar", component: CalendarApp },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
