import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../component/Header'
import { useDispatch } from 'react-redux'
import { getCatListAction } from '../store/action/listAction'
const AddCat = () => {
    let lists = JSON.parse(localStorage.getItem('list'))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [catName, setCatName] = useState('')
    const [breed, setBreed] = useState('Maine Coon')
    const [description, setDescription] = useState('')
    const [nameError, setNameError] = useState(false)
    const [descError, setDescError] = useState(false)
    const [NameErrorMsg, setNameErrorMsg] = useState('')
    const [descErrorMsg, setDescErrorMsg] = useState('')
    const [data, setData] = useState(lists || [])
    const { id } = useParams();

    const catNameHandler = (e) => {
        setCatName(e.target.value)
        if (!e.target.value) {
            setNameError(true)
            setNameErrorMsg('Name is required')
        }
        else if (e.target.value.length < 3) {
            setNameError(true)
            setNameErrorMsg('Enter at least 3 characters')
        }
        else {
            setNameError(false)
            setNameErrorMsg('')
        }
    }
    const catBreedHandler = (e) => {
        setBreed(e.target.value)

    }
    const catDescriptionHandler = (e) => {
        setDescription(e.target.value)
        if (!e.target.value) {
            setDescError(true)
            setDescErrorMsg('Description is required')
        }
        else if (e.target.value.length < 4) {
            setDescError(true)
            setDescErrorMsg('Enter at least 4 characters')
        }
        else {
            setDescError(false)
            setDescErrorMsg('')
        }
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (!id) {
            const catData = {
                catName,
                description,
                breed,
                id: (new Date().getTime()).toString(36)
            }
            setData([catData, ...data])
            getCatListAction(dispatch, [catData, ...data])
        }
        else {
            let updatedData = data.map((curElem) => {
                if (curElem.id === id) {
                    return { ...curElem, catName, breed, description };
                }
                return curElem;
            })
            setData(updatedData);
            getCatListAction(dispatch, updatedData);
        }
        setCatName('')
        setDescription('')
        navigate('/')
    }

    useEffect(() => {
        if (id) {
            const Updatedata = data.find((curElem) => {
                return curElem.id === id;
            })
            setCatName(Updatedata.catName)
            setBreed(Updatedata.breed)
            setDescription(Updatedata.description)
        }

    }, [id])
    return (
        <>
            <Header />
            <div className="mt-4 max-w-xl mx-auto px-4 py-4 sm:px-6">
                <div className="md:grid  md:gap-6">
                    <div className="mt-5 md:mt-0 ">
                        <form onSubmit={SubmitHandler}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Cat name <sup>*</sup></label>
                                            <input type="text" value={catName} onBlur={catNameHandler} onChange={catNameHandler} name="first-name" id="first-name" autoComplete="given-name" className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm  sm:text-sm ${nameError ? 'border border-rose-500 focus:border focus:outline-none focus:rose-indigo-500 focus:border-rose-500 ' : 'focus:border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 '}`} />
                                            <span className='text-rose-600 dark:text-rose-500 text-sm'>{NameErrorMsg}</span>
                                        </div>

                                        <div className="col-span-12 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Breed <sup>*</sup></label>
                                            <select id="country" value={breed} onChange={catBreedHandler} name="country" autoComplete="country-name" className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm  sm:text-sm focus:border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 '>
                                                {/* <option defaultValue></option> */}
                                                <option value='MaineCoon'>Maine Coon</option>
                                                <option value='PersianCat'>Persian Cat</option>
                                                <option value='SiameseCat'>Siamese Cat</option>
                                            </select>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Description <sup>*</sup></label>
                                            <textarea type="text" value={description} onBlur={catDescriptionHandler} onChange={catDescriptionHandler} name="last-name" id="last-name" autoComplete="family-name" className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm sm:text-sm ${descError ? 'border border-rose-500 focus:border focus:outline-none focus:rose-indigo-500 focus:border-rose-500 ' : 'focus:border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 '}`} >
                                            </textarea>
                                            <span className='text-rose-600 dark:text-rose-500 text-sm'>{descErrorMsg}</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    {
                                        id ?
                                            <button type="submit" disabled={catName.length < 3 || description.length < 4} className=" disabled:opacity-50 disabled:cursor-not-allowed inline-flex justify-center py-2 px-5 mx-3  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Update
                                            </button>
                                            : <button type="submit" disabled={catName.length < 3 || description.length < 4} className=" disabled:opacity-50 disabled:cursor-not-allowed inline-flex justify-center py-2 px-5 mx-3  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Add
                                            </button>
                                    }
                                    <Link to='/' type="submit" className="inline-flex justify-center py-2 px-5 border border-indigo-500 shadow-sm text-sm font-medium rounded-md text-indigo bg-transparent-600 hover:bg-transparent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCat
