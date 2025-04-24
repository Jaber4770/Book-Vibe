const getBookFromReadDB = () => {
    const getBookDataSTR = localStorage.getItem("readList");
    if (getBookDataSTR) {
        return JSON.parse(getBookDataSTR);
    } else {
        return [];
    }
}
const getBookFromWishDB = () => {
    const getBookDataSTR = localStorage.getItem("wishList");
    if (getBookDataSTR) {
        return JSON.parse(getBookDataSTR);
    } else {
        return [];
    }
}

const setDataToBD = (id) => {
    const storedData = getBookFromReadDB();
    
    if (storedData.includes(id)) {
        alert("Already added!");
    } else {
        storedData.push(id);
        const stringifiedData = JSON.stringify(storedData);
        localStorage.setItem('readList', stringifiedData);
    }
}
const setDataToWishBD = (id) => {
    const storedData = getBookFromWishDB();
    
    if (storedData.includes(id)) {
        alert("Already added!");
    } else {
        storedData.push(id);
        const stringifiedData = JSON.stringify(storedData);
        localStorage.setItem('wishList', stringifiedData);
    }
}


export { setDataToBD, setDataToWishBD };