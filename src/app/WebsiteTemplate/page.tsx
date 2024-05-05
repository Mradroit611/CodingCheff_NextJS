import React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <section className="text-gray-600 body-font">

                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Make a Website without limits</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Choose pre-made templates to create website pages, then replace content with your own, and voilà—your website is ready! All necessary website elements, including menus, galleries, sliders, contact forms, and more, are included.</p>
                        <div className="flex mt-5">
                            <Link href="/ProjectCode/portfolio.rar" target='blank'>
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                        </div>
                    </div>
                    <div className="hidden  lg:mt-0 lg:col-span-5 lg:flex">
                        <img className="rounded" src="/Templates/new.png" alt="mockup" />
                    </div>
                </div>

                <div className="container px-5 py-15 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">It's easier with our Templates: Create your website</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Blank page anxiety? Forget it. Start creating your website with a simple website templates. Choose any template, and within a minute, you'll have a ready draft for your website.</p>
                        
                    </div>
                </div>

                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">

                            <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="/sources/portfolio.png" alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Portfolio</h1>
                                    <p className="leading-relaxed mb-3">Showcase Your Work with Style! Get a free, customizable portfolio template to beautifully display your skills and experience. Attract clients and land your dream job!</p>
                                    <div className="flex mt-5">
                                        <Link href="/ProjectCode/portfolio.rar" target='blank'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                        <div className="p-4 md:w-1/3">

                            <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="/projects/3D_Object.png" alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">3D Rotation</h1>
                                    <p className="leading-relaxed mb-3">Introducing our free single-page 3D car website template. Display vehicles elegantly with seamless scrolling. Elevate your automotive showcase effortlessly. Download now for sleek presentation.</p>
                                    <div className="flex mt-5">
                                        <Link href="/ProjectCode/Rotation.rar" target='blank'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 md:w-1/3">

                            <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="/projects/destination-website.png" alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Destination Platform</h1>
                                    <p className="leading-relaxed mb-3">Introducing our free destination website template. Inspire travelers with stunning visuals and seamless navigation. Elevate your travel platform effortlessly. Download now for unforgettable journeys.</p>
                                    <div className="flex mt-5">
                                        <Link href="/ProjectCode/destination.rar" target='blank'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 md:w-1/3">

                            <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="/projects/news.png" alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">News Website</h1>
                                    <p className="leading-relaxed mb-3">Introducing our free single-page news website template. Deliver headlines with style and simplicity. Elevate your news platform effortlessly. Download now for streamlined reading experience</p>
                                    <div className="flex mt-5">
                                        <Link href="/ProjectCode/newsweb.rar" target='blank'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 md:w-1/3">

                            <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="/projects/phtography.png" alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Photography Landing page</h1>
                                    <p className="leading-relaxed mb-3">Introducing our free photography landing page template. Showcase your portfolio with elegance and ease. Elevate your photography business effortlessly. Download now for captivating visual presentation.</p>
                                    <div className="flex mt-5">
                                        <Link href="/ProjectCode/photographyweb.rar" target='blank'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 md:w-1/3">

                            <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="/projects/portfolio2.png" alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Portfolio</h1>
                                    <p className="leading-relaxed mb-3">Showcase Your Work with Style! Get a free, customizable portfolio template to beautifully display your skills and experience. Attract clients and land your dream job!</p>
                                    <div className="flex mt-5">
                                        <Link href="/ProjectCode/portfolio2.rar" target='blank'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 md:w-1/3">

                            <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="/projects/yoga.png" alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Yoga</h1>
                                    <p className="leading-relaxed mb-3">Introducing our free single-page yoga website template. Promote wellness with simplicity and grace. Elevate your yoga studio effortlessly. Download now for serene online presence.</p>
                                    <div className="flex mt-5">
                                        <Link href="/ProjectCode/Fake_yoga.rar" target='blank'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 md:w-1/3">

                            <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="/projects/anime.png" alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Anime Website</h1>
                                    <p className="leading-relaxed mb-3">Introducing our free anime movie website template. Showcase your favorite films with style and ease. Elevate your anime platform effortlessly. Download now for an immersive cinematic experience.</p>
                                    <div className="flex mt-5">
                                        <Link href="/ProjectCode/TechAnime.rar" target='blank'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 md:w-1/3">

                            <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="/projects/Restaurant.png" alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Restaurant website</h1>
                                    <p className="leading-relaxed mb-3">Introducing our free restaurant website template. Showcase your cuisine with elegance and ease. Elevate your dining establishment effortlessly. Download now for a delicious online presence.</p>
                                    <div className="flex mt-5">
                                        <Link href="/ProjectCode/restaurantwebsite.rar" target='blank'>
                                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="bg-gradient-to-r from-indigo-400 to-blue-500 text-gray-100 mt-10 py-10 min-h-screen">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-5 divide-white-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl ">How do I access the free templates on your website?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>To access our collection of free templates, simply create an account on our website. Once you've created an account, you'll have full access to download and utilize our templates for your website.</p>
                                <div className="flex mt-5">
                                    <Link href="/ProjectCode/portfolio.rar" target='blank'>
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                </div>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">Are there any charges for using the templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>No, all the templates available on our website are completely free to use. There are no hidden charges or fees associated with downloading and utilizing our templates.</p>
                                <div className="flex mt-5">
                                    <Link href="/ProjectCode/portfolio.rar" target='blank'>
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                </div>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">What kind of templates do you offer?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>We offer a wide variety of templates suitable for different types of websites, including business, portfolio, blog, e-commerce, and more. Our collection is constantly updated to provide you with the latest designs and functionalities.</p>
                                <div className="flex mt-5">
                                    <Link href="/ProjectCode/portfolio.rar" target='blank'>
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                </div>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">How easy is it to use the templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>Using our templates is incredibly easy! Once you've downloaded a template, we provide detailed instructions on how to customize and integrate it into your website. Even users with minimal technical knowledge can quickly create a professional-looking website using our templates.</p>
                                <div className="flex mt-5">
                                    <Link href="/ProjectCode/portfolio.rar" target='blank'>
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                </div>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">Can I customize the templates to fit my brand?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>Absolutely! Our templates are fully customizable, allowing you to tailor them to match your brand identity. You can easily modify colors, fonts, images, and layout elements to create a website that reflects your unique style and preferences.</p>
                                <div className="flex mt-5">
                                    <Link href="/ProjectCode/portfolio.rar" target='blank'>
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                </div>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">Do I need coding knowledge to use your templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>No coding knowledge is required to use our templates. We've designed them to be user-friendly and accessible to individuals with varying levels of technical expertise. You can simply use our intuitive customization tools to make the desired changes to your website.</p>
                                <div className="flex mt-5">
                                    <Link href="/ProjectCode/portfolio.rar" target='blank'>
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                </div>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">What if I encounter any issues while using the templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>If you encounter any difficulties or have questions while using our templates, our customer support team is here to help! Simply reach out to us through our contact form or email, and we'll assist you promptly to ensure a smooth experience with our templates.</p>
                                <div className="flex mt-5">
                                    <Link href="/ProjectCode/portfolio.rar" target='blank'>
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page
