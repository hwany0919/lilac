/** Get Cookie */
const getCookie = (key: string) => {
    const result = decodeURIComponent(
        parent.document.cookie.replace(
            new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'),
            '$1',
        ),
    )
    return result || null
}

/** Cookie 여부 */
const hasCookie = (key: string) => {
    return new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(parent.document.cookie)
}

/** Cookie Value 확인 */
const hasCookieValue = (key: string) => {
    const items = parent.document.cookie.split(`${key}=`)
    const value = items.at(-1)?.split(';').shift() as string
    return value && value.length > 0
}

/** 특정 키를 가진 쿠키 삭제 */
const removeCookie = (key: string) => {
    // 쿠키를 만료시키기 위해 과거 날짜로 설정
    parent.document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
}

export { getCookie, hasCookie, hasCookieValue, removeCookie }
