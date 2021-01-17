import Home from './components/home/Home';
import Grading from "@/components/Grading";
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
    }
]