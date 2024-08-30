import { title } from 'process'
import React, { FC, useState } from 'react'

interface IList {
    name: {
        name: string
        id: number
        color: string
    }
    check: Function
}

const List: FC<IList> = ({ name, check }) => {
    const [anim, setAnim] = useState(false)
    return (
        <div key={name.id} id="list" className={anim ? 'active' : ''} style={{borderColor: name.color, borderWidth: "3px", borderStyle: "solid", boxShadow: `0px 0px 10px ${name.color}`}}>
            <h1>{name.name}</h1>
            <div className="checkbox-container" style={{backgroundColor: name.color}}>
                <input type="checkbox" onClick={() => {
                    setAnim(true)
                    setTimeout(() => {
                        setAnim(false)
                        check(name.id)
                    }, 1000)
                }}/>
            </div>
        </div>
    )
}
export default List