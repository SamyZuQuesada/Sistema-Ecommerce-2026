//Sirve para mostrar las fechas de una forma más bonita

export function formatDate(date: string): string {
    return new Intl.DateTimeFormat("es-CR").format(new Date(date));
}