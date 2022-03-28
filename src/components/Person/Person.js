import './Person.css';
import { useState } from 'react';
import { Input } from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { PersonList } from './PersonList';
import { Modal } from '../UI/Modal/Modal';

export const Person = () => {
    const [myName, setMyName] = useState('')
    const [job, setJob] = useState('')
    const [isValid, setIsValid] = useState(null);
    const [message, setMessage] = useState('');
    const [personList, setPersonList] = useState([]);

    const onValidForm = () => {
        if (myName.trim().length === 0 || job.trim().length === 0) {
            setMessage('Fields should not be empty')
            setIsValid(false)
        } else if (myName.trim().length < 2) {
            setMessage('Name is too short')
            setIsValid(false)
        } else {
            setMessage('ok')
            setMyName('');
            setJob('');
            setIsValid(true)
            setPersonList((prePersonList) => {
                return [...prePersonList, { name: myName, job: job }]
            })
        }
    }

    const submitPerson = () => {
        onValidForm();
    }


    return (
        <>
            {isValid === false && <Modal title='Form invalid' message={message} onClick={() => setIsValid(true)} />}
            <div className='container'>
                <Input
                    label='name'
                    inputValue={myName}
                    setInputValue={(event) => setMyName(event.target.value)}
                />
                <Input
                    label='Jobs'
                    inputValue={job}
                    setInputValue={(event) => setJob(event.target.value)}

                />

                <Button className='button' onClick={() => submitPerson()}>
                    Add to list
                </Button>
                <PersonList persons={personList} />
            </div>
        </>

    )
}