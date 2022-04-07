
function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">

        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl mb-8 uppercase font-black">
          My Projects Page
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          <a href="https://hendimejdi.vercel.app/" target="_blank">HendiMejdi</a>
        </div>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          <a href="https://dnd-board.vercel.app/" target="_blank">Drag and Drop Board</a>
        </div>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          <a href="https://tscript-todo.netlify.app" target="_blank">Typescript - ToDo App</a>
        </div>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          <a href="https://axios-psi.vercel.app/" target="_blank">Axios</a>
        </div>

      </main>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>phz | 2022</p>
        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-50 duration-150">About</a> |
          <a href="#" className="mx-3 hover:opacity-50 duration-150">Projects</a> |
          <a href="#" className="mx-3 hover:opacity-50 duration-150">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
