import React, { useCallback, useMemo, useState } from 'react'
import SearchInput from './SearchInput'
import ItemList from './ItemList';
import CounterButton from './CounterButton';


const generateItems = (num: number): string[] => Array.from({ length: num }, (_, i) => `Item ${i + 1}`);

const Optimization = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [count, setCount] = useState<number>(0);

    const items = useMemo(() => generateItems(1000), []);

    const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }, [])

    const handleChangeCount = useCallback(() => {
        setCount(prevState => prevState + 1);
    },[])

    return (
        <div>
            <p>{count}</p>
            <CounterButton setCount={handleChangeCount} />
            <SearchInput text={searchText} setText={handleChangeInput} />
            <ItemList items={items} text={searchText} />
        </div>
    )
}

export default Optimization;