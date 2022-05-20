import { useEffect, useState } from "react"
import { API } from "../.."

export const ProductList = () => {
    const [products, assignProducts] = useState([])

    useEffect(
        () => {
            fetch (`${API}/products?_expand=productType`)
                .then(res => res.json())
                .then(
                    (products) => {
                        assignProducts(products)
                    }
                )
        },
        []
    )

    return (
        <>
            {
                products.map(
                    (productObj) => {
                        return <p key={`products--${productObj.id}`}>{productObj.productType.type}: {productObj.name} costs ${productObj.price}.</p>
                    }
                )
            }
        </>
    )
}