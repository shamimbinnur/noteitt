# NoteIt
A simple web app for note keeping and sharing note with others.

### Screenshots
<img width="1440" alt="Screenshot 2022-12-31 at 8 30 33 PM" src="https://user-images.githubusercontent.com/48399373/212338762-b74de505-348a-4f4f-b1c3-c046b487c6ce.png">

https://user-images.githubusercontent.com/48399373/212458698-c628f411-5c84-4ad7-ac49-35c257b979ed.mov

## Built with:
1. React.
2. Redux Tookit.
3. Supabase, Supabase Realtime Database, Supabase Auth.
4. Tailwind CSS.

## Features

- Simplest UI/UX
- Create a note with one click and update it in no time.
- One-click authentication.
- Give every note a different color.
- Share any note with anyone with a simple link.


### Run this on your local machine.
To run this project, you will need to add the following environment variables to your .env file

```
REACT_APP_SUPABASE_URL=
REACT_APP_SUPABASE_ANON_KEY=
```

### Supabase table
1. notes
2. profile

***Note table***

| fields          | tpye           |
| --------------  | -------------- |
| id              | int (Primary)  |
| details         | varchar        |
| authorId        | varchar        |
| isPublic        | boolean        |
| uuid            | uuid           |
| color           | text           |

***Profile table***

| fields          | tpye           |
| --------------  | -------------- |
| id              | int (Primary)  |
| email           | varchar        |
| avatar          | varchar        |
| full_name       | boolean        |


### Run these commands from the local directory of the project:

```
npm install
npm start
```
