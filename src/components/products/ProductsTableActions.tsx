
import { Button } from '@nextui-org/react'
import { LuEye, LuPen, LuTrash2 } from 'react-icons/lu'

export const ProductsTableActions = () => {
    return (
        <>
            <Button
                isIconOnly
                color='primary'
                variant='light'
                startContent={<LuEye size={18} />}
            />

            <Button
                isIconOnly
                color='success'
                variant='light'
                startContent={<LuPen size={18} />}
            />

            <Button
                isIconOnly
                color='danger'
                variant='light'
                startContent={<LuTrash2 size={18} />}
            />
        </>
    )
}
