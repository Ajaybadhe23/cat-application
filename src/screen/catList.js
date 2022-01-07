import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Dialog from '../component/dialog'
import Header from '../component/Header'
const CatList = () => {
    const { catList } = useSelector(state => state.catListReducer)

    const [modalShow, setModalShow] = useState(false)
    const [deleteId, setDeleteId] = useState(false)
    const openModal = (id) => {
        setModalShow(true)
        setDeleteId(id);
    }
    const closeModal = () => {
        setModalShow(false)
    }
    const deleteList = () => {
        setModalShow(false)
    }
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
                    catList.length < 1 ?
                        <p className=' font-medium text-center'>No reacord found</p> :
                        catList.map(({ catName, breed, description, id }) => (
                            <div className='bg-white shadow-md border border-gray-100 hover:border-indigo-100 p-3 rounded-md mb-1  hover:text-white hover:bg-indigo-400 font-thin font-mono text-sm text-slate-700' key={id}>
                                <div className="grid gap-4 grid-cols-5 justify-between items-center">
                                    <div>
                                        <p >{catName}</p>
                                    </div>
                                    <div >
                                        <p >{breed}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p >{description}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div onClick={() => openModal(id)} className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-rose-600 text-white hover:bg-rose-500'>
                                            <i className="far fa-trash-alt"></i>
                                        </div>
                                        <div className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-indigo-600 text-white hover:bg-indigo-500'>
                                            <i className="far fa-edit"></i>
                                        </div>
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
