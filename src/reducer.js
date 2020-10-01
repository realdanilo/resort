export const reducer = (state, action) => {
    switch (action.type) {
        case "INIT":
            return { ...action.init }
        case "UPDATE":
            return { ...state, ...action.newFilter }
        case "FILTER":
            let tempRooms = [...state.rooms]
            let { type, capacity, price, minSize, maxSize, breakfast, pets } = state;
            capacity = parseInt(capacity);
            price = parseInt(price);
            let breakfastCheck = breakfast;
            let petsCheck = pets;

            // filter by type
            if (type !== "all") {
                tempRooms = tempRooms.filter(room => room.type === type);
            }
            // filter by capacity
            if (capacity !== 1) {
                tempRooms = tempRooms.filter(room => room.capacity >= capacity);
            }
            // filter by price
            tempRooms = tempRooms.filter(room => room.price <= price);
            //filter by size
            tempRooms = tempRooms.filter(
                room => room.size >= minSize && room.size <= maxSize
            );
            //filter by breakfast
            if (breakfast) {
                tempRooms = tempRooms.filter(room => room.breakfast === true);
            }
            //filter by pets
            if (pets) {
                tempRooms = tempRooms.filter(room => room.pets === true);
            }

            return { ...state, sortedRooms: tempRooms, breakfast: breakfastCheck, pets: petsCheck }
        default:
            return state
    }
}

