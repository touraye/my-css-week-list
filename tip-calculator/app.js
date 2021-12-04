const form = document.querySelector('form')
const billTax = document.getElementById('billTax')
const tipVal = document.getElementById('tipTax')
const totalVal = document.getElementById('total')
let billAmount = 0
let taxRate = 0
let tipRate = 0
//listen @on submit
form.addEventListener('submit', (e) => {
	e.preventDefault()
	billAmount = document.getElementById('billAmount').value
	taxRate = document.getElementById('taxRate').value
	tipRate = document.getElementById('tipRate').value

	// console.log(`bill ${billAmount}`)
	// console.log(`tax rate ${JSON.parse(taxRate)}`)
	// console.log(`tip rate ${tipRate}`)

	//tip calculator
	const mealPriceBeforeTax = JSON.parse(billAmount)
	const tax = JSON.parse(taxRate)
	const tip = JSON.parse(tipRate)

	console.log('meal before tax ', mealPriceBeforeTax)

	//function for percentage
	const percentage = (value, taxes) => {
		return (value * taxes) / 100
	}

	//function for tip
	const tipPercentage = (value, tips) => {
		return (value * tips) / 100
	}

	//func for total meal price after tax
	const mealPriceAfterTax = (value, amountInTax, amountInTip) => {
		return value + amountInTax + amountInTip
	}

	//compute amount in tax for meal price
	let mealTax = percentage(mealPriceBeforeTax, tax)
	let tipTax = tipPercentage(mealPriceBeforeTax, tip)
	let total = mealPriceAfterTax(mealPriceBeforeTax, mealTax, tipTax)
	console.log('meal tax ', mealTax)
	console.log('tip ', tipTax)
	console.log('total pay ', total)
	billTax.innerHTML = mealTax
	tipVal.innerHTML = tipTax
	totalVal.innerHTML = total
})
