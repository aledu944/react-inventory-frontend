import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { RootLayout } from '../layouts';
import { CartPage, CategoriesPage, EditProductPage, NewCategoryPage, NewProductPage, ProductsPage } from "../pages";



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
                        path: 'products/new',
                        element: <NewProductPage />
                    },
                    {
                        path: 'products/:slug/edit',
                        element: <EditProductPage />
                    },
                    {
                        path: 'categories',
                        element: <CategoriesPage />
                    },
                    {
                        path: 'categories/new',
                        element: <NewCategoryPage />
                    },
                    {
                        path: 'cart',
                        element: <CartPage />
                    },
                ]
            }
        ]
    }
])