export const formatDate = (fechaString: string): string => {
    const fecha = new Date(fechaString);
    
    // Obtener los componentes de la fecha
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Sumar 1 porque los meses van de 0 a 11
    const año = fecha.getFullYear();
    
    // Formatear los componentes en un string
    const fechaFormateada = `${dia < 10 ? '0' + dia : dia}-${mes < 10 ? '0' + mes : mes}-${año}`;

    return fechaFormateada;
}