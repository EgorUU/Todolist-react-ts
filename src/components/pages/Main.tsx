import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiAlignJustify } from "react-icons/fi"
import { useParams } from 'react-router-dom'
import { setSourceMapRange } from 'typescript'
import Task from '../dopComp/Task'
const Main: FC = () => {
    const params: any = useParams()
    const tasks = useSelector((state: any) => state.categories[params?.category])
    console.log(tasks)
    const [anim, setAnim] = useState<any>(false)
    const dispatch = useDispatch()
    const performingTask: any = (id: any, page: any) => {
        dispatch({type: "PERFORMING_TASK", category: page, taskId: id})
    }
    return (
        <section className="tasks">
            <div className="tasks-container">
                <div className="tasks-menu">

                    {
                        tasks.length > 0 ?
                        tasks.map((el: any) => (
                            <Task el={el} tasks={tasks} />
                        )) : "Задачи отсутствуют"
                    }
                </div>
            </div>
        </section>
    )
}

export default Main