export const productList: Product[] = [
    {id: 1, name: 'Example1', price: 10, description: 'Description of example1'},
    {id: 2, name: 'Example2', price: 20, description: 'Description of example2'},
    {id: 3, name: 'Example3', price: 30, description: 'Description of example3'},
    {id: 4, name: 'Example4', price: 40, description: 'Description of example4'},
    {id: 5, name: 'Example5', price: 50,},
]

export interface Product{
    id: number | string;
    name: string;
    price: number;
    description?: string;
}