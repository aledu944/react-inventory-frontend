import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { RootLayout } from '../layouts';
import { CategoriesPage, NewCategoryPage, ProductsPage } from "../pages";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // DASHBOARD
            {
                path: 'admin',
                element: <RootLayout />,
                children: [
                    {
                        path: 'products',
                        element: <ProductsPage />
                    },
                    {
                        path: 'categories',
                        element: <CategoriesPage />
                    },
                    {
                        path: 'categories/new',
                        element: <NewCategoryPage />
                    }
                ]
            }
        ]
    }
])