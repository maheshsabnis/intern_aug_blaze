import React from 'react';

const CallAjax=({products})=>{
    if(products === undefined || products.length === 0) {
        return `No Records to display`;
    }
    return(
    <div>
        <ul>
            {
                products.map((prd,idx)=>(
                    <li key={idx}>{prd.ProductName}</li>
                ))
            }
        </ul>
    </div>);
};


// the function  to manage the ajax call
export async function getStaticProps(){
    console.log(`Calling getStaticProps()`);
    const response = await fetch("https://apiapptrainingnewapp.azurewebsites.net/api/Products");
    const products = await response.json();
    console.log(`Receibed Data ${JSON.stringify(products)}`);
    // {props:{products}}, the products will be directly passed as props
    return {
        props: {
             products
        }
    };

}


export default CallAjax;