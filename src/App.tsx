// import axios from "axios";
// import { useEffect, useState } from "react";

function App() {
  // console.log("=============== 1 =============")
  //       // const longVariable : string = 'The Quick brown fox jumps over the lazy dog.';
  //       // console.log(longVariable)
  //       // const shortVariable : string = longVariable.slice(0,10);
  //       // console.log(shortVariable)
  //       console.log("=============== 2 =============")

  //       // const str1 :string = 'Hello';
  //       // const str2 : string = "Hello";
  //       // if(str1 === str2) {
  //       //   console.log(true)
  //       // }else {
  //       //   console.log(false)
  //       }
  //       console.log("=============== 3 =============")

  //       // const isDivBy4And8 = (num : number):boolean => {
  //       //   if(num % 4 === 0 && num % 8 === 0) {
  //       //     return true
  //       //   }else {
  //       //     return false
  //       //   }
  //       // }

  //       // console.log(isDivBy4And8(14))
  //       console.log("=============== 4 =============")

  //       // useEffect(() => {
  //       //   handleData()
  //       // },[])

  //       // const handleData = async () => {
  //       //   const res =await  axios.get("https://api.thecatapi.com/v1/images/search?limit=10")
  //       //   setData(res.data)
  //       // }
  //       // const [data, setData] = useState([])
  //       // console.log(data)

  //       console.log("=============== 5 =============")

  //     //   function calculateAverage(arr: number[]) {
  //     //     let sum = 0;
  //     //     let avg = 0;
  //     //     if (arr.length === 0) {
  //     //       throw new Error("The array is empty. Cannot calculate average.");
  //     //     }
        
  //     //     for(const x of arr) {
  //     //       sum += x
  //     //     }
  //     //  avg = sum / arr.length;
  //     //  console.log(`The average is: ${avg}`)
  //     //   }
        
  //     //   // Example usage:
  //     //   calculateAverage([1, 2, 3, 4, 5])

        console.log("=============== 6 =============")

        const maxVAlue = (arr:number[]) : number => {
          let maxNumber = 0;
          for(const x of arr) {
            if(x > maxNumber) {
              maxNumber = x;
            }
          }
          return maxNumber
        }
        console.log(maxVAlue([1,2,3,4,53,3,2,11]))

        console.log("=============== 7 =============")


        const myFunction = (arr:string[]) => {
          const newArr:string[] = arr.map((item) => item.toUpperCase())
          console.log(newArr)
        }

        myFunction(["Zaheer" , 'Jutt' , "Ahmad"])

        console.log("=============== 8 =============")

        const SqurdConveter = (arr: number[]) => {
          const newArr: number[] = arr.map((item) => item * 2)
          console.log(newArr)
        }
        SqurdConveter([1,2,3,4,5])

        console.log("=============== 8 =============")

        type Product = {
          name:string; price: number; quantity: number
        }
        
        const product:Product= {
          name : 'laptop',
          price : 25000,
          quantity : 5
        }
        console.log(product)

        const totalPriceOfLaptop = (Obj:Product):number => {
            return  Obj.price * Obj.quantity;
        }
        console.log(totalPriceOfLaptop(product))

        console.log("=============== 9 =============")

        type Student = {
          name:string;
          age : number;
          gender?: string;
          greet : (country:string) => string;
        }

        const stu1:Student = {
          name : 'Zaheer',
          age : 22,
          greet:(country) => { return `My name is ${stu1.name}. My age is ${stu1.age}. My Country name is ${country}` }
        }

        console.log(stu1.greet("Pakistan"))

        console.log("=============== 10 =============")

        enum Role { 
            admin = 'admin',
            user = 'user'
        }

        type User = {
          name : string;
          email : string;
          password : string;
          role : string;
        }


        const use1:User = {
          name : 'Zaheer',
          email : 'zaheerlangrial54@gmail.com',
          password : 'zaheer123',
          role : Role.admin,
        }

        const use2:User = {
          name : 'Shahzaib',
          email : 'langrial54@gmail.com',
          password : 'zaheer123',
          role : Role.user,
        }

        const use3:User = {
          name : 'Asad',
          email : 'Asadl54@gmail.com',
          password : 'zaheer123',
          role : Role.user,
        }

        console.log( use1)
        console.log( use2)
        console.log( use3)



        const loginHandle = (user:User):string => {
          if(user.role === 'admin') {
            return `WellCome Back Admin Sir!. Your email is ${user.email} `
          }else {
            return `WellCome New User!`
          }
        }

        console.log(loginHandle(use1))


        // enum for objects tupple for array 

        type personalInfo = [
          string , number , boolean
        ]

        const arr: personalInfo = ['Zaheer' , 16 , true]

        console.log(arr)

        console.log("=============== 11 =============")


        // Tuples in Typescript

//! Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.


type ProductInfo = [
  string , number , number , 
]

const product1: ProductInfo = [
  'Laptop', 25000 , 5
]
const product2: ProductInfo = [
  'Mobile', 35000 , 10
]
console.log(product1)
console.log(product2)




//! Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

type SubjectGrade = [
  string,  number 
]

const arr4 :SubjectGrade[] = [
  ['Math' , 90],
  ['English' , 60],
  ['Science', 90]
]
// console.log(arr4)

const AvgerageFinder = (arr:SubjectGrade[]):string => {
  let sumOfSubjGrades = 0;
  let avg = 0;
  for(const [, grade] of arr) {
    sumOfSubjGrades += grade;
  }
avg = sumOfSubjGrades/arr.length;
return `The Total Average Grade of a Student is : ${avg} .`
  
}
console.log(AvgerageFinder(arr4))

//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

 type WeatherData = [
  string , number , string
 ]

 const WeatherArr:WeatherData[] = [
  ["Faqirwali" , 34, 'Sunny'] ,
  ['Haroonabad' , 33 , 'Sunny'], 
  ['Bahawelpur' , 20 , 'Rainy']
 ]

 const Weather = (arr:WeatherData[]) => {
  for(let [city , calcius , condition] of arr) {
    console.log(`City : ${city}`)
    console.log(`Temperature : ${calcius}`)
    console.log(`Condition : ${condition}`)
    console.log(`------------------------`)
  }
 }
 Weather(WeatherArr)





  return (
    <>
      <div>

       <h1>Hello World"</h1>
        </div> 
    </>
  )
}

export default App
