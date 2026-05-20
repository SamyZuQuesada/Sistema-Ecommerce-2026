export type OrderType = {
    id: number;
    customerName: string;
    total: number;
    status: 'PENDING' | 'IN_PROGRESS' | 'CANCELLED';
    createdAt: string; //fecha y hora: buscar libreria para esto
}