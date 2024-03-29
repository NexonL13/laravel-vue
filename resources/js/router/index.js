import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("../pages/Home.vue") },
    { path: "/login", component: () => import("../pages/Login.vue") },
    { path: "/registration", component: () => import("../pages/Registration.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
