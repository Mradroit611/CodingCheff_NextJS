import React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <section className="text-gray-600 bg-purple-100 body-font">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Build a more powerful fitness business</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Keep up with a changing industry, make your clients feel their best, and boost your productivity—all from a single platform.</p>
                    </div>
                    <div className="hidden  lg:mt-0 lg:col-span-5 lg:flex">
                        <img className="rounded" src="/sources/fitness.png" alt="mockup" />
                    </div>
                </div>
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">CodingCheff Fitness Templates. </h1>

                </div>

                <div className='bg-indigo-200'>
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <h2 className="sm:text-4xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">With Codingcheff Fit you’ll find everything you need to succeed online</h2>
                        <div className="md:w-3/5 md:pl-6">
                            <p className="leading-relaxed text-base sm:text-xl">Create an online business that supports your vision and increases client engagement.</p>
                            <div className="flex md:mt-4 mt-6">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="rounded-3xl lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center " src="/Templates/phillhue.png" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">PHILL HUE</h1>
                        <p className="text-lg leading-relaxed">
                        Introducing PHILL HUE Fitness: Elevate your workout experience with our sleek website template. Explore fitness routines and nutrition tips seamlessly.
                        </p>
                        <div className="flex mt-5">
                            <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=138928&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                            <Link href="https://themewagon.github.io/fitnesstrainer/" target='blank'>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">GYMNESIUM</h1>
                        <p className="text-lg leading-relaxed">Introducing Gymnesium: Elevate your fitness journey with our dynamic website template. Explore workout plans, nutrition advice, and more seamlessly.</p>
                        <div className="flex mt-5">
                            <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=102211&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                            <Link href="https://themewagon.github.io/gym/" target='blank'>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                            </Link>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src="/Templates/gyenesium.png" />
                </div>
            </div>
            <section className="bg-gradient-to-r from-indigo-400 to-blue-500 text-gray-100 mt-10 py-10 min-h-screen">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-5 divide-white-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl ">How do I access the free templates on your website?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>To access our collection of free templates, simply create an account on our website. Once you've created an account, you'll have full access to download and utilize our templates for your website.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">Are there any charges for using the templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>No, all the templates available on our website are completely free to use. There are no hidden charges or fees associated with downloading and utilizing our templates.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">What kind of templates do you offer?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>We offer a wide variety of templates suitable for different types of websites, including business, portfolio, blog, e-commerce, and more. Our collection is constantly updated to provide you with the latest designs and functionalities.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">How easy is it to use the templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>Using our templates is incredibly easy! Once you've downloaded a template, we provide detailed instructions on how to customize and integrate it into your website. Even users with minimal technical knowledge can quickly create a professional-looking website using our templates.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">Can I customize the templates to fit my brand?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>Absolutely! Our templates are fully customizable, allowing you to tailor them to match your brand identity. You can easily modify colors, fonts, images, and layout elements to create a website that reflects your unique style and preferences.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">Do I need coding knowledge to use your templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>No coding knowledge is required to use our templates. We've designed them to be user-friendly and accessible to individuals with varying levels of technical expertise. You can simply use our intuitive customization tools to make the desired changes to your website.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">What if I encounter any issues while using the templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>If you encounter any difficulties or have questions while using our templates, our customer support team is here to help! Simply reach out to us through our contact form or email, and we'll assist you promptly to ensure a smooth experience with our templates.</p>
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
