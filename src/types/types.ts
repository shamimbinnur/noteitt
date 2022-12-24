export interface UserInfo {
    id: string | undefined
    full_name: string | undefined
    email: string | undefined
    avatar: string | undefined
}
export interface NoteProps {
    id: number,
    uuid: string
    created_at: string,
    authorId: string,
    title: string,
    details: string,
    isPublic: boolean,
    color: string
}
export interface GuestNoteProps {
    uuid: string
    title: string,
    details: string,
    author: UserInfo
}
export interface NoteInfo {
    title: string
    details: string
}