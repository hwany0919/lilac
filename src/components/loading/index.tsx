import { LOADING_TYPE, type LoadingType } from './const'
import './styles.scss'

interface LoadingProps {
  type?: LoadingType
}

const PulseDots = () => (
  <div className="loading__dots" aria-hidden>
    <span className="loading__dot" />
    <span className="loading__dot" />
    <span className="loading__dot" />
  </div>
)

const Spinner = () => <div className="loading__spinner" aria-hidden />

const Loading = ({ type = LOADING_TYPE.SPINNER }: LoadingProps) => {
  const isPulse = type === LOADING_TYPE.PULSE

  return (
    <div className="loading" role="status" aria-label="로딩 중">
      {isPulse ? <PulseDots /> : <Spinner />}
    </div>
  )
}

export default Loading
export { LOADING_TYPE }
export type { LoadingType }
