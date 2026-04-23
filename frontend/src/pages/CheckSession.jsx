import api from 'axios'
import { getAllSales } from '../services/salesService'

export default function CheckSession() {

    const handleClick = async (e) => {
        try {
            const response = await getAllSales(1)
            alert('Session validated')
            console.log(response.data)
            console.log(response)
        } catch(err) {
            console.error(err.message)
        }
    }

    return (
        <button onClick={handleClick}>Click me</button>
    )
}