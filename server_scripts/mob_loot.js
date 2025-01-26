//used as a loot for modded dungeon
ServerEvents.entityLootTables(e => {
    e.addEntity("creeper", loot => {
        loot.addPool(pool => { pool.addItem("electrodynamics:dustniter").count([1, 5]) })
    })
    e.addEntity("wither_skeleton", loot => {
        loot.addPool(pool => { pool.addItem("electrodynamics:dustniter").count([1, 5]) })
    })
    e.addEntity("creeper", loot => {
        loot.addPool(pool => { pool.addItem("electrodynamics:dustniter").count([5, 7]) })
    })
    e.addEntity("husk", loot => {
        loot.addPool(pool => { pool.addItem("electrodynamics:dustniter").count([5, 7]) })
    })

})