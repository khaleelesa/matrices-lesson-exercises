/* Write your code below */
class Matrix {
    constructor(rows, cols) {
        this.rows = rows
        this.cols = cols
        this.matrix = this.generateMatrix(this.rows, this.cols)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1

        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    alter(row, col, newItem) {
        this.matrix[row][col] = newItem
    }
    get(row, col) {
        return this.matrix[row][col]
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
}




let m = new Matrix(3, 4)
m.print()
console.log(" ")
    //prints
    /*
    1       2       3       4
    5       6       7       8
    9       10      11      12
    */

m.alter(0, 0, m.get(1, 1))
console.log(" Column")
m.printColumn(0) //prints 6, 5, 9 (separate lines)
console.log(" Row")
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)



/* Do not remove the exports below */
module.exports = Matrix