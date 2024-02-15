import { Input, Button } from '@nextui-org/react';
import { useAuthStore } from '../../stores';
import { useState } from 'react';

export const LoginForm = () => {

    const login = useAuthStore(state => state.login);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const { email, password } = e.target as HTMLFormElement;
        
        await login(email.value, password.value);

        setIsLoading(false);
        
        
    }


    return (
        <div className='login__form'>
            <h3 className='font-bold text-2xl mb-4'>Inicia Sesion</h3>

            <form className='space-y-4' onSubmit={handleSubmit}>
                
                <Input
                    name='email'
                    isRequired
                    type='email'
                    size='sm'
                    label="Correo electronico"
                />
                
                <Input
                    type='password'
                    name='password'
                    isRequired
                    size='sm'
                    label="Contraseña"
                />

                <Button isLoading={ isLoading } isDisabled={ isLoading } type='submit' className='btn-primary' fullWidth>Iniciar Sesion</Button>
            </form>
        </div>
    )
}
