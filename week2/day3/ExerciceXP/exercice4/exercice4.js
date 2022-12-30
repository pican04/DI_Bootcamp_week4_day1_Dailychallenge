const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//Console.log the number of floors in the building.
console.log(building.numberOfFloors)

//Console.log how many apartments are on the floors 1 and 3.
console.log("appartement on first floor is:", building.numberOfAptByFloor.firstFloor)
console.log("appartement on third floor is:", building.numberOfAptByFloor.thirdFloor)

//Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("the second tenant is:" , building.nameOfTenants[1])
console.log("the number of rooms he has is:" , building.numberOfRoomsAndRent.dan[0]) 

