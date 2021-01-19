import Home from './components/home/Home';
import Grading from "@/components/Grading";
import Simulation from "@/components/Simulation";
import Result from "@/components/Result";
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
    },
    {
        path: '/result',
        component: Result,
        name: 'result'
    }
]