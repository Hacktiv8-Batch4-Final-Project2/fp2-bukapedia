import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useAdmin = () => {
    const [qty, setQty] = useState(0)
    const [id, setId] = useState(0)
    const navigate = useNavigate()
    const isAdmin = JSON.parse(localStorage.getItem('user'))
    const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products')))

    const handleChange = (e) => {
        setQty(e.target.value)
    }

    const handleSave = () => {
        const newProducts = products.map((product) => {
        if (product.id === id) {
            product.qty = Number(qty)
        }
        return product
        })
        setProducts(newProducts)
        localStorage.setItem('products', JSON.stringify(newProducts))
    }
    
    useEffect(() => {
        if (!isAdmin?.admin) {
        navigate('/')
        }
    }, [isAdmin, navigate])
    
    return { products, handleChange, handleSave, setId }
}

export default useAdmin