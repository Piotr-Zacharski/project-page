import hm from '/src/img/hm.png';
import dnd from '/src/img/dnd.png';
import todo from '/src/img/todo.png';
import fetch from '/src/img/fetch.png';
import weather from '/src/img/weather.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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

        <div className="grid gap-10 grid-cols-3 grid-rows-3 justify-center mt-15">
          <a href="https://hendimejdi.vercel.app/" target="_blank">
            <img src={hm} alt="logo" className=" rounded-full justify-center" /><h2 className="p-2">HendiMejdi</h2></a>
       
          <a href="https://dnd-board.vercel.app/" target="_blank">
            <img src={dnd} alt="logo" className="justify-center rounded-full" /><h2 className="p-2">Drag'n'Drop Board </h2></a>
      
          <a href="https://tscript-todo.netlify.app" target="_blank">
            <img src={todo} alt="logo" className="justify-center rounded-full" /><h2 className="p-2">Typescript - Todo</h2></a>

          <a href="https://axios-psi.vercel.app/" target="_blank">
            <img src={fetch} alt="logo" className="justify-center rounded-full" /><h2 className="p-2">Futurama Api Fetch</h2></a>
       
          <a href="https://u-weather.vercel.app/" target="_blank">
            <img src={weather} alt="logo" className="justify-center rounded-full" /><h2 className="p-2">Weather App</h2></a>
          
          <h3 className="text-4xl mt-20">◦◦◦<span className="pl-2">more to come</span></h3>
       
        </div>
      </main>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>phz | 2022</p>
        <div className="flex -mx-6">
          <a href="https://www.linkedin.com/in/piotr-h-zacharski" className="mx-3 hover:opacity-50 hover:text-yellow duration-150"><LinkedInIcon /></a> |
          <a href="https://github.com/Piotr-Zacharski" className="mx-3 hover:opacity-50 duration-150"><GitHubIcon /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
