import React, { FC, useState } from 'react'
import List from './List'

interface Ilists {
    lists: any[]
    check: Function
}

const Lists: FC<Ilists> = ({ lists, check }) => {
    return (
        <>
            <div className='Lists'>
                {
                    lists.map((el: any) => (
                        <List name={el} check={check}/>
                    ))
                }
            </div>
        </>
    )
}
export default Lists