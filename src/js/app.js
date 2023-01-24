export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка. Допускаются только имена длиной от 2 символов и не более 10');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 100;
    this.defence = 40;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.health = 100;
  }
}
