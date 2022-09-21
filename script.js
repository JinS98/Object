let patient = {
  name: "yujin",
  age: 23,
  disease: "cold"
}

console.log(patient)
console.log(patient.name)
console.log(patient["name"])
patient.name = "seungjin"
console.log(patient.name)

let patientList = [{ name: "yujin", age: 23 }, { name: "seungjin", age: 25 }]

console.log(patientList)
console.log("첫번째 환자는 " + patientList[0])
console.log("첫번째 환자의 나이는 " + patientList[0].age)
console.log("두번째 환자의 이름은 " + patientList[1]["name"])