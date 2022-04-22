# Parky Boards
Simple thread/image board project focused on simplicity and functionality.

- Mongo
- Express
- Angular
- Node

![layout](layout.jpeg)

## Setting up
Work in progress

## Server endpoints
#### Start thread
`POST /thread`
```json
{
    "title": "Hello",
    "content": "World"
}
```

#### Fetch 10 threads
`GET /thread`

#### Find a thread
`GET /thread/<thread_id>`

#### Send comment
`POST /comment`
```json
{
	"content": "LOOOOOOL", 
	"thread": "62619a32e86f2f8619bb414f"
}
```

#### Fetch comments
`POST /comment`
```json
[
    "62619a32e86f2f8619bb414f",
    "abcd",
    ...
]
```
