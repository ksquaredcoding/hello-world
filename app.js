let people = [
  {
    name: "Kevin",
    email: "kevin@codeworks.com"
  },
  {
    name: "Tim",
    email: "tim@codeworks.com"
  },
  {
    name: "Jen",
    email: "jen@codeworks.com"
  },
  {
    name: "Bob",
    email: "bob@codeworks.com"
  },
  {
    name: "Jim",
    email: "jim@codeworks.com"
  }
]
for (let i = 0; i < people.length; i++) {
  let person = people[i]
  console.log(`Name: ${person.name}
Email: ${person.email} `)
}