import './ordersInput.css';

export default function OrdersInput(){
    return <div className="search-Container">
        <input type="text" placeholder="search product name" />
        <img src="/search_24px.png" alt="search icon" />
    </div>
}