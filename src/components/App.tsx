import React, { ChangeEvent, FC, useState, useEffect } from 'react'

import Lists from './Lists'
import Form from './Form'



interface Ilists {
    name: string
    id: number
    color: string
}

type FunctionProps = (a: string, b: string) => void | string

type FuncCheck = (id: number) => void 
const App: FC = () => {
    const AddList: FunctionProps = (a, b) => {
        let countId: number = list.length
        setList([...list, {id: countId, name: a, color: b}])
    }
    const Checked: FuncCheck = (id) => {
        const newList = list.filter(el => el.id !== id)
        setList(newList)
    }
    const [list, setList] = useState<Ilists[]>([])
    return (
        <>
            <Form addList={AddList}/>
            <Lists lists={list} check={Checked}/>
        </>
    )

}

export default App