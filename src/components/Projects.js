import React from 'react'

const Projects = () => {
    return (
        <div className="p-6 text-center bg-gray-100">
            <div className="text-2xl font-bold text-gray-600">
                Open Source Projects
            </div>
            <div className="flex-row mt-4 space-y-4">
                <div className="px-24">
                    <a href="https://helloele.com/">
                        <img src="images/HelloEleLogo.png" alt="" className="h-10 shadow-xl w-36"/>
                    </a>
                </div>
                <div className="px-24">
                    <a href="https://tinyfunction.com/">
                        <img src="images/TinyFunctionLogo.png" alt="" className="h-10 shadow-xl w-36"/>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Projects
