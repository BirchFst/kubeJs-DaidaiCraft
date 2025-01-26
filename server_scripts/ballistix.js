ServerEvents.recipes(e => {
    const { create } = e.recipes

    e.remove({ output: 'ballistix:thermobaric' })
    e.remove({ output: 'ballistix:emp' })
    e.remove({ output: 'ballistix:nuclear' })
    e.remove({ output: 'ballistix:emp' })
    e.remove({ output: 'ballistix:nuclear' })
    e.remove({ output: 'ballistix:emp' })

    e.recipes.createMechanicalCrafting(//
        Item.of("ballistix:thermobaric"),
        [
            " BB ",
            "BAAB",
            "BAAB",
            " BB "
        ],
        {
            A: "ballistix:obsidian",
            B: "dt:steel_plate"
        }
    )

    /*
 * 将重复使用的物品id单独存入一个常量里
 * 这一步其实可有可无,个人建议不要搞这个
 * 如果使用重复的名称,那么只有最后一条是有效的
 * 为了避免这种情况产生,请避免使用重复的常量&变量命名
*/
    let incomplete = Item.of("createbigcannons:nethersteel_block", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的下界钢块"}],"text":""}' } })

    //序列组装
    create.sequenced_assembly(
        // 输出物品及概率(这里的概率更偏向于占比),
        // 占比越高输出该物品的概率越高
        // 数组内的第一个物品为主要输出物品
        // 其他输出物品则为“废料”
        [
            Item.of("ballistix:nuclear").withChance(0.97),
            Item.of("createbigcannons:nethersteel_ingot").withChance(0.01),
            Item.of("createbigcannons:nethersteel_nugget").withChance(0.01),
            Item.of("minecraft:obsidian").withChance(0.01),
        ],
        // 输入物品
        "createbigcannons:nethersteel_block",
        // 参与机器--按顺序加工
        [
            create.deploying(incomplete, [incomplete, "ballistix:thermobaric"]),  // 机械手
            create.cutting(incomplete, incomplete), // 切割
            create.filling(incomplete, [incomplete, Fluid.of("minecraft:lava", 100)]),  // 注液
            create.filling(incomplete, [incomplete, Fluid.of("createbigcannons:molten_nethersteel", 100)]),  // 注液
            create.deploying(incomplete, [incomplete, "ballistix:breaching"]),  // 机械手
            create.deploying(incomplete, [incomplete, "minecraft:blaze_rod"]),  // 机械手
            create.deploying(incomplete, [incomplete, "minecraft:ghast_tear"]),  // 机械手
            create.deploying(incomplete, [incomplete, "create:precision_mechanism"]),  // 机械手
            create.pressing(incomplete, incomplete),  // 压片
        ]
    ).transitionalItem(incomplete).loops(3)


    incomplete = Item.of("minecraft:nether_star", { display: { Name: '{"italic":false,"extra":[{"text":""},{"text":"加工过的下界之星"}],"text":""}' } })

    create.sequenced_assembly(
        [
            Item.of("ballistix:antimatter").withChance(0.7),
            Item.of("minecraft:nether_star").withChance(0.1),
            Item.of("minecraft:netherite_ingot").withChance(0.1),
        ],
        // 输入物品
        "minecraft:nether_star",
        // 参与机器--按顺序加工
        [
            create.deploying(incomplete, [incomplete, "ballistix:nuclear"]),  // 机械手
            create.filling(incomplete, [incomplete, Fluid.of("minecraft:lava", 100)]),  // 注液
            create.pressing(incomplete, incomplete),  // 压片
            create.pressing(incomplete, incomplete),  // 压片
            create.pressing(incomplete, incomplete),  // 压片
        ]
    ).transitionalItem(incomplete).loops(16)

    // 动力合成 最大9*9
    create.mechanical_crafting("ballistix:largeantimatter", [
        "CCCCC",
        "CAAAC",
        "CABAC",
        "CAAAC",
        "CCCCC",
    ], {
        A: "minecraft:beef",
        B: "ballistix:antimatter",
        C: "dt:steel_plate"
    })

    incomplete = Item.of("minecraft:obsidian", { display: { Name: '{"italic":false,"extra":[{"text":""},{"color":"black","text":"黑暗的黑曜石"}],"text":""}' } })

    create.sequenced_assembly(
        // 输出物品及概率(这里的概率更偏向于占比),
        // 占比越高输出该物品的概率越高
        // 数组内的第一个物品为主要输出物品
        // 其他输出物品则为“废料”
        [
            Item.of("ballistix:darkmatter").withChance(0.8),
            Item.of("minecraft:bedrock").withChance(0.001),
            Item.of("minecraft:dirt").withChance(0.2),
        ],
        // 输入物品
        "minecraft:crying_obsidian",
        // 参与机器--按顺序加工
        [
            create.deploying(incomplete, [incomplete, "minecraft:obsidian"]),  // 机械手
            create.pressing(incomplete, incomplete),  // 压片
            create.deploying(incomplete, [incomplete, "minecraft:netherite_ingot"]),  // 机械手
            create.pressing(incomplete, incomplete),  // 压片
        ]
    ).transitionalItem(incomplete).loops(128)

})

