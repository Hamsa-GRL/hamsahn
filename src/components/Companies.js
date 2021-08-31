import React from 'react'

const Companies = () => {
    return (
        <div className="p-6 text-center bg-gray-200">
            <div className="text-2xl font-bold text-gray-600">
                Companies
            </div>
            <div className="text-xs">
                that i have worked with
            </div>
            <div className="flex flex-col sm:flex-row mt-4 space-y-4 sm:items-center sm:space-y-0 sm:w-full sm:justify-center">
                <div className="w-full sm:w-auto px-28 sm:px-8">
                    <a href="https://graniteriverlabs.com/">
                        <img src="images/GRL.png" alt="" className="w-32 h-10 shadow-xl" />
                    </a>

                </div>
                <div className="w-full sm:w-auto px-28 sm:px-8">
                    <a href="https://www.capgemini.com/">
                        <img src="images/Capgemini.png" alt="" className="w-32 h-10 shadow-xl" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Companies
