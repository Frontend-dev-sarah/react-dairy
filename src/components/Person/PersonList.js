import { PersonItem } from "./PersonItem"
import './PersonList.css';

export const PersonList = ({ persons }) => {
    return (
        <div className="listContainer">
            {persons.map((person) => <PersonItem key={Math.random()} person={person} />)}
        </div>
    )
}