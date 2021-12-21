const assert = require('assert');
const model = require('../src/model');

function checkIfValidUUID(str) {
  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return regexExp.test(str);
}

describe.skip('DataStore', function () {
  describe('create()', function () {
    it('should return a UUID', function () {
      itemList = new model.TodoItemList();
      const id = itemList.create();
      assert.ok(checkIfValidUUID(id));
    });
  });
});

describe('TodoProject', function () {
  describe('constructor()', function () {
    it('should store title as a field', function () {
      const title = 'project name';
      project = new model.TodoProject(title);
      assert.equal(project.title, title);
    });
  });
});

describe('DataStore', function () {
  describe('create()', function () {
    it('should return a node', function () {
      const db = new model.DataStore();
      const expected = { name: "a" };
      actual = db.create(expected);
      assert.equal(actual.name, expected.name);
    });
  });

  describe('read()', function () {
    it('should return the node corresponding to the specified id', function () {
      const db = new model.DataStore();
      const expected = { name: "a" };
      const { id } = db.create(expected);
      const { name: actualName } = db.read(id);
      assert.equal(actualName, expected.name);
    });
  });

  describe('update()', function () {
    it('should update a node corresponding to the specified id', function () {
      const db = new model.DataStore();
      const expected = db.create({ name: "a" });
      expected.name = 'b';
      db.update(expected.id, { id: 1, name: expected.name });
      const actual = db.read(expected.id);
      assert.deepEqual(actual, expected);
    });
  });

  describe('delete()', function () {
    it('should delete a node corresponding to the specified id', function () {
      const db = new model.DataStore();
      const expected = { name: "a" };
      const { id } = db.create(expected);
      const { name: actualName } = db.read(id);
      assert.equal(actualName, expected.name);

      db.delete(id);
      const node = db.read(id);
      assert.equal(node, null);
    });
  });

  describe('*[Symbol.iterator]()', function () {
    it('should iterate over all the nodes', function () {
      const db = new model.DataStore();
      db.create({ name: "a" });
      db.create({ name: "b" });

      for (let node of db) {
        assert.ok(['a', 'b'].includes(node.name));
      }
    });
  });
});
