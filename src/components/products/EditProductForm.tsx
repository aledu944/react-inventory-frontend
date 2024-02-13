import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


import { IFullProduct } from '../../interfaces';
import { useCategoryStore, useProductStore } from '../../stores';
import { Input, Select, SelectItem, Textarea, Button } from '@nextui-org/react';
import { toast } from 'sonner';

interface Props {
    product: IFullProduct;
}


export const EditProductForm = ({ product }: Props) => {

    const navigate = useNavigate();
    const [image, setImage] = useState<File>();
    const [preImage, setPreImage] = useState(product?.image);
    const [isLoading, setIsLoading] = useState(false);

    const categories = useCategoryStore(state => state.categories);
    const editProduct = useProductStore(state => state.editProduct);
    const getCategories = useCategoryStore(state => state.getCategories);


    const handleFile = (e: any) => {
        const file = e.target.files[0];
        setImage(file)

        const preview = URL.createObjectURL(file);
        setPreImage(preview)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        setIsLoading(true);

        const { productName, description, stock, price, category_id } = e.target as HTMLFormElement;

        const productUpdate = {
            id: product.id.toString(),
            image: product.image,
            name: productName.value,
            description: description.value,
            stock: stock.value,
            price: price.value,
            category_id: category_id.value
        }

        if (Object.values(editProduct).includes('')) {
            toast.error('Datos incorrectos', {
                description: "Todos los campos deben estar llenos"
            })
            setIsLoading(false);

            return;
        }

        if ( product.image === '' && !image) {
            toast.error('Datos incorrectos', {
                description: "Agregue una imagen"
            })
            setIsLoading(false);

            return;

        }

        await editProduct(productUpdate, image!)

        setIsLoading(false);

        navigate('/admin/products')

    };
    
    

    useEffect(() => {
        if (categories.length === 0) getCategories();
    }, [])


    return (
        <section className='pt-8'>
            <form onSubmit={handleSubmit} className='container grid grid-cols-2'>

                <div className='space-y-4 w-full'>
                    <Input
                        size='sm'
                        label="Nombre"
                        placeholder="Nombre del producto"
                        name='productName'
                        defaultValue={ product?.name }
                    />

                    <Textarea
                        defaultValue={ product?.description }
                        name='description' 
                        label="Descripcion" 
                        placeholder='Agrega una descripcion del producto'></Textarea>

                    <Input
                        type='number'
                        name='stock'
                        size='sm'
                        defaultValue={ `${product?.stock}` }
                        label="Stock"
                        min={0}
                        placeholder="Stock disponible en inventario"
                    />


                    <Input
                        defaultValue={ `${product?.price}` }
                        type='number'
                        name='price'
                        size='sm'
                        label="Precio"
                        step='0.01'
                        placeholder="Precio del producto"
                    />

                    <Select
                        name='category_id'
                        label="Categorias"
                        placeholder="Selecciona una categoria"
                        selectedKeys={[`${product?.category?.id}`]}
                    >
                        {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                                {category.name}
                            </SelectItem>
                        ))}
                    </Select>

                    <Input
                        type="file"
                        accept='.webp, .png, .jpg'
                        onChange={handleFile}
                    />


                    <Button isLoading={isLoading} isDisabled={isLoading} type='submit' className='btn-primary' fullWidth>Guardar producto</Button>
                </div>

                <div className=' w-full'>
                    <img src={preImage}  className='max-w-[400px] mx-auto' />
                </div>


            </form>

        </section>
    )
}
