import styles from './EnergysavingPage.module.css'

export const EnergysavingPage = () => {

    // function bracketsHandler(str) {
    //     const brackets = {
    //         right: 0,
    //         left: 0,
    //     }
    //     for (let i = 0; i < str.length; i++) {
    //         if (str[i] === ')') {
    //          brackets.right = brackets.right + 1
    //          }
    //         if (str[i] === '(') {
    //             brackets.left = brackets.left + 1
    //              }
    //         }

    //      console.log(brackets);
    //     if (brackets.right === brackets.left) {
    //         return 'Одинаковое количество скобок'
    //     }
    //     return 'Различное количество скобок'
    // }

    // console.log(bracketsHandler('(())((())))('))

    const arr1 = [1, 1, 2, 3, 3, 4, 6, 6, 7, 8, 8, 8, 9]

    function handler(arr) {
        const numbers = {}
        const unique = []
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i]
            if (!(current in numbers)) {
                numbers[current] = 1
            }
            else {
                numbers[current] += 1
            }
        }

        const keys = Object.keys(numbers)
        keys.forEach(key => {
            if (numbers[key] === 1) {
                unique.push(key)
            }
        })

        return unique
    }

    console.log(handler(arr1));

    return (
        <>
            {/* {bracketsHandler('(())((())))()')} */}
        </>
    )
} 