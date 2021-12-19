# Todo App Project

## reference

- [Odin Project Specs](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list)
- [SCRUM Book](https://www.goodreads.com/book/show/19288230-scrum)

## architecture

MVC

## data

### todo item

#### invariant
  - id must be unique within (item, project, group)

```json
item: {
  "id": 123,
  "description": "",
  "dueDate": "",
  "displayOrder": 3,
}
```

### todo project

#### invariant
  - id must be unique within (item, project, group)
  - description must be unique within (project, group)

```json
project: {
  "id": 123,
  "description": "",
  "displayOrder": 3,
  "items": [],
}
```

### todo group

#### invariant
  - id must be unique within (item, project, group)
  - description must be unique within (project, group)

```json
group: {
  "id": 123,
  "description": "",
  "displayOrder": 3,
  "projects": [],
}
```
