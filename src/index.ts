import express, { Request, Response } from 'express'
import cors from 'cors'
import Excel from 'exceljs'

const app = express()

app.use(cors())

app.listen(3200, async () => {
	console.log('listening on http://localhost:3200/')
	console.log(await readDataFromExcel())
})

// readDataFromExcel()
// console.log(readDataFromExcel())

async function readDataFromExcel(): Promise<{ data: object }> {
	return {
		data: {
			name: 'Deby',
		},
	}
}
