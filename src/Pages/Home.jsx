import React from 'react';
import bg from '../assets/image/alexander-possingham-nb04de6m0rM-unsplash.jpg'
import image1 from '../assets/new/image1.jpg'
import image2 from '../assets/new/image2.jpg'
import image3 from '../assets/new/image3.jpg'
import image4 from '../assets/new/image4.jpg'
import image5 from '../assets/new/image5.jpg'

const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight: "650px"
            }} className="flex justify-center items-center">
                <section>


                    <div className='flex items-center gap-3'>
                        <div className='flex gap-x-1'>
                            <input type="date" name="" placeholder='checkIn' className='bg-gray-200 bg-opacity-70 py-1 px-2 rounded-l-lg' id="" />
                            <input type="date" name="" placeholder='checkIn' className='bg-gray-200 bg-opacity-70 py-1 px-2' id="" />
                            <select name="" id="" className='bg-gray-200 bg-opacity-70 py-[5px] px-2 rounded-r-lg' >
                                <option value="2 adults 2 children">2 adults 2 children</option>
                                <option value="3 adults 2 children">3 adults 2 children</option>
                                <option value="4 adults 2 children">4 adults 2 children</option>
                                <option value="2 adults 0 children">2 adults 0 children</option>
                            </select>
                        </div>
                        <button className='bg-amber-500 rounded-lg text-gray-800 p-2'>Check Availability</button>
                    </div>

                </section>
            </div>


            <section className="py-4 w-3/4 mx-auto  text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={image1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1  bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src={image2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src={image3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src={image4} />

                    <img src={image5} alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" />
                </div>
            </section>

            <div className='w-3/4 mx-auto'>
                <p className='text-2xl font-bold px-5'>Hotel Vishal @airport</p>
                <div className='flex justify-between px-5'>
                    <div className='w-4/5'>
                        <p>We've got 100+ building blocks that can help you create almost any type of a website with just a couple of clicks.</p>
                        <p>+88018404 30, delhi, 110</p>
                        <p>+88018404 30, delhi, 110</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minima optio dolor ullam magni non deserunt exercitationem ducimus recusandae perspiciatis vero ratione, aperiam mollitia id eligendi beatae quisquam amet quia tempora. Quis autem porro earum pariatur blanditiis. Similique quos amet facere perspiciatis pariatur ratione, deleniti magni sapiente? Ipsam aut consequatur nihil autem iusto soluta nisi, accusamus suscipit amet quae eveniet laboriosam quasi temporibus fuga blanditiis, et saepe alias illo labore? Repellendus magni officia temporibus obcaecati quaerat accusamus <span className='font-semibold'> dicta consequuntur fugit autem. Voluptatem aut obcaecati eveniet possimus neque veritatis iure nobis qui, perferendis eligen di consequuntur ratione optio odio perspiciatis. Distinctio, quisquam!</span></p> <a href="# " className='text-blue-500'>read more..</a>
                    </div>
                    <div>
                        <img src={image1} alt="" className='w-32 h-32' />
                    </div>
                </div>
            </div>


            <section className="bg-gray-100 py-4  text-gray-100 w-3/4 mx-auto">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80  bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6  bg-gray-900">
                            <span className="text-xs uppercase  text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6  text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80  bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6  bg-gray-900">
                            <span className="text-xs uppercase  text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6  text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80  bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6  bg-gray-900">
                            <span className="text-xs uppercase  text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6  text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;