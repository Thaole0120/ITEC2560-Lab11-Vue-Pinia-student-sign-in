
// Importing necessary functions from Pinia and Vue
import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
// Define the Pinia store named 'students'
export const useStudentStore = defineStore ('students', () => {

    // Reactive state: studentList holds all student data
    const studentList = ref ([
        {name: 'A.Student', starID: 'aa1234aa', present:false},
        {name: 'B.Student', starID: 'bb1234bb', present: false},
    ])

    const mostRecentStudent = ref( {}) //empty object


    function addNewStudent(student) { 
        studentList.value.push(student)
    }


    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter((student) => {
            return studentToDelete != student
        })
        mostRecentStudent.value = {} // reset most recent message
    }

    // Function to set a student as the most recent one that arrived or left
    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    const studentCount = computed(() => {
        return studentList.value.length
    })

    const sortedStudents = computed (() => {
        return studentList.value.toSorted(( s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })


    return {
        //reactive data
        studentList,
        mostRecentStudent,

        //functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        //computed properties
        studentCount,
        sortedStudents

    }


})