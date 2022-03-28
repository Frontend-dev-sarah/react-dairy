import styles from './Inpus.module.css';
import { Card } from '../Card/Card';

export const Input = ({ label, inputValue, setInputValue }) => {
    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <label>{label}</label>
                <input value={inputValue} onChange={setInputValue} />
            </Card>
        </div>
    )
}