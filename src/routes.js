import Home from './components/home/Home';
import Grading from "@/components/Grading";
import Simulation from "@/components/Simulation";
export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/grading',
        component: Grading,
        name: 'grading'
    },
    {
        path: '/simulate',
        component: Simulation,
        name: 'simulate'
    }
]