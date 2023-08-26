const Home = () => {
  return (
    <div className='container mx-auto'>
      <header>
        <div className='flex justify-between'>
          <div>
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
      <main>
        <div>
          Manage your document
        </div>
        <div>
          <img src='' />
        </div>
      </main>
    </div>
  )
}

export default Home