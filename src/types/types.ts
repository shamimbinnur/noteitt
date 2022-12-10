export interface UserInfo {
    id: string | undefined
    full_name: string | undefined
    email: string | undefined
    avatar: string | undefined
}
export interface NoteProps {
    id: number,
    created_at: string,
    title: string,
    details: string,
}
export interface NoteInfo {
    title: string
    details: string
}