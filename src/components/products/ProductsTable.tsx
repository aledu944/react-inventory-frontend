import { formatDate } from "../../lib";
import { ISimpleProduct } from '../../interfaces/products/products-response';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

interface Props {
    products: ISimpleProduct[]
}

export const ProductsTable = ({ products }: Props) => {

    const baseUrlImage = import.meta.env.VITE_IMAGE_URL

    return (
        <section className="pt-8">
            <Table className="container" width={20} aria-label="Tabla de productos">
                <TableHeader>
                    <TableColumn>Imagen</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Categoria</TableColumn>
                    <TableColumn>Precio</TableColumn>
                    <TableColumn>Stock</TableColumn>
                    <TableColumn>Creación</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <img className="max-w-14" src={ baseUrlImage + product.image } alt={ product.name } />
                                </TableCell>
                                <TableCell>{ product.name }</TableCell>
                                <TableCell>{ product.category.name }</TableCell>
                                <TableCell>{ product.price }</TableCell>
                                <TableCell>{ product.stock }</TableCell>
                                <TableCell>{ formatDate(product.createdAt) }</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>

                        ))
                    }

                </TableBody>
            </Table>
        </section>

    )
}
