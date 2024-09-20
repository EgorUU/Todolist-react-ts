import React, { FC, useRef, useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Toast, ToastContainer } from 'react-bootstrap'
const Header: FC = () => {
    const dispatch = useDispatch()
    const addCategory = (title: any) => {
        dispatch({type: "ADD_CATEGORY", category: title})
    }
    const addTask = (title: string, color: string, page: string) => {
        dispatch({type: "ADD_TASK", newTask: title, color: color, category: page})
    }
    const categoryes = useSelector((state: any) => state.categories)
    const input = useRef<any>(null)
    const toastRef = useRef<HTMLDivElement>(null);
    const input2 = useRef<any>(null)
    const [page, setPage] = useState<string>('')
    const color = useRef<any>(null)
    const [warn, setWarn] = useState<boolean>(false)
    const form = useRef<any>(null)
    const form2 = useRef<any>(null)
    const p: any = useParams()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">TODO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-sm-flex justify-content-between" id="navbarText">
                        <ul className="navbar-nav ml-4">
                            <li className="nav-item"><Link to="/" className='nav-link'>Главная</Link></li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Категории
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    {
                                        Object.keys(categoryes).map((el: any) => (
                                            <li><Link className="dropdown-item" to={`/${el}`} onClick={() => setPage(el)}>{el}</Link></li>
                                        ))
                                    }
                                    <li>
                                        <form action="" className="form-control dropdown-item justify-content-sm-center" ref={form}>
                                            
                                            <input type="text" onFocus={() => setWarn(false)} className="form-control form-control-sm" ref={input} placeholder='Добавить Категорию' style={{maxHeight: "23px", marginBottom: "5px"}}/>
                                            <button type="button" className='btn btn-primary btn-sm' style={{width: "100%"}} onClick={(e) => {
                                                e.preventDefault()
                                                if (input.current?.value) {
                                                    addCategory(input.current?.value)
                                                    form.current?.reset()
                                                }
                                                else {
                                                    setWarn(true)
                                                }
                                            }}>Добавить</button>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link">{page}</a></li>
                        </ul>
                        {page ? (
                            <form className="d-flex" ref={form2}>
                                <input type="color" className="form-control form-control-color bg-dark" ref={color} id="exampleColorInput" defaultValue="#563d7c" title="Choose your color" style={{marginRight: "5px"}}/>
                                <input type="text"  onFocus={() => setWarn(false)} className='form-control form-control-xl me-2 bg-dark add-task' placeholder="Добавьте Задачу" ref={input2} aria-label="Search" style={{color: "white", width: "300px"}}/>
                                <button type="button" className="btn btn-primary" onClick={(e: any) => {
                                    e.preventDefault()
                                    console.log(input2.current?.value)
                                    if (input2.current?.value) {
                                        addTask(input2.current?.value, color.current?.value, page)
                                        form2.current?.reset()
                                    }
                                    else {
                                        setWarn(true)
                                    }
                                }}>Добавить</button>
                            </form>
                        ) : <ul className='navbar nav ml-4' style={{height: "40px"}}><li className='nav-item'><a className="nav-link" style={{color: "gray"}}>Выберите Категорию Для Задач</a></li></ul>}
                    </div>
                </div>


                <ToastContainer className="p-3 position-fixed bottom-0 end-0" >
                    <Toast show={warn} delay={3000} autohide className='bg-danger'>
                        <Toast.Header className="bg-light">
                            <strong className="me-auto">Заголовок</strong>
                        </Toast.Header>
                        <Toast.Body>Заполните формы!</Toast.Body>
                    </Toast>
                </ToastContainer>



            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Header