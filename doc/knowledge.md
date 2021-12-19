# Todo App Project

## documentation

- [Odin Project Specs](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list)
- [SCRUM Book](https://www.goodreads.com/book/show/19288230-scrum)
- [date-fns library](https://date-fns.org/docs/Getting-Started/)

## library

- [date-fns](https://github.com/date-fns/date-fns)

## tools

- [SVG Background Pattern Generator](https://www.svgbackgrounds.com/)
- [Color Palette Generator](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [List of Color Palette Tools](https://learntocodewith.me/posts/color-palette-tools/)
- [Typography Spacing Calculator](https://pearsonified.com/typography/)

## architecture

MVC

## data

### todo item

#### invariant
  - id must be unique within (item, project, group)


// intrinsic data
```json
item: {
  "complete": false,
  "description": "",
  "dueDate": "2012-04-23T18:25:43.511Z",
}
```

// view data
```json
item: {
  "id": 123,
  "displayOrder": 3,
}
```

// method
crud()
setPriority()

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

## css

### color palette
