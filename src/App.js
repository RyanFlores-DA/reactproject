import './App.css';
import { useEffect, useState } from 'react'
import api from './services/api';

function App() {
    //iniciar um array vazio pra guardar a lista de tasks
    const[tasks, setTasks] = useState([])

    useEffect(() => {
        api.get('posts').then(response => {
            setTasks(response.data)
        })
    }, [])
    return ( 
        <div className="App">
            <header className="App-header">
            <h1>Todo List - React</h1>
            </header>
            <main>
                <ul>
                    {
                    tasks.map(tasks =>{
                        return ( 
                            <li>
                                <h5>{tasks.title}</h5>
                                <input type="checkbox" checked={tasks.completed} />
                            </li>
                            )
                    })
                    }
                    
                </ul>
            </main>
        </div>
    );
}

export default App;