import { useState } from "react";

import { useCategoryStore } from "../../stores";

import { LuPen } from "react-icons/lu";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input } from "@nextui-org/react";

interface Props {
    categoryId: string | number;
    categoryName: string;
}

export const EditCategoryModal = ({ categoryId, categoryName }: Props) => {

    const [name, setName] = useState(categoryName);
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const getCategories = useCategoryStore(state => state.getCategories);
    const updateCategory = useCategoryStore(state => state.updateCateogry);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        setIsLoading(true);

        await updateCategory( categoryId, name );

        setIsLoading(false);
        
        await getCategories();

        onClose();
    }


    return (
        <>
            <Button onPress={onOpen} isIconOnly color='primary' variant='light' startContent={<LuPen size={18} />} />

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Editar categoria</ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        label="Nombre"
                                        placeholder='Ingresa un nombre para la categoria'
                                        defaultValue={categoryName}
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />


                                    <div className="mt-6 mb-4 w-full flex justify-end">

                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Cancelar
                                        </Button>
                                        <Button isLoading={isLoading} isDisabled={isLoading} type="submit" className='btn-primary'>Guardar</Button>
                                    </div>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
