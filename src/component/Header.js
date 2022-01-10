import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="relative bg-white border-b-2 border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="flex justify-between items-center  py-2  md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="sr-only">Workflow</span>
                            <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                        </Link>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Cat List
                        </Link>
                        <Link to='/addCat' className=" flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Add
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
