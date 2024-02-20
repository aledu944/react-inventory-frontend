import { StateCreator, create } from "zustand";
import { ICartProduct, ISimpleProduct } from "../../interfaces";
import { toast } from "sonner";
import { persist } from "zustand/middleware";


interface CartState {
    cart: ICartProduct[];
    total: number;
}

interface Actions {

    calcTotal: () => void;
    cleanCart: () => void;
    removeProductToCart(id: number): void
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
    addProductToCart: (product: ISimpleProduct, quantity?: number) => void;
}

const storeApi: StateCreator<CartState & Actions> = (set, get) => ({
    cart: [],
    total: 0,

    addProductToCart: (product: ISimpleProduct) => {
        const { cart, incrementQuantity, calcTotal } = get()

        const productInCart = cart.some(
            (item) => item.id === product.id
        );

        if (!productInCart) {
            set({
                cart: [...cart, { id: product.id, quantity: 1, price: product.price, image: product.image, name: product.name }],
            });

            calcTotal();
            toast.success(`${product.name} se agergo al carrito`);
            return;
        }

        incrementQuantity( product.id );

    },

    incrementQuantity( id: number ){
        const { cart, calcTotal } = get()

        const updateCartProducts = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }

            return item;
        })

        
        set({ cart: updateCartProducts })
        calcTotal();
    },

    decrementQuantity( id: number ){
        const { cart, calcTotal } = get()

        const updateCartProducts = cart.map((item) => {
            
            if( item.quantity === 1 ){
                return item;
            }

            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            }

            return item;
        })

        
        set({ cart: updateCartProducts })
        calcTotal();
    },

    removeProductToCart( id: number ){
        const { cart, calcTotal } = get()

        const updateCartProducts = cart.filter((item) =>  item.id != id );

        set({ cart: updateCartProducts });
        calcTotal();

    },

    cleanCart: () => {
        set({ cart: [], total: 0 });
    },

    calcTotal: () => {
        const { cart } = get();
        let subTotal = 0;

        cart.forEach((item) => {
            subTotal += +item.price * item.quantity
        })

        set({ total: subTotal });
    }
})


export const useCartStore = create<CartState & Actions>()(
    persist(
        storeApi,
        { name: 'cart-storage' }
    )
);