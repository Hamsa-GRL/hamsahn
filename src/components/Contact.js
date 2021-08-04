import React from 'react'

const Contact = () => {
    return (
        <div className="p-6 pb-10 text-center text-white bg-gray-600">
            <div className="text-2xl font-bold ">
                Contact
            </div>
            <div className="text-xs">
                Have a question or want to work together?
            </div>
            <div className="flex-row mt-4 space-y-2">
                <div className="flex-col px-2">
                    <i className="mt-6 mr-2 text-white fa fa-phone" aria-hidden="true"></i>
                    <span>+91 7406309293</span>
                </div>
                <div className="flex-col px-2">
                    <i class="mr-2 text-white fa fa-envelope-o" aria-hidden="true"></i>
                    <span>hamsa026@gmail.com</span>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
