import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import AuthReuxPage from './Pages/AuthRedux';
import CoursePage from './Pages/CoursePage';
import ExpensesPage from './Pages/ExpensesPage';
import PersonPage from './Pages/PersonPage';
import TaskPage from './Pages/TaskFirebasePage';



export const Wrapper = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<ExpensesPage />} />
                <Route path='/goal' element={<CoursePage />} />
                <Route path='/person' element={<PersonPage />} />
                <Route path='/task' element={<TaskPage />} />
                <Route path='/auth' element={<AuthReuxPage />} />
            </Routes>
        </BrowserRouter >
    )
}