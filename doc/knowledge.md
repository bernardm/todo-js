# Todo List Project

## reference

- [Odin Project Specs](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list)
- [SCRUM Book](https://www.goodreads.com/book/show/19288230-scrum)

## workflow

### planning a project

- make a list of features
- break down the features into todo items
- plan the data
- write the code
  - start with the simplest abstraction

## data

### todo item

invariant:
  - id must be unique within (item, list, group)

```json
item: {
  "id": 123,
  "description": "",
  "dueDate": "",
  "displayOrder": 3,
}
```

### todo list

invariant:
  - id must be unique within (item, list, group)
  - description must be unique within (list, group)

```json
list: {
  "id": 123,
  "description": "",
  "displayOrder": 3,
  "items": [],
}
```

### todo group

invariant:
  - id must be unique within (item, list, group)
  - description must be unique within (list, group)

```json
group: {
  "id": 123,
  "description": "",
  "displayOrder": 3,
  "lists": [],
}
```
