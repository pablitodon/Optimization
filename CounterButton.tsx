import React, { memo } from 'react'
interface IProps {
    setCount: () => void
}

const CounterButton = memo(({ setCount }: IProps) => {

    return (
        <button onClick={() => setCount()}>
            Click + 1
        </button>
    )
})

export default CounterButton;