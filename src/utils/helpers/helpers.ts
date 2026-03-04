/**
 * 숫자를 천 단위로 구분하여 포맷팅합니다.
 * @param num 포맷팅할 숫자
 * @returns 포맷팅된 문자열
 */
export const formatNumber = (num: number): string => {
    return num.toLocaleString('ko-KR')
}

/**
 * 문자열을 자르고 말줄임표를 추가합니다.
 * @param text 원본 문자열
 * @param maxLength 최대 길이
 * @returns 잘린 문자열
 */
export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
}

/**
 * 이메일 형식이 유효한지 검증합니다.
 * @param email 검증할 이메일 주소
 * @returns 유효한 경우 true
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
