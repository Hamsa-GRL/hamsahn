import React from 'react'

const Projects = () => {
    return (
        <div className="p-6 text-center bg-gray-100">
            <div className="text-2xl font-bold text-gray-600">
                Open Source Projects
            </div>
            <div className="flex flex-col sm:flex-row mt-4 space-y-4 sm:items-center sm:space-y-0 sm:w-full sm:justify-center">
                <div className="w-full sm:w-auto px-28 sm:px-8">
                    <a href="https://helloele.com/">
                        <img src="images/HelloEleLogo.png" alt="" className="h-10 shadow-xl w-36" />
                    </a>
                </div>
                <div className="w-full sm:w-auto px-28 sm:px-8">
                    <a href="https://tinyfunction.com/">
                        <img src="images/TinyFunctionLogo.png" alt="" className="h-10 shadow-xl w-36" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Projects
