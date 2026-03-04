import type { AxiosError } from 'axios'
import type { ILoginParams } from './type'

import { fetchApi } from '@/request/axios'
import { API, HTTP_METHOD } from '@/request/const'
import { useMutation } from '@tanstack/react-query'

const useLoginApi = {
    /** 토큰 갱신 */
    refresh: () => fetchApi({ method: HTTP_METHOD.POST, url: API.Auth.Refresh }),
    /** 로그인 */
    login: ({ onSuccess, onError }: { onSuccess: (data: unknown) => void; onError: (error: AxiosError) => void }) => {
        return useMutation({
            mutationFn: (params: ILoginParams) => fetchApi({ method: HTTP_METHOD.POST, url: API.Auth.Login, data: params }),
            onSuccess: data => {
                onSuccess(data.body)
            },
            onError: (error: AxiosError) => {
                onError(error)
            },
        })
    },
    /** 로그아웃 */
    logout: () => fetchApi({ method: HTTP_METHOD.POST, url: API.Auth.Logout }),
}

export default useLoginApi
