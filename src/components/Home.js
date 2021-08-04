import React from 'react'

const Home = () => {
    return (
        <div className="self-center p-8 pt-12 text-white bg-purple-700 rounded-md shadow-md">
            <div className="flex flex-col space-y-4">
                <img src="images/profile.jpeg" alt="" className="self-center w-40 h-40 bg-yellow-100 border-4 border-white rounded-full shadow-xl"/>
                <div className="text-center ">
                    <h1 className="text-4xl font-medium text-center ">
                        Hamsa H N
                    </h1>
                    <div className="pt-2">I am a full stack developer, with hands-on experience in cloud technologies.</div>
                </div >
                <div className="inline-flex items-center self-center space-x-5">
                    <a href="https://github.com/hamsahn">
                        <i class="fa fa-github text-2xl" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/iamhamsahn">
                        <i class="fa fa-twitter text-2xl" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/hamsahn/">
                        <i class="fa fa-linkedin text-2xl" aria-hidden="true"></i>
                    </a>
                </div>
            </div>    
        </div>
    )
}

export default Home
