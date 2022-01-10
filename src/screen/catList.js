import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Dialog from '../component/dialog'
import Header from '../component/Header'
const CatList = () => {


    const { catList } = useSelector(state => state)
    const [list, setList] = useState([])
    const [modalShow, setmodalShow] = useState(false)
    const [deleteId, setDeleteId] = useState()

    const showModal = (id) => {
        setDeleteId(id)
        setmodalShow(true)
    }
    const closeModal = () => {
        setmodalShow(false)
    }
    const deleteList = () => {
        const deletedItem = list.filter((curElem) => {
            return curElem.id !== deleteId
        })
        setList(deletedItem);
        localStorage.setItem("list", JSON.stringify(deletedItem))
        setmodalShow(false)
    }

    useEffect(() => {
        setList(catList)
    }, [catList])



    return (
        <>
            <Header />
            <div className=" mt-4 max-w-7xl mx-auto px-4 py-4 sm:px-6" >
                <div className='bg-white shadow-md p-3 rounded-md my-4  text-white bg-indigo-400' >
                    <div className="grid gap-4 grid-cols-5 justify-between">
                        <div>
                            <label className="font-medium">Cat Name</label>
                        </div>
                        <div>
                            <label className="font-medium">Breed</label>
                        </div>
                        <div className="col-span-2">
                            <label className="font-medium">Description</label>
                        </div>
                        <div>
                            <label className="font-medium">Action</label>
                        </div>
                    </div>
                </div>
                {
                    list.length < 1 ?
                        <p className=' font-medium text-center'>No reacord found</p> :
                        list.map((list) => (
                            <div className='bg-white shadow-md border border-gray-100 hover:border-indigo-100 p-3 rounded-md mb-1  hover:text-white hover:bg-indigo-400 font-thin font-mono text-sm text-slate-700' key={list.id}>
                                <div className="grid gap-4 grid-cols-5 justify-between items-center">
                                    <div>
                                        <p >{list.catName}</p>
                                    </div>
                                    <div >
                                        <p >{list.breed}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p >{list.description}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div onClick={() => showModal(list.id)} className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-rose-600 text-white hover:bg-rose-500'>
                                            <i className="far fa-trash-alt"></i>
                                        </div>
                                        <Link to={`/addCat/${list.id}`} className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-indigo-600 text-white hover:bg-indigo-500'>
                                            <i className="far fa-edit"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                }
            </div>
            {
                modalShow &&
                <Dialog closeModal={closeModal} deleteItem={deleteList} />
            }


        </>
    )
}

export default CatList
