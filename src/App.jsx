function App() {
  return (
    <div className='h-screen dark:bg-slate-900 dark:text-slate-50'>
      <header className='px-5 py-2 flex justify-between items-center'>
        <p className='text-xl md:text-2xl hover:text-emerald-600'>Tailwind Demo</p>
        <nav className='space-x-4'>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
      </header>
    </div>
  )
}

export default App
