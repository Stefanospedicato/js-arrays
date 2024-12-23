const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.toReversed()
//console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames =[]
for(i=0 ; i<teachers.length; i++){
  if(teachers[i].length >= 5){
    longNames.push(teachers[i])
  }

/*
Per farlo più pulito e leggibile creiamo una const utilizzabile.

  if(i=0 ; i<teachers.length; i++){
    const name = teachers[i]
    if(name.length >= 5){
      longNames.push(name}
*/
}
//console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1,1) //se so' l'indice della parola
console.log(teachers);
//oppure
for(i = 0 ; i < teachers.length ; i++){
    const name = teachers[i]
    if(name === 'Ed'){
      teachers.splice (i,1)
    }
}
