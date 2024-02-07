import { formatDate } from "../../lib";
import { ICategory } from "../../interfaces";

import { CategoriesTableActions } from "..";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

interface Props {
    categories: ICategory[]
}

export const CategoriesTable = ({ categories }: Props) => {
    return (
        <section className="pt-8">
            <Table className="container" width={20} aria-label="Tabla de categorias">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Creación</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        categories.map((category) => (
                            <TableRow key={category.id}>
                                <TableCell>{category.id}</TableCell>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{ formatDate(category.created_at) }</TableCell>
                                <TableCell>
                                    <CategoriesTableActions
                                        categoryName={ category.name }
                                        categoryId={ category.id }
                                    />
                                </TableCell>
                            </TableRow>

                        ))
                    }

                </TableBody>
            </Table>
        </section>
    )
}
