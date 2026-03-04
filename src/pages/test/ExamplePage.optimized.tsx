import ExampleComponent from '@/components/ExampleComponent'
import { memo, useCallback, useRef } from 'react'
import './ExamplePage.scss'

/**
 * 🚀 극단적 최적화 버전 - 100개 이상의 필드에 적합
 *
 * 성능 개선 포인트:
 * 1. useRef로 실시간 값 관리 (리렌더링 없음)
 * 2. 제출 시점에만 상태 동기화
 * 3. 메모이제이션된 Input으로 독립적 렌더링
 */

interface FormData {
    [key: string]: string
}

const MemoizedInput = memo(
    ({
        id,
        defaultValue,
        onChangeRef,
    }: {
        id: string
        defaultValue: string
        onChangeRef: React.MutableRefObject<(id: string, value: string) => void>
    }) => {
        const handleChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                onChangeRef.current(id, e.currentTarget.value)
            },
            [id, onChangeRef],
        )

        return <input type="text" id={id} defaultValue={defaultValue} onChange={handleChange} />
    },
)

MemoizedInput.displayName = 'MemoizedInput'

const ExamplePageOptimized = () => {
    // useRef로 실시간 값 저장 (리렌더링 트리거 안함)
    const formDataRef = useRef<FormData>({
        name: '',
        address: '',
        // 100개 필드 추가 가능
    })

    // 변경 핸들러를 ref로 관리하여 메모이제이션 안정성 확보
    const onChangeRef = useRef((id: string, value: string) => {
        formDataRef.current[id] = value
        // 개발 모드에서만 로깅
        if (process.env.NODE_ENV === 'development') {
            console.log(`Field ${id} changed:`, value)
        }
    })

    // 폼 제출 시에만 실제 데이터 사용
    const handleSubmit = useCallback(() => {
        const currentData = formDataRef.current
        console.log('Submitting data:', currentData)
        // API 호출 등의 로직
    }, [])

    // 특정 필드 값 읽기가 필요한 경우
    // const getFieldValue = useCallback((id: string) => {
    //   return formDataRef.current[id] || ''
    // }, [])

    return (
        <div className="example-page">
            <h1>예시 컴포넌트 (최적화 버전)</h1>
            <p className="description">useRef 기반 최적화로 100개 이상의 필드도 부드럽게 처리합니다.</p>

            <div className="example-container">
                <ExampleComponent />
            </div>

            <div>
                <p>이름</p>
                <MemoizedInput id="name" defaultValue={formDataRef.current.name} onChangeRef={onChangeRef} />
                <p>주소</p>
                <MemoizedInput id="address" defaultValue={formDataRef.current.address} onChangeRef={onChangeRef} />

                {/* 100개 필드 예시 - 성능 저하 없음 */}
                {/* 
        {Array.from({ length: 98 }, (_, i) => (
          <div key={i}>
            <p>필드 {i + 3}</p>
            <MemoizedInput 
              id={`field_${i + 3}`} 
              defaultValue={formDataRef.current[`field_${i + 3}`] || ''} 
              onChangeRef={onChangeRef} 
            />
          </div>
        ))}
        */}

                <button onClick={handleSubmit} style={{ marginTop: '20px' }}>
                    제출
                </button>
            </div>
        </div>
    )
}

export default ExamplePageOptimized
