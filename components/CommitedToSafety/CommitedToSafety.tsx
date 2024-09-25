import React from 'react';

function CommitedToSafety() {
    return (
        <>
            <div className='bg-[#F5F5F5] w-5/6 md:w-11/12 mx-auto flex flex-col md:flex-row'>
                <div className='w-4/5 min-h-fit mx-auto flex flex-col md:w-2/5 md:h-4/5 justify-between md:justify-center py-7 md:p-8 md:py-16 text-left'>
                    <p className='text-xs font-medium leading-4 mr-auto uppercase tracking-widest'>
                        HIGHLY EXPERIENCED TEAM
                    </p>
                    <h1 className='text-4xl font-bold my-5'>
                        Committed To Safety
                    </h1>
                    <div className='border md:border-2 border-common-red w-1/3 mb-10'></div>
                    <p className='mb-5 text-base font-normal leading-8'>
                        At Mefford Con. we know accidents happen but no lost time accidents have occurred on our job sites. Learn more on how we protect you, our employees and sub-contractors. 
                    </p>
                    <p className='text-base font-normal leading-8'>
                        Pre certified and Registered with both Avetta® and ISNetworld® and with full time safety representation on staff.
                    </p>
                    <a href='https://www.avetta.com/' className='flex flex-col border-2 border-common-red p-5 mt-8 bg-white'>
                        <img src='/images/contact_us/download-400x85.jpeg' alt='Commited To Safety' className='w-full h-full' />
                    </a>
                    <a href='https://www.isnetworld.com/en/' className='flex flex-col border-2 border-common-red p-5 md:p-0 md:mb-4 mt-8 md:h-1/6 bg-white'>
                        <img src='/images/contact_us/ISN.jpeg' alt='Commited To Safety' height={100} width={100} className='w-1/2 md:w-1/4 md:h-1/2 h-1/2 mx-auto md:py-3' />
                    </a>
                </div>
                <div className='mt-5 md:mt-0 md:w-1/2'>
                    <img src='/images/contact_us/info-02.jpg' alt='Commited To Safety' className='w-full h-full' />
                </div>
            </div>
            
        </>
    )
}

export default CommitedToSafety