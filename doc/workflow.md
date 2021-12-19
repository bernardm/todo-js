# workflow

## html project

1. content
1. display: layout
    - text
    - images
    - form elements
    - feedback messages
1. style: block spacing
1. style: fonts
1. style: colors, background

## programming project

planning:
  - discovery:
    - what is the business value?
    - what problem does this automate/solve?
  - analysis:
    - make a list of features
    - divide each feature into a list of todo items

data blueprint:
  - discovery:
    - input data
    - output data
    - problems with the data:
      - consistency/validity
        - is all the data in the same format?
        - are some data fields missing?
      - truth
        - are the values accurate or bogus?
  - analysis: ```input -> process -> output```

program blueprint:
  - analysis:
    - abstractions: *what metaphors do i use to represent the data?*
    - design patterns: *how to I organize the abstractions?*
    - mechanism of operation: *how do i get the computer to do this?*

  - writing code:
    - start with the simplest abstraction
    - code a test. validate that the implementation is doing what the blueprint says
    - code the abstractions
    - code the implementation
