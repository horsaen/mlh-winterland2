import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import styles from './Recipes.module.css'

import { MdOutlineLibraryAdd } from 'react-icons/md'

const holiday = [
    {
        label: "Italian Egg Drop Soup",
        image: "https://edamam-product-images.s3.amazonaws.com/web-img/ac5/ac5b119a7385589954808fe70a9d23c7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFOC9pV2JWUfUfydaO0KLJINgSLn9l63NBdzcsQtEvUJAiAxfAS7gBbNZJjfTD%2BFhfCDOh4v95XYXVL3kA%2BPTR0S%2BCrVBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMEmlIrUT%2Ft4QoMS%2B%2BKqkE1sLoS%2B1c06s%2F2fKhkAl4Q2xylA%2BJoQwcdp28WflbwV%2BLqBr3W4I4XVEFxQ33hBbA54ef4QqZrNhNn3M%2BoKC13pNLr5xhL7I%2F66efYnd8EdTYG9Gp4v7qmdtcHnFWDdDrVcfOf1iWJACjnfGO0sgFA%2F0bglr7iS%2FS8C7FLuyig6F5uJR51%2B%2B4KMszWp6vctSjGPVfi8mUfPe8ouL%2Fgjqai1cjIE2uz81DpgugYW6ci07Td2%2BYYr6tecFrZeUVc0dUJ5b4gaYRBdCUYQ9kFJaPit9tuLzEQKgpQsjhQKfVKW9WNBmKXYoSIDxfOPZnTgLcjob1gDCqnMQZ0%2FQLPiaKWXLCI5VT8p0g7sj%2BUYkNgktozgQzdffXDVM4oTLc8EPXUQDmnWuvYYIm8TdPkDNX3zV35kFEFGzck9DcnUkIe2HFSSaq17MrEnKBV6ibemRPQtknBLHB9eMbR2G0J3NHjUQP9qlDbsTQRa960cCn%2BfS6JsXUH2MY1TVJoGOemoXgIe444FJmRFnZyX4siDnJqeRT8QEuRB81queUS9Gft9yZGNRvZ1RddxpjYTVdiQ8g0GJClwOnitFyD7KyUDo%2FixWYDbgG%2BLyA%2F67VKPZCl5S9cNv%2FtO3JVmD%2B2e48NXu15lKgMorkVIDt1%2BJxNMs3owPaZ51cPtiyX3FlgFGEm74g18b0WXZgpCbB%2FYixC6SDmD8yvJqCC5YsE%2B0g%2F4gbz8CEtnylFHt5vDDh7p%2BdBjqqAYN4ZDA7w1E6MCtWeVLpVjt3jNOb7e6N%2Fs%2F7dRR56uL7YzwVo80wXWJ9AKjSQus1FG%2FTsyha45hbmGZhLtvxyuDgRDFhsnsR7c%2FdmxklDxVAQJhIL1zzVa9M%2BMvPfRUEP5SmUlf54CtVU3Ariga7Yd3Gd5jNqx9SaDaZzPhYfEwOVma%2Bsu6rWPoPgBSAjVHd6o4L4E%2FJErDpmCxcSK6pXOk%2FiYNDu%2F8VZizc&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221225T081314Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHJO6ND34%2F20221225%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9ca4197e1cf7b7115197f6dddea18d5ebcfc060337ae93838e812d19d17e405a",
        url: "http://www.foodista.com/recipe/XJGWJ547/italian-egg-drop-soup",
        ingredients: [
            {text: "6 cups vegetable, chicken dried oregano crushed"},
            {text: "2 eggs"},
            {text: "3 teaspoons freshly-grated Parmesan cheese"},
            {text: "2 tablespoons grated dry bread crumbs"},
            {text: "1 garlic clove pressed"}
        ],
        calories: 980.4080312122356
    }
]

const regular = [
    {title: "Yummy food!!", link: "https://mlh.io/", image: "/snowflake1.PNG"},
    {title: "Yummy food!!", link: "https://mlh.io/", image: "/snowflake1.PNG"},
    {title: "Yummy food!!", link: "https://mlh.io/", image: "/snowflake1.PNG"},
    {title: "Yummy food!!", link: "https://mlh.io/", image: "/snowflake1.PNG"}
]

const addHandler = () => {
    // posts to mongodb array !!
    alert('yay, added')
}

export default function Recipes() {
    return (
        <>
        <Navbar />
        <div className={styles.page}>
            <div className={styles.recipes}>
                <div>
                    <h2>Holiday Recipes ^w^</h2>
                    {holiday.map((hRec) => (
                        <div key={hRec.title} className={styles.card}>
                            <div className={styles.cardImage}>
                                <Image alt={hRec.title} src={hRec.image} fill/>
                            </div>
                            <div className={styles.bar} />
                            <div className={styles.info}>
                                <h3>{hRec.label}</h3>
                                <ul>
                                    {hRec.ingredients.map((ing) => (
                                        <li key={ing.text}>{ing.text}</li>
                                    ))}
                                </ul>
                                <span>Calories: {hRec.calories}</span>
                            </div>
                            <span className={styles.buttons}>
                                <Link href={hRec.url}>
                                    <button>Read More</button>
                                </Link>
                                <button onClick={addHandler}><MdOutlineLibraryAdd /></button>
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Food Recommendations :D</h2>
                    {regular.map((nRec) => (
                        <p key={nRec.title}>{nRec.title}</p>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}