import './App.css';
import Header from './components/Header'
import Main from './components/taskList'
import Footer from './components/Footer';


function App() {

    const user = {
        id: 1,
        name: 'Ryan Flores'
    }
    return ( 
        <div className="App">
            <Header listTitle={'Estudos'} user={user}/>
            <Main/>
           <Footer/>
        </div>
    );
}

export default App;