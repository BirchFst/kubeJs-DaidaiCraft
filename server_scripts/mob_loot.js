//used as a loot for modded dungeon
ServerEvents.entityLootTables(e => {
    e.addEntity("zombie", loot => {
        loot.addPool(pool => { pool.addItem("dt:dustniter").count([1, 5]),pool.addItem("minecraft:rotten_flesh").count([1, 5]) })
    })
    e.addEntity("creeper", loot => {
        loot.addPool(pool => { pool.addItem("dt:dustniter").count([5, 9]) })
    })
})