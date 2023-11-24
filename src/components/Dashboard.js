import React from 'react'
import "../App.css"

function Dashboard() {
  return (
    
    
    <div class='flex bg-gray-100 '>
      <aside class='h-screen bg-white fixed lg:sticky top-0 border-r-2 p-6 pt-10 whitespace-nowrap z-10 closed shadow-xl '>
    
        <div class='mb-10 flex items-center justify-between '>
          <div class=' p-2 bg-purple-600 text-white rounded'>
            <i data-feather='box'></i>
          </div>
    
          <button class='lg:hidden bg-gray-200 text-gray-500 rounded leading-none p-1 btn-close-menu'>
            <i data-feather='chevron-left'></i>
          </button>
        </div>
    
        <ul class='text-gray-500 font-semibold flex flex-col gap-2'>
          <li>
            <a href="#" class='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50  transition-all'>
    
              <i data-feather="home" style={{width: '1.2em'}} class='mr-3'></i>
    
              <span class='flex-grow'>Home</span>
    
              <span class='text-sm bg-gray-200 leading-none rounded py-1 px-2 ml-10'>H</span>
            </a>
          </li>
          <li>
            <a href="#" class='active text-black bg-gray-100 flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
    
              <i data-feather="columns" style={{width: '1.2em'}} class='mr-3'></i>
    
              <span class='flex-grow'>My Dashboard</span>
    
              <span class='text-sm bg-gray-200 text-gray-500 leading-none rounded py-1 px-2 ml-10'>D</span>
            </a>
          </li>
          <li>
            <a href="#" class='flex rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
              <span class='flex items-center gap-3'>
                <i data-feather="bell" style={{width: '1.2em'}} ></i>
                Notifications
                <span class='bg-red-500 text-white leading-none px-2 py-1 rounded-full text-xs'>2</span>
              </span>
            </a>
          </li>
          <li class='border my-2'></li>
          <li>
            <a href="#" class='flex rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
              <span class='flex items-center gap-3'>
                <i data-feather="rss" style={{width: '1.2em'}}></i>
                News
                <span class='bg-red-500 text-white leading-none px-2 py-1 rounded-full text-xs'>99+</span>
              </span>
            </a>
          </li>
    
          <li>
            <a href="#" class='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
    
              <i data-feather="calendar" style={{width: '1.2em'}} class='mr-3'></i>
    
              <span class='flex-grow'>Events</span>
    
            </a>
          </li>
    
          <li>
            <a href="#" class='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
    
              <i data-feather="user" style={{width: '1.2em'}} class='mr-3'></i>
    
              <span class='flex-grow'>People</span>
    
              <i data-feather="chevron-down" style={{width: '1.2em'}}></i>
    
            </a>
          </li>
    
          <li>
            <a href="#" class='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
    
              <i data-feather="users" style={{width: '1.2em'}} class='mr-3'></i>
    
              <span class='flex-grow'>Groups</span>
    
              <i data-feather="chevron-down" style={{width: '1.2em'}}></i>
    
            </a>
          </li>
    
          <li>
            <a href="#" class='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
    
              <i data-feather="archive" style={{width: '1.2em'}} class='mr-3'></i>
    
              <span class='flex-grow'>Resources</span>
    
              <i data-feather="chevron-down" style={{width: '1.2em'}}></i>
    
            </a>
          </li>
    
          <li>
            <a href="#" class='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
    
              <i data-feather="briefcase" style={{width: '1.2em'}} class='mr-3'></i>
    
              <span class='flex-grow'>Offices</span>
    
            </a>
          </li>
        </ul>
      </aside>
    
      <div class='w-full'>
        <header class='px-6 lg:px-8 pb-4 lg:pb-6 pt-6 lg:pt-10 shadow bg-white mb-1 sticky top-0'>
    
          <h1 class='text-xl font-semibold mb-6 flex items-center'>
            <button class='btn-open-menu inline-block lg:hidden mr-6'>
              <i data-feather='menu'></i>
            </button>
            <span>My Dashboard</span>
          </h1>
    
          <form class='flex items-center gap-3 bg-gray-100 rounded py-3 px-4 lg:max-w-md'>
            <button class='text-gray-500'>
              <i data-feather='search' class='w-5'></i>
            </button>
            <input type="text" placeholder='Search Company HQ' class='bg-transparent outline-none w-full'/>
    
          </form>
        </header>
        <main class='px-6 py-8 lg:px-8 bg-gray-100 flex flex-col gap-6 '>
          <section class='bg-white p-6 shadow rounded'>
            <div class='bg-gray-200 pt-5 px-20 rounded inline-block '></div>
            <div class='border mb-5 mt-4'></div>
            <div class='bg-gray-200 pt-3 rounded max-w-lg mb-3 '></div>
            <div class='bg-gray-100 pt-3 rounded max-w-sm '></div>
          </section>
    
          <section class='bg-white p-6 shadow rounded flex flex-col gap-10'>
            <div class='flex gap-6 items-start'>
              <div class='p-5 bg-gray-200 inline-block rounded-full'></div>
              <div class='w-full flex flex-col items-start gap-3'>
                <div class='bg-gray-200 pt-3 px-14 rounded '></div>
                <div class='bg-gray-200 pt-3 rounded w-full max-w-xs'></div>
                <div class='bg-gray-100 pt-3 rounded w-full max-w-md'></div>
              </div>
            </div>
    
            <div class='flex gap-6 items-start'>
              <div class='p-5 bg-gray-200 inline-block rounded-full'></div>
              <div class='w-full flex flex-col items-start gap-3'>
                <div class='bg-gray-200 pt-3 px-14 rounded '></div>
                <div class='bg-gray-200 pt-3 rounded w-full max-w-lg'></div>
                <div class='bg-gray-100 pt-3 rounded w-full max-w-md'></div>
              </div>
            </div>
    
            <div class='flex gap-6 items-start'>
              <div class='p-5 bg-gray-200 inline-block rounded-full'></div>
              <div class='w-full flex flex-col items-start gap-3'>
                <div class='bg-gray-200 pt-3 px-14 rounded '></div>
                <div class='bg-gray-200 pt-3 rounded w-full max-w-md'></div>
                <div class='bg-gray-100 pt-3 rounded w-full max-w-lg'></div>
              </div>
            </div>
          </section>
    
          <section class='bg-white p-6 shadow rounded flex flex-col gap-10'>
            <div class='flex gap-6 items-start'>
              <div class='p-5 bg-gray-200 inline-block rounded-full'></div>
              <div class='w-full flex flex-col items-start gap-3'>
                <div class='bg-gray-200 pt-3 px-14 rounded '></div>
                <div class='bg-gray-200 pt-3 rounded w-full max-w-xs'></div>
                <div class='bg-gray-100 pt-3 rounded w-full max-w-md'></div>
              </div>
            </div>
    
            <div class='flex gap-6 items-start'>
              <div class='p-5 bg-gray-200 inline-block rounded-full'></div>
              <div class='w-full flex flex-col items-start gap-3'>
                <div class='bg-gray-200 pt-3 px-14 rounded '></div>
                <div class='bg-gray-200 pt-3 rounded w-full max-w-lg'></div>
                <div class='bg-gray-100 pt-3 rounded w-full max-w-md'></div>
              </div>
            </div>
    
            <div class='flex gap-6 items-start'>
              <div class='p-5 bg-gray-200 inline-block rounded-full'></div>
              <div class='w-full flex flex-col items-start gap-3'>
                <div class='bg-gray-200 pt-3 px-14 rounded '></div>
                <div class='bg-gray-200 pt-3 rounded w-full max-w-md'></div>
                <div class='bg-gray-100 pt-3 rounded w-full max-w-lg'></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Dashboard