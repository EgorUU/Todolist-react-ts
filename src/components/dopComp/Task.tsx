import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import img from '../../img/tick-vector-icon.jpg'
const Task: FC<any> = ({el, tasks}) => {
    const params: any = useParams()
    
    const [anim, setAnim] = useState<any>(false)
    const dispatch = useDispatch()
    const performingTask: any = (id: any, page: any) => {
        dispatch({type: "PERFORMING_TASK", category: page, taskId: id})
    }
    return (
        <div className="task-item" style={{boxShadow: `0px 0px 15px ${el.color}`, animation: anim && "performed 0.6s forwards", border: `1px solid ${el.color}`}}>
            <h1 className='task-item__title'>{el.title}</h1>
            <div className={!anim ? "task-item__checkbox" : "task-item__checkbox checkbox-active"} onClick={() => {
                setAnim(true)
                setTimeout(() => {
                    setAnim(false)
                    performingTask(el.id, params?.category)
                }, 600)
            }}>
                {anim && <img src={img} alt="" />}
            </div>
        </div>
    )
}

export default Task