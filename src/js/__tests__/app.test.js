import Team from '../app';
import Character from '../charaster';

test('createCharacter', () => {
  const character = new Character('Name1', 'Daemon');
  expect(character).toEqual(
    {
      health: 100,
      level: 1,
      name: 'Name1',
      type: 'Daemon',
    },
  );
});
test('testAdd()', () => {
  function addCharacter() {
    const team = new Team();
    const zombie = new Character('Name1', 'Zombie');
    team.add(zombie);
    team.add(zombie);
  }
  expect(addCharacter).toThrow('Персонаж уже существует');
});

test('testAddAll()', () => {
  const team = new Team();
  const zombie = new Character('Name1', 'Zombie');
  const magician = new Character('Name2', 'Magician');
  const daemon = new Character('Name3', 'Daemon');
  const array = [zombie, magician, daemon];
  const expected = new Set(array);
  team.addAll(...array);
  expect(expected).toEqual(team.members);
});

test('testToArray()', () => {
  const team = new Team();
  const zombie = new Character('Name1', 'Zombie');
  const magician = new Character('Name2', 'Magician');
  team.addAll(zombie, magician);
  expect(team.toArray()).toEqual([
    {
      health: 100,
      level: 1,
      name: 'Name1',
      type: 'Zombie',
    },
    {
      health: 100,
      level: 1,
      name: 'Name2',
      type: 'Magician',
    },
  ]);
});
