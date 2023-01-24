import Character from '../app';

test('Верный ввод', () => {
  const received = new Character('Alex', 'Archer');
  const expected = {
    name: 'Alex',
    type: 'Archer',
    health: 100,
    level: 2,
    attack: 120,
    defence: 40,
  };
  received.health = 50;
  received.levelUp();

  expect(received).toEqual(expected);
});

test('Не верный ввод', () => {
  expect(() => new Character('R', 'Archer')).toThrow();
});

test('Нулевое здоровье', () => {
  expect(() => {
    const received = new Character('Alex', 'Archer');
    received.health = 0;
    received.levelUp();
  }).toThrow();
});
