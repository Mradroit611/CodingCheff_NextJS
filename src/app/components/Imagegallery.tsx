import React from 'react'

const Imagegallery = () => {
  return (
    <div>
      <section className="text-gray-600">
        
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Website Components that set you up for success</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get a headstart on your journey with 900+ free, customizable website components, strategically
              researched and tailored for every industry — or start from a scratch to build your website.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <div className="relative overflow-hidden">
                  <img alt="gallery" className="w-full object-cover h-full object-center block transition-transform rounded-lg duration-300 transform scale-100 hover:scale-110" src="/sources/6.jpeg" />
                </div>
              </div>

              <div className="md:p-2 p-1 w-1/2 relative overflow-hidden">
                <img alt="gallery" className="w-full object-cover h-full object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110" src="/sources/1.jpg" />
              </div>
              <div className="md:p-2 p-1 w-full relative overflow-hidden">
                <img alt="gallery" className="w-full h-full object-cover object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110" src="/sources/7.webp" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full relative overflow-hidden">
                <img alt="gallery" className="w-full h-full object-cover object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110" src="/sources/8.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2 relative overflow-hidden">
                <img alt="gallery" className="w-full object-cover h-full object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110" src="/sources/news.png" />
              </div>
              <div className="md:p-2 p-1 w-1/2 relative overflow-hidden">
                <img alt="gallery" className="w-full object-cover h-full object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110" src="/sources/parallax.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Imagegallery
