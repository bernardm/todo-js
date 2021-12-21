# Todo App Project

## documentation

- [Odin Project Specs](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list)
- [SCRUM Book](https://www.goodreads.com/book/show/19288230-scrum)
- [date-fns library](https://date-fns.org/docs/Getting-Started/)
- [node assert](https://nodejs.org/api/assert.html)

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

## computer science

scalar: one piece of data. eg: integer, float, one letter (character)
data group: multiple scalars grouped together.
  c, c++: struct
  ```c
  struct Person {
    char name[50];
    int citNo;
    float salary;
  };
  ```
  js: object
  ```javascript
  const Person = {
    name: '',
    citiNo: 1,
    salary: 12.00,
  }
  java: POJO
  ```java
  public class Person {
    public String name;
    public int citiNo;
    public int salary;
  }
  ```

data structure: the individual items (elements) of these data structures are called nodes
  priority queue
  red-black tree
