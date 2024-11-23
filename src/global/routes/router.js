import { createBrowserRouter } from "react-router-dom";
import DefalultLayout from "../layouts/DefalultLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefalultLayout />
    
    }
]);

export default router;