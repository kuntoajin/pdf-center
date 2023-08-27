const Home = () => {
  return (
    <div className='bg-gradient-to-r from-pink-500 to-yellow-500 h-screen'>
      <div className='container mx-auto flex flex-col text-white h-full'>
        <header>
          <div className='flex justify-between'>
            <div className='font-bold text-[40px]'>
              PDFcenter.
            </div>
            <div className='flex'>
              <ul className='flex'>
                <li>
                  <a href='/prices'>Prices</a>
                </li>
                <li>
                  <a href='/services'>Services</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
              </ul>
              <button>Sign in</button>
            </div>
          </div>
        </header>
        <main className='flex flex-auto'>
          <div className='flex justify-between font-bold text-[60px] h-full items-center'>
            <div>
              Manage your document in simple way.
            </div>
            <div>
              <img src='/hero.svg' />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home