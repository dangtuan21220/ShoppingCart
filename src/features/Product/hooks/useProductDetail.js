import productApi from "api/productApi";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       (async () => {
        try {
            setLoading(false);
            const result = await productApi.get(productId);
            setProduct(result);
        } catch (error) {
            console.log('Failed to fetch product', error);
        }
       })()
        
    }, [productId])

    return { product, loading };
}