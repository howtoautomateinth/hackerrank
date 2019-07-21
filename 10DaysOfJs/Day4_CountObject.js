function getCount(objects) {
    return objects.filter(function (el) {
        return el.x == el.y
    }).length
}