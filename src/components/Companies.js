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
            <div className="flex-row mt-4 space-y-4">
                <div className="w-full px-28">
                    <a href="https://graniteriverlabs.com/">
                        <img src="images/GRL.png" alt="" className="w-32 h-10 shadow-xl"/>
                    </a>
                    
                </div>
                <div className="w-full px-28">
                    <a href="https://www.capgemini.com/">
                    <img src="images/Capgemini.png" alt="" className="w-32 h-10 shadow-xl" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Companies
