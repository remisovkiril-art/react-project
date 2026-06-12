/*
import './App.css'
import {type ChangeEvent, useState} from 'react'
function App() {
    // const handlerClick = (): void => {
    //   console.log('clicked')
    // }
    const [value, setValue] = useState<number>(50)
    return (
        <>
            <p>Value: {value}</p>
            <button onClick={(): void => {
                console.log('clicked')
                if (value + 10 <= 100) {
                    setValue(value + 10)
                }
            }}>Up</button>
            <button onClick={(): void => {
                console.log('clicked')
                if (value - 10 >= 0) {
                    setValue(value - 10)
                }
            }}>Down</button>
        </>
    )
}
export default App
*/


/*
import './App.css'
import {type ChangeEvent, useState} from 'react'
import type {ProductType} from "./types/ProductType.ts";
function App() {
    const [product, setProduct] = useState<ProductType>({
        title: "Bread",
        price: 35,
        count: 1,
        is_active: true
    })
    function changeTitle(e: ChangeEvent<HTMLInputElement>) {
        setProduct({...product, title: e.target.value})
    }
    function changePrice(e: ChangeEvent<HTMLInputElement>) {
        setProduct({...product, price: +e.target.value})
    }
    function changeCount(e: ChangeEvent<HTMLInputElement>) {
        setProduct({...product, count: +e.target.value})
    }
    function changeActive(e: ChangeEvent<HTMLInputElement>) {
        setProduct({...product, is_active: e.target.checked})
    }
    return (
        <>
            <h3>Product</h3>
            <p>Title: {product.title} Price: {product.price}</p>
            <p>Count: {product.count}</p>
            <p>Status: {product.is_active ? "Active" : "Non active"}</p>
            Title: <input type="text" value={product.title} onChange={changeTitle} />
            Price: <input type="number" value={product.price} onChange={changePrice}/>
            Count: <input type="number" value={product.count} onChange={changeCount}/>
            Active: <input type="checkbox" checked={product.is_active} onChange={changeActive}/>
        </>
    )
}
export default App
*/



/*import './App.css'
import type { CardType } from "./types/CardType.ts";
function App() {
    const cards: CardType[] = [
        {
            title: "React Basics",
            description: "Вступ до React та створення компонентів.",
            views: 1200,
            is_show: true,
        },
        {
            title: "TypeScript Fundamentals",
            description: "Основи роботи з типами в TypeScript.",
            views: 980,
            is_show: true,
        },
        {
            title: "Bootstrap Layout",
            description: "Створення адаптивних макетів за допомогою Bootstrap.",
            views: 750,
            is_show: false,
        },
        {
            title: "Django REST API",
            description: "Розробка REST API на Django REST Framework.",
            views: 1500,
            is_show: true,
        },
        {
            title: "Python for Data Analysis",
            description: "Обробка та аналіз даних за допомогою Python.",
            views: 2100,
            is_show: false,
        },
    ];
    return (
        <div>
            <h2>Список карток</h2>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Views</th>
                    <th>Is_show</th>
                </tr>
                </thead>
                <tbody>
                {cards.map((card: CardType, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{card.title}</td>
                            <td>{card.description}</td>
                            <td>{card.views}</td>
                            <td>{card.is_show ? "Active" : "Non active"}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
export default App

 */
import './App.css'
//import Counter from "./components/Counter/Counter";
import Counter from "./components/Counterpr/Counter";

import type {ProductType} from "./types/ProductType.ts";

function App() {
    const products:ProductType[] = [
        {title:"bread",price:40},
        {title:"milk",price:50},
    ]
    const colors:string[] = ["white", "black", "green", "blue"];
    return(
        <>
            <Counter></Counter>
            {products.map((product:ProductType, index:number)=>{
                return(<p key={index}>Title: {product.title} Price: {product.price}</p>)
            })}
            <ul>{colors.map((color:string, index:number)=>{
                return(<li key={index}>{color}</li>)
            })}</ul>
        </>
    )

}

export default App
