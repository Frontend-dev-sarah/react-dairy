import './PersonItem.css';

export const PersonItem = ({ person }) => {
    return (
        <div className='itemContainer'>
            <label>{person.name} - {person.job}</label>
        </div>
    )
}