import ExampleComponent from '@/components/ExampleComponent'
import { useCallback, useState } from 'react'
import './ExamplePage.scss'

const ExamplePage = () => {
    const [data, setData] = useState<{ name: string; address: string }>({
        name: '',
        address: '',
    })
    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget
        console.log(e.target.value)
        setData(prev => ({ ...prev, [id]: value }))
    }, [])

    return (
        <div className="example-page">
            <h1>예시 컴포넌트</h1>
            <p className="description">Zustand 상태 관리와 SVG import를 활용한 예시입니다.</p>

            <div className="example-container">
                <ExampleComponent />
            </div>

            <div>
                <p>이름</p>
                <input type="text" id="name" value={data.name} onChange={onChangeInput} />
                <p>주소</p>
                <input type="text" id="address" value={data.address} onChange={onChangeInput} />
            </div>
        </div>
    )
}

export default ExamplePage
