async function updateOrCreate(model, where, newItem) {
    // First try to find the record
    const foundItem = await model.findOne({ where });
    if (!foundItem) {
        // Item not found, create a new one
        const item = await model.create(newItem)
        return { data: item, created: true, message: "Sukses Membuat Data!!!" };
    }
    // Found an item, update it
    const item = await model.update(newItem, {
        where
    }).then(function () {

        return model.scope('withoutPassword').findOne(where);
    });
    return { data: item, created: false, message: "Sukses Mengedit Data!!!" };
}

export default updateOrCreate;