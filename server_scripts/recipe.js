
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

    // Steel
    event.recipes.createMixing(['dt:steel_ingot'], ['minecraft:iron_ingot']).heated()
    event.blasting('dt:steel_ingot', { "tag": "forge:ingots/iron" }, 2, 500)
    event.shapeless("dt:steel_block", [
        'dt:steel_ingot', 'dt:steel_ingot', 'dt:steel_ingot', 'dt:steel_ingot',
        'dt:steel_ingot', 'dt:steel_ingot', 'dt:steel_ingot', 'dt:steel_ingot',
        'dt:steel_ingot'
    ])
    event.shapeless("9x dt:steel_ingot", 'dt:steel_ingot')
    event.recipes.createPressing("dt:steel_plate", "dt:steel_ingot")

    // Copper
    event.recipes.createPressing("dt:copper_shell", "create:copper_nugget")
    event.recipes.createCutting("dt:copper_shell_mini", "dt:copper_shell")

    // Mechanism
    event.recipes.createDeploying(["dt:gun_widget"], ["dt:steel_plate", "create:precision_mechanism"])
    event.recipes.createDeploying(["dt:storage_widget"], ["storagenetwork:kabel", "create:precision_mechanism"])
    event.recipes.createCutting("dt:gun_barrel", "dt:steel_plate")

    // Gunpowder
    event.recipes.createMixing(['12x minecraft:gunpowder'], ['1x dt:dustniter', '2x vs_tournament:coal_dust', 'minecraft:flint'])  // 火药制作

    // Recycler
    event.shaped("corail_recycler:recycler", ["ABA", "BCB", "ADA"], { A: { "tag": "minecraft:planks" }, B: { "tag": "forge:ingots/iron" }, C: { "tag": "forge:chests" }, D: "create:precision_mechanism" })
    event.shaped("corail_recycler:diamond_disk", [" A ", "ABA", " A "], { A: { "tag": "forge:nuggets/diamond" }, B: "dt:steel_plate" });
    event.shaped("corail_recycler:steel_disk", [" A ", "ABA", " A "], { A: { "tag": "forge:nuggets/iron" }, B: "dt:steel_plate" });
    event.shaped("corail_recycler:netherite_disk", [" A ", "ABA", " A "], { A: { "tag": "forge:nuggets/netherite" }, B: "dt:steel_plate" });

    // Stroage network
    event.shaped("storagenetwork:master", ["ABA", "BCB", "ABA"], { A: "minecraft:quartz", B: "storagenetwork:kabel", C: "dt:storage_widget" });
    event.shaped("storagenetwork:kabel", ["AAA", "B B", "AAA"], { A: "minecraft:stone_slab", B: "dt:steel_ingot" });
    event.shaped("storagenetwork:inventory_remote", ["ABA", "CDC", "A A"], { A: "dt:steel_plate", B: "minecraft:glowstone_dust", C: "dt:steel_ingot", D: "dt:storage_widget" });
    event.shaped("storagenetwork:crafting_remote", ["ABA", "CDC", "A A"], { A: "minecraft:redstone_lamp", B: "minecraft:crafting_table", C: "dt:steel_block", D: "dt:storage_widget" });
    //guns(tacz)
    //gun body's curde
    let inc = Item.of("dt:gun_widget", { display: { Name: '未知枪体（半成品）' } })
    create.sequenced_assembly(
        [Item.of("dt:gp_l").withChance(1)], "dt:gun_widget",
        [
            create.deploying(inc, [inc, "create:cogwheel"]),
            create.deploying(inc, [inc, "minecraft:stone_button"]),
            create.deploying(inc, [inc, "create:brass_sheet"]),
            create.deploying(inc, [inc, "create:zinc_sheet"]),
            create.pressing(inc, inc)
        ]
    ).transitionalItem(inc).loops(1)

    create.sequenced_assembly([Item.of("dt:gp_m").withChance(1)], "dt:gun_widget",
        [
            create.deploying(inc, [inc, "create:brass_sheet"]),
            create.deploying(inc, [inc, "create:zinc_sheet"]),
            create.deploying(inc, [inc, "create:cogwheel"]),
            create.pressing(inc, inc)
        ]
    ).transitionalItem(inc).loops(1)

    create.sequenced_assembly([Item.of("dt:gp_s").withChance(1)], "dt:gun_widget",
        [
            create.deploying(inc, [inc, "minecraft:stone_button"]),
            create.deploying(inc, [inc, "create:brass_sheet"]),
            create.deploying(inc, [inc, "create:zinc_sheet"]),
            create.pressing(inc, inc)
        ]
    ).transitionalItem(inc).loops(1)

    // gun body 's refined
    let large = [
        "tacz:m95",
        "tacz:ai_awp",
        "tacz:rpk",
        "tacz:m249",
        "tacz:m320",
        "tacz:rpg7",
        "tacz:m107",
        "tacz:m700",
    ]
    let medium = [
        "tacz:m16a4",
        "tacz:hk_g3",
        "tacz:m16a1",
        "tacz:m4a1",
        "tacz:mk14",
        "tacz:hk416d",
        "mk16:m4urgi",
        "tacz:ak47",
        "tacz:sks_tactical",
        "tacz:aug",
        "mk16:aks74u",
        "tacz:aa12",
        "gz:sasg_12",
        "mk16:ak105",
        "tacz:scar_h",
        "tacz:scar_l",
        "tacz:vector45",
        "tacz:hk_mp5a5",
        "tacz:ump45",
        "qkl:lmg31",
        "tacz:p90",
        "tacz:qbz_95",
        "tacz:type_81",
    ]
    let small = [
        "tacz:p320",
        "tacz:cz75",
        "tacz:deagle_golden",
        "tacz:glock_17",
        "suffuse:python",
        "tacz:deagle",
        "qkl:csg19",
        "tacz:uzi",
        "tacz:m1911",
    ]

    for (let t = 0; t < 15; t++) {
        large.push("trash" + t)
        medium.push("trash" + t)
        small.push("trash" + t)
    }

    for (let i = 0; i < large.length; i++) { event.recipes.createCutting(Item.of("dt:gb_l", { GunId: large[i], process: false }), "dt:gp_l") }
    for (let i = 0; i < small.length; i++) { event.recipes.createCutting(Item.of("dt:gb_s", { GunId: small[i], process: false }), "dt:gp_s") }
    for (let i = 0; i < medium.length; i++) { event.recipes.createCutting(Item.of("dt:gb_m", { GunId: medium[i], process: false }), "dt:gp_m") }

    // 蓝图制造

    for (let i = 0; i < large.length; i++) {

        //不是python script！inc已经声明过了
        inc = Item.of("dt:gp_l", { display: { Name: '大型枪体（半成品）' } })
        create.sequenced_assembly(
            [Item.of("dt:gb_l", { gunId: large[i] }).withChance(1)], "dt:gp_l",
            [
                create.deploying(inc, [inc, Item.of("dt:gun_schematic",{gunId:large[i]}).weakNBT()]),
                create.cutting(inc, inc)
            ]
        ).transitionalItem(inc).loops(1)

    }

    for (let i = 0; i < medium.length; i++) {

        //不是python script！inc已经声明过了
        inc = Item.of("dt:gp_m", { display: { Name: '中型枪体（半成品）' } })
        create.sequenced_assembly(
            [Item.of("dt:gb_m", { gunId: medium[i] }).withChance(1)], "dt:gp_m",
            [
                create.deploying(inc, [inc, Item.of("dt:gun_schematic",{gunId:medium[i]}).weakNBT()]),
                create.cutting(inc, inc)
            ]
        ).transitionalItem(inc).loops(1)

    }

    for (let i = 0; i < small.length; i++) {

        //不是python script！inc已经声明过了
        inc = Item.of("dt:gp_s", { display: { Name: '小型枪体（半成品）' } })
        create.sequenced_assembly(
            [Item.of("dt:gb_s", { gunId: small[i] }).withChance(1)], "dt:gp_m",
            [
                create.deploying(inc, [inc, Item.of("dt:gun_schematic",{gunId:small[i]}).weakNBT()]),
                create.cutting(inc, inc)
            ]
        ).transitionalItem(inc).loops(1)

    }

    for (let i = 0; i < large.length; i++) {

        //不是python script！inc已经声明过了
        inc = Item.of("dt:gp_l", { display: { Name: '大型枪体（半成品）' } })
        create.sequenced_assembly(
            [Item.of("dt:gb_l", { gunId: large[i] }).withChance(1)], "dt:gun_barrel",
            [
                create.deploying(inc, [inc, Item.of("dt:gun_schematic",{gunId:large[i]}).weakNBT()]),
                create.cutting(inc, inc)
            ]
        ).transitionalItem(inc).loops(1)

    }

    //Gun Barrels compoment
    //不是python script！inc已经声明过了
    inc = Item.of("dt:gbc_l", { display: { Name: '大型枪筒（半成品）' } })
    create.sequenced_assembly(
        [Item.of("dt:gbc_l").withChance(1)], "dt:gun_barrel",
        [
            create.deploying(inc, [inc, "dt:steel_plate"]),
            create.deploying(inc, [inc, "create:zinc_sheet"]),
            create.deploying(inc, [inc, "create:cogwheel"]),
            create.pressing(inc, inc)
        ]
    ).transitionalItem(inc).loops(1)
    //不是python script！！inc已经声明过了
    inc = Item.of("dt:gbc_s", { display: { Name: '小型枪筒（半成品）' } })
    create.sequenced_assembly(
        [Item.of("dt:gbc_s").withChance(1)], "dt:gun_barrel",
        [
            create.deploying(inc, [inc, "dt:steel_plate"]),
            //create.deploying(inc, [inc, "create:zinc_sheet"]),
            //create.deploying(inc, [inc, "create:cogwheel"]),
            create.pressing(inc, inc)
        ]
    ).transitionalItem(inc).loops(1)
    //不是python script！！！inc已经声明过了
    // BYD 每次都要重新说一遍是吧
    inc = Item.of("dt:gbc_w", { display: { Name: '木制枪筒（半成品）' } })
    create.sequenced_assembly(
        [Item.of("dt:gbc_w").withChance(1)], "dt:gun_barrel",
        [
            create.deploying(inc, [inc, "dt:steel_plate"]),
            create.deploying(inc, [inc, { "tag": "minecraft:planks" }]),
            create.deploying(inc, [inc, "create:cogwheel"]),
            create.pressing(inc, inc)
        ]
    ).transitionalItem(inc).loops(1)
    // Gun body 
    // Normal medium
    let guns = ["tacz:m16a4",
        "tacz:m4a1",
        "tacz:mk14",
        "tacz:m16a1",
        "tacz:sks_tactical",
        "tacz:aa12",
        "gz:sasg_12",
        "mk16:ak105",
        "tacz:ak47",
        "mk16:aks74u",
        "tacz:qbz_95",
        "tacz:type_81",
    ]


    for (let i = 0; i < guns.length; i++) {
        let incomplete = Item.of("dt:gb_m", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的中型枪体"}],"text":""}' } })

        create.sequenced_assembly(
            [
                Item.of("dt:gb_m", { GunId: guns[i], process: true, display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工完成的中型枪体"}],"text":""}' } }).withChance(1),
            ],
            Item.of("dt:gb_m", { GunId: guns[i], process: false }).weakNBT(),
            [
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.cutting(incomplete, incomplete),
                create.filling(incomplete, [incomplete, Fluid.of("createbigcannons:molten_steel", 50)]),  // 注液
                create.deploying(incomplete, [incomplete, "dt:gun_barrel"]),  // 机械手
                create.pressing(incomplete, incomplete),  // 压片
            ]
        ).transitionalItem(incomplete).loops(1)
    }

    // Complicated medium
    guns = ["tacz:vector45",
        "tacz:aug",
        "mk16:m4urgi",
        "tacz:hk416d",
        "tacz:hk_g3",
        "tacz:scar_l",
        "tacz:mk14",
        "tacz:scar_h",
        "tacz:m700",
    ]


    for (let i = 0; i < guns.length; i++) {
        let incomplete = Item.of("dt:gb_m", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的中型枪体"}],"text":""}' } })
        create.sequenced_assembly(
            [
                Item.of("dt:gb_m", { GunId: guns[i], process: true, display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工完成的中型枪体"}],"text":""}' } }).withChance(1),
            ],
            Item.of("dt:gb_m", { GunId: guns[i], process: false }).weakNBT(),
            [
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.deploying(incomplete, [incomplete, "create:brass_sheet"]),  // 机械手
                create.pressing(incomplete, incomplete),  // 压片
                create.cutting(incomplete, incomplete),
                create.deploying(incomplete, [incomplete, "create:brass_sheet"]),  // 机械手
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.filling(incomplete, [incomplete, Fluid.of("createbigcannons:molten_steel", 50)]),  // 注液
                create.deploying(incomplete, [incomplete, "dt:gun_barrel"]),  // 机械手
            ]
        ).transitionalItem(incomplete).loops(1)
    }

    // Simple medium
    guns = ["tacz:hk_mp5a5",
        "tacz:ump45",
    ]


    for (let i = 0; i < guns.length; i++) {
        let incomplete = Item.of("dt:gb_m", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的中型枪体"}],"text":""}' } })
        create.sequenced_assembly(
            [
                Item.of("dt:gb_m", { GunId: guns[i], process: true, display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工完成的中型枪体"}],"text":""}' } }).withChance(1),
            ],
            Item.of("dt:gb_m", { GunId: guns[i], process: false }).weakNBT(),
            [
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.deploying(incomplete, [incomplete, "dt:gun_barrel"]),  // 机械手
                create.pressing(incomplete, incomplete),  // 压片
            ]
        ).transitionalItem(incomplete).loops(1)
    }

    // Simple small
    guns = ["tacz:uzi",
        "qkl:csg19",
        "tacz:glock_17",
        "tacz:cz75",
        "tacz:p320",
        "tacz:m1911",
    ]


    for (let i = 0; i < guns.length; i++) {
        let incomplete = Item.of("dt:gb_s", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的小型枪体"}],"text":""}' } })
        create.sequenced_assembly(
            [
                Item.of("dt:gb_s", { GunId: guns[i], process: true, display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工完成的小型枪体"}],"text":""}' } }).withChance(1),
            ],
            Item.of("dt:gb_s", { GunId: guns[i], process: false }).weakNBT(),
            [
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.filling(incomplete, [incomplete, Fluid.of("createbigcannons:molten_steel", 50)]),  // 注液
            ]
        ).transitionalItem(incomplete).loops(1)
    }

    // Complicated small
    guns = ["tacz:deagle_golden",
        "tacz:deagle",
        "suffuse:python",
    ]


    for (let i = 0; i < guns.length; i++) {
        let incomplete = Item.of("dt:gb_s", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的小型枪体"}],"text":""}' } })
        create.sequenced_assembly(
            [
                Item.of("dt:gb_s", { GunId: guns[i], process: true, display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工完成的小型枪体"}],"text":""}' } }).withChance(1),
            ],
            Item.of("dt:gb_s", { GunId: guns[i], process: false }).weakNBT(),
            [
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.pressing(incomplete, incomplete),  // 压片
                create.deploying(incomplete, [incomplete, "create:zinc_ingot"]),  // 机械手
                create.filling(incomplete, [incomplete, Fluid.of("createbigcannons:molten_steel", 100)]),  // 注液
                create.pressing(incomplete, incomplete),  // 压片
            ]
        ).transitionalItem(incomplete).loops(1)
    }

    // Normal large
    guns = ["tacz:rpk",
        "tacz:m249",
        "tacz:p90",
    ]


    for (let i = 0; i < guns.length; i++) {
        let incomplete = Item.of("dt:gb_l", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的大型枪体"}],"text":""}' } })
        create.sequenced_assembly(
            [
                Item.of("dt:gb_l", { GunId: guns[i], process: true, display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工完成的大型枪体"}],"text":""}' } }).withChance(1),
            ],
            Item.of("dt:gb_l", { GunId: guns[i], process: false }).weakNBT(),
            [
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.filling(incomplete, [incomplete, Fluid.of("createbigcannons:molten_steel", 200)]),  // 注液
                create.deploying(incomplete, [incomplete, "create:brass_sheet"]),  // 机械手
                create.deploying(incomplete, [incomplete, "tconstruct:cobalt_ingot"]),  // 机械手
                create.deploying(incomplete, [incomplete, "dt:gun_barrel"]),  // 机械手
                create.deploying(incomplete, [incomplete, "tconstruct:amethyst_bronze_ingot"]),  // 机械手
                create.pressing(incomplete, incomplete),  // 压片
                create.cutting(incomplete, incomplete),
            ]
        ).transitionalItem(incomplete).loops(2)
    }

    // Complicated large
    guns = ["tacz:ai_awp",
        "tacz:m95",
        "tacz:m107",
    ]


    for (let i = 0; i < guns.length; i++) {
        let incomplete = Item.of("dt:gb_l", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的大型枪体"}],"text":""}' } })
        create.sequenced_assembly(
            [
                Item.of("dt:gb_l", { GunId: guns[i], process: true, display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工完成的大型枪体"}],"text":""}' } }).withChance(1),
            ],
            Item.of("dt:gb_l", { GunId: guns[i], process: false }).weakNBT(),
            [
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.deploying(incomplete, [incomplete, "corail_recycler:diamond_shard"]),  // 机械手
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.filling(incomplete, [incomplete, Fluid.of("createbigcannons:molten_steel", 200)]),  // 注液
                create.deploying(incomplete, [incomplete, "create:brass_sheet"]),  // 机械手
                create.deploying(incomplete, [incomplete, "dt:gun_barrel"]),  // 机械手
                create.deploying(incomplete, [incomplete, "dt:gun_barrel"]),  // 机械手
                create.deploying(incomplete, [incomplete, "tconstruct:amethyst_bronze_ingot"]),  // 机械手
                create.pressing(incomplete, incomplete),  // 压片
                create.cutting(incomplete, incomplete),
            ]
        ).transitionalItem(incomplete).loops(2)
    }

    // Complicated large
    guns = ["tacz:m320"]


    for (let i = 0; i < guns.length; i++) {
        let incomplete = Item.of("dt:gb_l", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的大型枪体"}],"text":""}' } })
        create.sequenced_assembly(
            [
                Item.of("dt:gb_l", { GunId: guns[i], process: true, display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工完成的大型枪体"}],"text":""}' } }).withChance(1),
            ],
            Item.of("dt:gb_l", { GunId: guns[i], process: false }).weakNBT(),
            [
                create.deploying(incomplete, [incomplete, "dt:gun_widget"]),  // 机械手
                create.deploying(incomplete, [incomplete, "corail_recycler:diamond_shard"]),  // 机械手
                create.filling(incomplete, [incomplete, Fluid.of("createbigcannons:molten_steel", 200)]),  // 注液
                create.deploying(incomplete, [incomplete, "tconstruct:amethyst_bronze_ingot"]),  // 机械手
                create.deploying(incomplete, [incomplete, "dt:gun_barrel"]),  // 机械手
                create.deploying(incomplete, [incomplete, "create:brass_sheet"]),  // 机械手
                create.pressing(incomplete, incomplete),  // 压片
                create.cutting(incomplete, incomplete),
            ]
        ).transitionalItem(incomplete).loops(2)
    }
})
