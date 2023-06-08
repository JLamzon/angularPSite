import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    // providers: [ProductService]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    starRating: string = 'Five Star Rating'
    showRating: boolean = false;

    //get and set:  similar to use state, it allows you to (set) a value and (get) it down the line
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log('In Setter:', value)
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];


    products: IProduct[] = [];

    //this toggles the text on the image to Show or Hide.  we will be assigning this function to the show image button.  
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    //when the component loads, text in here is used to filter the lost of products in the search field
    ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
        this.listFilter = '';
    };

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
    };

    onRatingClicked(message: string): void {
      this.starRating = message
    };

    constructor(private productService: ProductService){

    }
}