import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { AuthLayout, RootLayout } from '../layouts';
import { CartPage, CategoriesPage, CheckoutPage, EditProductPage, LoginPage, NewCategoryPage, NewProductPage, ProductsPage } from "../pages";



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
                    {
                        path: 'checkout',
                        element: <CheckoutPage />
                    },
                ]
            },

            // AUTH
            {
                path:'auth',
                element: <AuthLayout/>,
                children: [
                    {
                        path: 'login',
                        element: <LoginPage/>
                    }
                ]
            }
        ]
    }
])