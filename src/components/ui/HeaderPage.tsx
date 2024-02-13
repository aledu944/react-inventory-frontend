import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';

interface Props {
    title: string;
    description: string;

    btnTitle: string;
    btnPath: string;
}

export const HeaderPage = ({ btnPath, btnTitle, description, title }: Props) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(btnPath);
    }

    return (
        <section className='pt-8'>
            <div className='header'>

                <div>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p>{description}</p>
                </div>

                <Button className='btn-primary' onClick={handleNavigate} >{btnTitle}</Button>

            </div>
        </section>
    )
}
