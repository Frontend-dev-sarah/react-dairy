import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import CoursePage from './Pages/CoursePage';
import ExpensesPage from './Pages/ExpensesPage';
import PersonPage from './Pages/PersonPage';


export const Wrapper = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<ExpensesPage />} />
                <Route path='/goal' element={<CoursePage />} />
                <Route path='/person' element={<PersonPage />} />
            </Routes>
        </BrowserRouter >
    )
}