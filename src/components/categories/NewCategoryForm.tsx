import { FormEvent, useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useCategoryStore } from '../../stores';

export const NewCategoryForm = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const createCategory = useCategoryStore(state => state.createCateogry)
    const getCategories = useCategoryStore(state => state.getCategories)

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        setIsLoading(true);

        if (name.trim() === '') {
            toast.error('Error al guardar', {
                description: "Debe completar todos los campos",
                
            });
            setIsLoading(false);
            return;

        }

        await createCategory(name);
        setIsLoading(false);
        
        await getCategories();
        navigate('/admin/categories')

    };


    return (
        <section className='pt-8'>
            <form onSubmit={handleSubmit} className='container space-y-4'>
                <Input
                    label="Nombre"
                    placeholder='Ingresa un nombre para la categoria'
                    value={name}
                    onChange={e => setName(e.target.value) }
                />

                <Button isLoading={ isLoading } isDisabled={ isLoading } type="submit" className='btn-primary'>Guardar</Button>


            </form>
        </section>
    )
}
