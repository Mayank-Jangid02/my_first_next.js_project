import ProductList from "./productList";
import { use } from "react";
export default async function Product({searchParams}: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }){ 
   
    const searchparam=use(searchParams);
  
    console.log(searchparam);
    console.log( "");
    return (
        <div>
            <ProductList/>
            <h1>Product  </h1>
        </div>
    );

}