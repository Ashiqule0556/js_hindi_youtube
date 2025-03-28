const course={
    coursename:"js in hindi",
    price:"9999",
    courseInstructor:"hitesh"
}

// course.courseInstructor
const {courseInstructor}=course;
console.log(courseInstructor);
const {courseInstructor:instructor}=course;  // also we can destructor value like instructor

console.log(instructor);

// {                // json  all value are string
//  "name":"ashif",
//     "courseName":"js in hindi",
//     "price":"free"
// }
 

[
    {},
    {},
    {}
]