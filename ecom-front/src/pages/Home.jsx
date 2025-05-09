import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <header>
                <h1>SHOP.CO</h1>
                <div>
                    <label for="shop">Shop</label>
                    <select name="shop" id="shop"> 
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                        <option value="party">Party</option>
                        <option value="gym">Gym</option>
                    </select>
                </div>
            </header>
            <body>

            </body>
            <footer>

            </footer>
        </div>
    )
}