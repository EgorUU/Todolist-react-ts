import React, { ChangeEvent, FC, useState, useRef } from 'react'

interface FuncProps {
    addList: (a: string, b: string) => string | void
}


const Form: FC<FuncProps> = ({ addList }) => {
    const form = useRef<HTMLFormElement>(null)
    const listColor = useRef<HTMLInputElement>(null)
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    return (
        <form action="" ref={form}>
            <input type="text" placeholder='Напишите задачу' className={error ? 'error' : ''} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="color" ref={listColor} defaultValue="#ffff00"/>
            <input type="submit" value="Добавить" onClick={(e) => {
                e.preventDefault()
                if (title) {
                    if (form.current && listColor.current) {
                        addList(title, listColor.current.value)
                        form.current.reset()
                        setTitle('')
                    }
                }
                else {
                    setError(true)
                }
            }}/>
        </form>
    )
}
export default Form