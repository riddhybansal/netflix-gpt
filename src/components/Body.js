import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])

   

   
    return (
            <div className="overflow-x-none">
                <RouterProvider router={appRouter}></RouterProvider>
            </div>
       
    )
}

export default Body;