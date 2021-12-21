class TodoItem {
  constructor(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
    this.complete = false;
  }
}

class TodoProject {
  constructor(title) {
    this.title = title;
  }
}

class DataStore {
  constructor() {
    this.list = {};
  }

  get length() {
    return Object.keys(this.list).length;
  }

  create(value) {
    const crypto = require("crypto");
    // let id = self.crypto.randomUUID();
    const id = crypto.randomBytes(16).toString("hex");
    const node = { id, ...value };
    this.list[id] = node;
    return node;
  }

  read(id) {
    return this.list[id];
  }

  update(id, node) {
    const { id: _, ...values } = node;
    this.list[id] = { id, ...values };
    return node;
  }

  delete(id) {
    delete this.list[id];
    return null;
  }

  *[Symbol.iterator]() {
    for (const id in this.list) {
      yield this.list[id];
    }
  }
}

module.exports = { DataStore, TodoProject };
