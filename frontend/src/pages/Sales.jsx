import { useState, useEffect } from "react";
import { useAuth } from '../contexts/AuthContext';
import { createSale, getAllSales } from "../services/salesService";

export default function Sales() {
    const { user } = useAuth()

    const [salesList, setSalesList] = useState([])
    const [sale, setSale] = useState({user_id: '', amount: '', description: ''})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchSales() {
            try {
                const result = await getAllSales(user.id)

                if(result) {
                    setSalesList(Array.isArray(result.data) ? result.data : [])
                }

                console.log(result)
            } catch(err) {
                console.error("Error fetching sales: ", err.message)
            } finally {
                setLoading(false)
            }
        }

        // fetchSales()
        console.log(user)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const newSaleData = {
                user_id: user.id,
                amount: amount,
                description: description
            }

            const response = await createSale(newSaleData)

            if(response.success) {
                alert("Sale created successfully")

                setSale(newSaleData)
                fetchSales()
            }
        } catch(err) {
            console.error(`Error creating sale: ${err.message}`)
            alert("Failed to create sale")
        }
    }

    if(loading) return <p>Loading sales data...</p>

    return (
        <div>
            <h1>Manage Sales</h1>

            {/* <form onSubmit={handleSubmit}>
                <h3>Add New Sale</h3>

                <div>
                    <label>Amount: </label> <br />
                    <input 
                        type="number"
                        min={1}
                        placeholder="e.g. 150"
                        value={sale.amount}
                        onChange={(e) => setSale({...sale, amount: e.target.value})}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Description:</label> <br />
                    <input
                        type="text" 
                        placeholder="e.g. Sold a laptop"
                        value={sale.description}
                        onChange={(e) => setSale({...sale, description: e.target.value})}
                        required
                    />
                </div>

                <br />

                <button type="submit">Submit</button>
            </form> */}

            <hr />

            <h3>Sales History</h3>
            <table border={1} cellPadding={10} style={{ width: '100$', borderCollapse: 'collapse'}}>
                <thead>
                    <tr style={{ background: '#eee' }}>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {salesList.length === 0 ? (
                        <tr colSpan="4" style={{ textAlign: 'center' }}>
                            <td>No sales found. Add one above!</td>
                        </tr>
                    ) : (
                        salesList.map((sale) => {
                            <tr key={sale.id}>
                                <td>{sale.id}</td>
                                <td>{sale.amount}</td>
                                <td>{sale.description}</td>
                                <td>{sale.date}</td>
                            </tr>
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}