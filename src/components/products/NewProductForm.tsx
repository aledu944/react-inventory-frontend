import { useEffect, useState } from 'react';

import { useCategoryStore, useProductStore } from '../../stores';
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const NewProductForm = () => {


    const navigate = useNavigate();
    const [image, setImage] = useState<File>();
    const [preImage, setPreImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const categories = useCategoryStore(state => state.categories);
    const createProduct = useProductStore(state => state.createProduct);
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

        const product = {
            name: productName.value,
            description: description.value,
            stock: stock.value,
            price: price.value,
            category_id: category_id.value
        }

        if (Object.values(product).includes('')) {
            toast.error('Datos incorrectos', {
                description: "Todos los campos deben estar llenos"
            })
            setIsLoading(false);

            return;
        }

        if (!image) {
            toast.error('Datos incorrectos', {
                description: "Agregue una imagen"
            })
            setIsLoading(false);

            return;

        }

        await createProduct(product, image!)

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
                    />

                    <Textarea name='description' label="Descripcion" placeholder='Agrega una descripcion del producto'></Textarea>

                    <Input
                        type='number'
                        name='stock'
                        size='sm'
                        label="Stock"
                        min={0}
                        placeholder="Stock disponible en inventario"
                    />


                    <Input
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
                    >
                        {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                                {category.name}
                            </SelectItem>
                        ))}
                    </Select>

                    <Input
                        type="file"
                        // accept='.webp, .png, .jpg'
                        onChange={handleFile}
                    />


                    <Button isLoading={ isLoading } isDisabled={ isLoading } type='submit' className='btn-primary' fullWidth>Guardar producto</Button>
                </div>

                <div className=' w-full'>
                    <img src={preImage} alt="" className='max-w-[400px] mx-auto' />
                </div>


            </form>
        </section>
    )
}
