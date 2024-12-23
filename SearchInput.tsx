import React from "react";

interface IProps {
    text: string,
    setText: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = React.memo(({ text, setText }: IProps) => {
    return (
        <input
            value={text}
            onChange={(e) => setText(e)}
            placeholder="Напиши текст"
        />
    )
})



export default SearchInput;