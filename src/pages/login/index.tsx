import type { AxiosError } from 'axios'

import { useCallback, useState } from 'react'
import useLoginApi from './loginApi'

import './styles.scss'

const Login = () => {
    const [userInfo, setUserInfo] = useState<{ id: string; password: string }>({ id: '', password: '' })
    const { mutate: login } = useLoginApi.login({
        onSuccess: data => {
            console.log('data :: ', data)
        },
        onError: (error: AxiosError) => {
            const { message } = error.response?.data as unknown as { message: string }
            console.log('message :: ', message)
            // setErrorMsg(message)
        },
    })

    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget
        setUserInfo(prev => ({ ...prev, [id]: value }))
    }, [])

    const onLogin = useCallback(() => {
        if (userInfo.email === '' || userInfo.password === '') {
            alert('이메일 또는 비밀번호를 입력해주세요.')
        } else login(userInfo)
    }, [userInfo])

    return (
        <div id="login">
            <div className="login-form">
                <div className="login-form-item">
                    <span>계정</span>
                    <input type="text" id="id" placeholder="계정" value={userInfo.email} onChange={onChangeInput} />
                </div>
                <div className="login-form-item">
                    <span>비밀번호</span>
                    <input type="password" id="password" placeholder="비밀번호" value={userInfo.password} onChange={onChangeInput} />
                </div>
            </div>
            <button className="login-button" onClick={onLogin}>
                로그인
            </button>
        </div>
    )
}

export default Login
