<<<<<<< HEAD
import { OrderProduct } from "./order-product";
import { Product } from "./product";

export class Order {
    public id !: number;
    public customerId !: number;
    public detailsOrder !: OrderProduct[];
}

export { OrderProduct };
=======
import { Product } from "./product";

export class Order {
    public customerId !: number;
    public products !: Product;
}
>>>>>>> origin/master
