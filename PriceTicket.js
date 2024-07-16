// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

 var age = prompt ('How old are you ? ')

function TicketPrice (age) { 

    if ( age <= 12 ) { 
   Price = 10

    }
    else if ( age >= 13 && age <= 17) { 

        Price = 15
    }
    else { 
        Price = 20
    }

return ` ${Price}$`
}

console.log(TicketPrice (age)) 


