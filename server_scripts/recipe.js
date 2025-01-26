
ServerEvents.recipes(event => {
    const { create } = event.recipes

    // Remove
    let remove_recipes = [
        "minecraft:gunpowder",
        "vs_tournment:check_loader",
        "corail_recycler:recycler",
        "corail_recycler:diamond_disk",
        "corail_recycler:steel_disk",
        "corail_recycler:netherite_disk",
        'storagenetwork:kabel',
        'storagenetwork:inventory_remote',
        'storagenetwork:crafting_remote',
        'storagenetwork:master',
    ]

    for (let i = 0; i < remove_recipes.length; i++) {
        event.remove({ output: remove_recipes[i] })
    }

    event.remove({ mod: "electrodynamics" })

    // Steel
    event.recipes.createMixing(['electrodynamics:ingotsteel'], ['minecraft:iron_ingot']).heated()
    event.blasting('electrodynamics:ingotsteel', { "tag": "forge:ingots/iron" }, 2, 500)
    event.shapeless("electrodynamics:resourceblocksteel", [
        'electrodynamics:ingotsteel', 'electrodynamics:ingotsteel', 'electrodynamics:ingotsteel', 'electrodynamics:ingotsteel',
        'electrodynamics:ingotsteel', 'electrodynamics:ingotsteel', 'electrodynamics:ingotsteel', 'electrodynamics:ingotsteel',
        'electrodynamics:ingotsteel'
    ])
    event.shapeless("9x electrodynamics:ingotsteel", 'electrodynamics:resourceblocksteel')
    event.recipes.createPressing("dt:steel_plate", "electrodynamics:ingotsteel")

    // Copper
    event.recipes.createPressing("dt:copper_shell", "create:copper_nugget")
    event.recipes.createCutting("dt:copper_shell_mini", "dt:copper_shell")

    // Mechanism
    event.recipes.createDeploying(["dt:gun_widget"], ["dt:steel_plate", "create:precision_mechanism"])
    event.recipes.createDeploying(["dt:storage_widget"], ["storagenetwork:kabel", "create:precision_mechanism"])
    event.recipes.createCutting("dt:gun_barrel", "dt:steel_plate")

    // Gunpowder
    event.recipes.createMixing(['6x minecraft:gunpowder'], ['3x electrodynamics:dustniter', '2x vs_tournament:coal_dust', 'electrodynamics:dustsulfur'])  // 火药制作

    // Recycler
    event.shaped("corail_recycler:recycler", ["ABA", "BCB", "ADA"], { A: { "tag": "minecraft:planks" }, B: { "tag": "forge:ingots/iron" }, C: { "tag": "forge:chests" }, D: "create:precision_mechanism" })
    event.shaped("corail_recycler:diamond_disk", [" A ", "ABA", " A "], { A: { "tag": "forge:nuggets/diamond" }, B: "dt:steel_plate" });
    event.shaped("corail_recycler:steel_disk", [" A ", "ABA", " A "], { A: { "tag": "forge:nuggets/iron" }, B: "dt:steel_plate" });
    event.shaped("corail_recycler:netherite_disk", [" A ", "ABA", " A "], { A: { "tag": "forge:nuggets/netherite" }, B: "dt:steel_plate" });

    // Stroage network
    event.shaped("storagenetwork:master", ["ABA", "BCB", "ABA"], { A: "minecraft:quartz", B: "storagenetwork:kabel", C: "dt:storage_widget" });
    event.shaped("storagenetwork:kabel", ["AAA", "B B", "AAA"], { A: "minecraft:stone_slab", B: "electrodynamics:ingotsteel" });
    event.shaped("storagenetwork:inventory_remote", ["ABA", "CDC", "A A"], { A: "dt:steel_plate", B: "minecraft:glowstone_dust", C: "electrodynamics:ingotsteel", D: "dt:storage_widget" });
    event.shaped("storagenetwork:crafting_remote", ["ABA", "CDC", "A A"], { A: "minecraft:redstone_lamp", B: "minecraft:crafting_table", C: "electrodynamics:resourceblocksteel", D: "dt:storage_widget" });



    let inc = Item.of("dt:gun_widget", { display: { Name: '未知枪体（半成品）' } })
    create.sequenced_assembly(
        [Item.of("dt:raw_gun_body").withChance(1)], "dt:gun_widget",
        [
            create.deploying(inc, [inc, "create:cogwheel"]),
            create.deploying(inc, [inc, "minecraft:stone_button"]),
            create.deploying(inc, [inc, "create:brass_sheet"]),
            create.deploying(inc, [inc, "create:zinc_sheet"]),
            create.pressing(inc, inc)
        ]
    ).transitionalItem(inc).loops(1)

    create.sequenced_assembly([Item.of("dt:raw_cgb").withChance(1)], "dt:gun_widget",
        [
            create.deploying(inc, [inc, "create:brass_sheet"]),
            create.deploying(inc, [inc, "create:zinc_sheet"]),
            create.deploying(inc, [inc, "create:cogwheel"]),
            create.pressing(inc, inc)
        ]
    ).transitionalItem(inc).loops(1)

    create.sequenced_assembly([Item.of("dt:raw_hgb").withChance(1)], "dt:gun_widget",
        [
            create.deploying(inc, [inc, "minecraft:stone_button"]),
            create.deploying(inc, [inc, "create:brass_sheet"]),
            create.deploying(inc, [inc, "create:zinc_sheet"]),
            create.pressing(inc, inc)
        ]
    ).transitionalItem(inc).loops(1)
    
    // gun bodyddd infix
    let trash = 'dt:steel_plate'
    let rifles = ['tacz:m16a1', 'tacz:m16a4', 'tacz:sks_tactical', 'tacz:hk_g3', 'tacz:ak47', 'tacz:hk416d', 'tacz:m4a1', 'tacz:mk14']
    let pistol = ['tacz:p320', 'tacz:deagle', 'tacz:python']
    let subm = ['tacz:uzi', 'tacz:vector45', 'tacz:hk_mp5a5', 'tacz:ump45']
    for (i = 0; i < rifles.length; i++) { CreateCutting(Item.of("dt:gun_body", { GunId: rifles[i] }), "dt:raw_gun_body") }
    for (i = 0; i < pistol.length; i++) { CreateCutting(Item.of("dt:hgb", { GunId: pistol[i] }), "dt:raw_hgb") }
    for (i = 0; i < subm.length; i++) { CreateCutting(Item.of("dt:cgb", { GunId: subm[i] }), "dt:raw_cgb") }
})
