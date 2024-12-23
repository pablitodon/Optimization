import React, { memo, useMemo } from 'react'


interface IProps {
    items: string[],
    text: string,
}
const ItemList = memo(({ items, text }: IProps) => {
    console.log('ItemsList');

    const filterItems = useMemo(() => {
        return items.filter(item => item.toLowerCase().includes(text.toLowerCase()));
    }, [items, text]);

    return (
        <ul>
            {
                filterItems.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    )
})

export default ItemList