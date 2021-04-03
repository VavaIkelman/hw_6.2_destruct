export default function showAttack(character) {
  const special = [];
  for (const prop of character.special) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = prop;

    const specialAttack = {
      id, name, description, icon,
    };
    special.push(specialAttack);
  }
  return special;
}
