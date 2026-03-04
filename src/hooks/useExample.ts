import axiosInstance from '@/request/axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

interface ExampleData {
    id: number
    name: string
}

// Query 예시
export const useExampleQuery = () => {
    return useQuery<ExampleData[]>({
        queryKey: ['examples'],
        queryFn: async () => {
            const { data } = await axiosInstance.get('/examples')
            return data
        },
    })
}

// Mutation 예시
export const useCreateExample = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (newExample: Omit<ExampleData, 'id'>) => {
            const { data } = await axiosInstance.post('/examples', newExample)
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['examples'] })
        },
    })
}
