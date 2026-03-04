import { FC } from 'react'
import ExampleIcon from '@/assets/example.svg?react'
import { useExampleStore } from '@/stores/useExampleStore'
import './ExampleComponent.scss'

const ExampleComponent: FC = () => {
    const { count, increment, decrement, reset } = useExampleStore()

    return (
        <div className="example-component">
            <div className="icon-wrapper">
                <ExampleIcon className="example-icon" />
            </div>

            <h2>Example Component</h2>

            <div className="counter">
                <p>Count: {count}</p>

                <div className="button-group">
                    <button onClick={decrement}>-</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={increment}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ExampleComponent
