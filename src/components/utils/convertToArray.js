export default data => {
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            data[key].id = key;
        }
    }
    return _.values(data);
};