ServerEvents.recipes(e => {

    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 5, GunFireMode: "SEMI", GunId: "qkl:cbr11", HasBulletInBarrel: 1 }),
        [
            "ABB",
            "ACD",
            "AA "
        ],
        {
            A: "#minecraft:logs",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            D: "minecraft:stone_button"
        }
    )

    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 10, GunFireMode: "SEMI", GunId: "qkl:mu73m", HasBulletInBarrel: 1 }),
        [
            "EBB",
            "ECD",
            "AA "
        ],
        {
            A: "#minecraft:logs",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            D: "minecraft:stone_button",
            E: "dt:steel_plate"
        }
    )

    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 1, GunFireMode: "SEMI", GunId: "qkl:fk15", HasBulletInBarrel: 1 }),
        [
            "   ",
            "AAB",
            "A  "
        ],
        {
            A: "#minecraft:logs",
            B: "dt:gun_barrel",
        }
    )

    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunFireMode: "SEMI", GunId: "qkl:mu73" }),
        [
            "EEB",
            "ACE",
            "CA "
        ],
        {
            A: "#minecraft:logs",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:steel_plate"
        }
    )

    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 2, GunFireMode: "BURST", GunId: "tacz:db_short", HasBulletInBarrel: 1 }),
        [
            "AAB",
            "AD ",
            "   "
        ],
        {
            A: "#minecraft:logs",
            B: "dt:gun_barrel",
            D: "minecraft:stone_button"
        }
    )

    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 2, GunFireMode: "SEMI", GunId: "tacz:db_long", HasBulletInBarrel: 1 }),
        [
            "ABB",
            "AD ",
            "   "
        ],
        {
            A: "#minecraft:logs",
            B: "dt:gun_barrel",
            D: "minecraft:stone_button"
        }
    )

    e.shaped(
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 1, GunFireMode: "SEMI", GunId: "qkl:clf10", HasBulletInBarrel: 1 }),
        [
            "BBB",
            "AD ",
            "   "
        ],
        {
            A: "#minecraft:logs",
            B: "dt:gun_barrel",
            D: "minecraft:stone_button"
        }
    )
    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 5, GunFireMode: "SEMI", GunId: "qkl:cbr11sp", HasBulletInBarrel: 1 }),
        [
            "BBB",
            "ACD",
            "AAE"
        ],
        {
            A: "#minecraft:logs",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            D: "minecraft:stone_button",
            E: "dt:gun_widget"
        }
    )
    // *******
    // 步枪
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 20, GunFireMode: "AUTO", GunId: "tacz:m16a1", HasBulletInBarrel: 1 }),
        [
            " ABB",
            "F EC",
            "F   "
        ],
        {
            A: Item.of("dt:gun_body",{GunId: "tacz:m16a1"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            //D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            
        }
    )

    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 30, GunFireMode: "AUTO", GunId: "tacz:ak47", HasBulletInBarrel: 1 }),
        [
            " ABB",
            "GGE ",
            "F G "
        ],
        {
            A:Item.of("dt:gun_body",{GunId: "tacz:ak47"}),
            B: "dt:gun_barrel",
            //C: "create:cogwheel",
            //D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "#minecraft:logs",
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 30, GunFireMode: "AUTO", GunId: "tacz:hk416d", HasBulletInBarrel: 1 }),
        [
            "  ABBB",
            " E E  ",
            "F  DF "
        ],
        {
            A: Item.of("dt:gun_body",{GunId: "tacz:hk416d"}),
            B: "dt:gun_barrel",
            //C: "create:cogwheel",
            D: "create:analog_lever",
            E: "dt:gun_widget",
            F: "dt:steel_plate"
            //G: "createaddition:zinc_sheet",
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 30, GunFireMode: "AUTO", GunId: "tacz:m4a1", HasBulletInBarrel: 1 }),
        [
            "ABBB",
            "FE  ",
            "F C "
        ],
        {
            A: Item.of("dt:gun_body",{GunId: "tacz:m4a1"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            //D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate"
            //G: "createaddition:zinc_sheet",
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 10, GunFireMode: "SEMI", GunId: "tacz:mk14", HasBulletInBarrel: 1 }),
        [
            " ABBBB",
            "FHEC F",
            "F  H F"
        ],
        {
            A: Item.of("dt:gun_body",{GunId: "tacz:mk14"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            //D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            //G: "createaddition:zinc_sheet",
            H: "corail_recycler:diamond_shard"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 30, GunFireMode: "BURST", GunId: "tacz:m16a4", HasBulletInBarrel: 1 }),
        [
            "  BB",
            " AE ",
            "F C "
        ],
        {
            A: Item.of("dt:gun_body",{GunId: "tacz:m16a4"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            //D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            //G: "createaddition:zinc_sheet",
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 10, GunFireMode: "SEMI", GunId: "tacz:sks_tactical", HasBulletInBarrel: 1 }),
        [
            " ABBBB",
            "FH CE ",
            "F   F "
        ],
        {
            A: Item.of("dt:gun_body",{GunId: "tacz:sks_tactical"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            //D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            //G: "createaddition:zinc_sheet",
            H: "corail_recycler:diamond_shard"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 20, GunFireMode: "SEMI", GunId: "tacz:hk_g3", HasBulletInBarrel: 1 }),
        [
            " ABBBB",
            "FHECE ",
            "F  EF "
        ],
        {
            A: Item.of("dt:gun_body",{GunId: "tacz:hk_g3"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            //D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            //G: "createaddition:zinc_sheet",
            H: "corail_recycler:diamond_shard"
        }
    )

    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 30, GunFireMode: "AUTO", GunId: "tacz:scar_l", HasBulletInBarrel: 1 }),
        [
            "BBAEBBB",
            "CDHEFG ",
            "FHEEC  "
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
            H: "corail_recycler:diamond_shard"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 30, GunFireMode: "AUTO", GunId: "tacz:aug", HasBulletInBarrel: 1 }),
        [
            "  FIIF ",
            "BAAEBBB",
            "CDEEFG ",
            "FH  CF "
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
            H: "corail_recycler:diamond_shard",
            I: "#forge:glass"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 30, GunFireMode: "AUTO", GunId: "tacz:scar_h", HasBulletInBarrel: 1 }),
        [
            "EEBBBBBB",
            "CDHEEFG ",
            "FHEEFCA "
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
            H: "corail_recycler:diamond_shard"
        }
    )

    // 狙击枪
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 5, GunFireMode: "SEMI", GunId: "tacz:ai_awp", HasBulletInBarrel: 1 }),
        [
            "EEBBBBBBB",
            "CFHHFFFFF",
            "AHFEFCAG ",
            "GDEFFNN  "
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
            H: "corail_recycler:diamond_shard",
            D: "minecraft:obsidian",
            N: "create:golden_sheet"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 5, GunFireMode: "SEMI", GunId: "tacz:m95", HasBulletInBarrel: 1 }),
        [
            "EEBBBBBBB",
            "CFDHDHDHD",
            "AFCNNNNNN",
            "GDEFCCNCG",
            "FACEAAHEA"
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
            H: "corail_recycler:diamond_shard",
            D: "minecraft:obsidian",
            N: "create:golden_sheet"
        }
    )
    // 冲锋枪
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 25, GunFireMode: "AUTO", GunId: "tacz:ump45", HasBulletInBarrel: 1 }),
        [
            " ABB",
            "GEF ",
            "F   "
        ],
        {
            A: Item.of("dt:cgb",{GunId: "tacz:ump45"}),
            B: "dt:gun_barrel",
            //C: "create:cogwheel",
            //D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 30, GunFireMode: "AUTO", GunId: "tacz:hk_mp5a5", HasBulletInBarrel: 1 }),
        [
            "ABBB",
            " EF ",
            "F   "
        ],
        {
            A: Item.of("dt:cgb",{GunId: "tacz:hk_mp5a5"}),
            B: "dt:gun_barrel",
            //C: "create:cogwheel",
            //D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            //G: "createaddition:zinc_sheet",
        }
    )
    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 32, GunFireMode: "AUTO", GunId: "qkl:csg19", HasBulletInBarrel: 1 }),
        [
            "GAB",
            " EF",
            "FDC"
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 19, GunFireMode: "AUTO", GunId: "tacz:vector45", HasBulletInBarrel: 1 }),
        [
            "GABBB",
            "GE EC",
            "FD  A"
        ],
        {
            A: Item.of("dt:cgb",{GunId: "tacz:vector45"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            D: "minecraft:stone_button",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
        }
    )
    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 20, GunFireMode: "AUTO", GunId: "tacz:uzi", HasBulletInBarrel: 1 }),
        [
            " AB",
            "GEF",
            "F C"
        ],
        {
            A: Item.of("dt:cgb",{GunId: "tacz:uzi"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
        }
    )
    // 手枪
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 7, GunFireMode: "SEMI", GunId: "tacz:deagle", HasBulletInBarrel: 1 }),
        [
            " ABB",
            "NEF ",
            "FNC "
        ],
        {
            A: Item.of("dt:hgb",{GunId: "tacz:deagle"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            //G: "createaddition:zinc_sheet",
            N: "create:golden_sheet"
        }
    )
    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 17, GunFireMode: "SEMI", GunId: "tacz:glock_17", HasBulletInBarrel: 1 }),
        [
            "GAB",
            "NEF",
            "FFC"
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
            N: "create:golden_sheet"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 6, GunFireMode: "SEMI", GunId: "suffuse:python", HasBulletInBarrel: 1 }),
        [
            " ABB",
            "NEFF",
            "FFC "
        ],
        {
            A: Item.of("dt:hgb",{GunId: "tacz:python"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            //G: "createaddition:zinc_sheet",
            N: "create:golden_sheet"
        }
    )
    e.shaped(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 16, GunFireMode: "AUTO", GunId: "tacz:cz75", HasBulletInBarrel: 1 }),
        [
            " AB",
            "GEF",
            "ENC"
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
            N: "create:golden_sheet"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 12, GunFireMode: "SEMI", GunId: "tacz:p320", HasBulletInBarrel: 1 }),
        [
            " ABB",
            "FEFN",
            "NFC "
        ],
        {
            A: Item.of("dt:hgb",{GunId: "tacz:p320"}),
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            //G: "createaddition:zinc_sheet",
            N: "create:golden_sheet"
        }
    )
    // 重武器
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 1, GunFireMode: "SEMI", GunId: "tacz:rpg7", HasBulletInBarrel: 1 }),
        [
            "N  ADDD",
            "CFACFFF",
            "A FEFC ",
            "G EFFN "
        ],
        {
            A: "create:brass_sheet",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
            D: "minecraft:obsidian",
            N: "create:golden_sheet"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 40, GunFireMode: "AUTO", GunId: "tacz:rpk", HasBulletInBarrel: 1 }),
        [
            "NFFFBBB",
            "CEAHEFF",
            "AHFE AH",
            "GEEFFN "
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            H: "corail_recycler:diamond_shard",
            G: "createaddition:zinc_sheet",
            N: "create:golden_sheet"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 20, GunFireMode: "AUTO", GunId: "qkl:lmg31", HasBulletInBarrel: 1 }),
        [
            "NFBB",
            "CEAE",
            "AGNE",
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            G: "createaddition:zinc_sheet",
            N: "create:golden_sheet"
        }
    )
    e.recipes.createMechanicalCrafting(//
        Item.of("tacz:modern_kinetic_gun", { GunCurrentAmmoCount: 75, GunFireMode: "AUTO", GunId: "tacz:m249", HasBulletInBarrel: 1 }),
        [
            "NFBBBBB",
            "CEAHEHF",
            "AHDE AH",
            "G EFFN "
        ],
        {
            A: "create:brass_sheet",
            B: "dt:gun_barrel",
            C: "create:cogwheel",
            E: "dt:gun_widget",
            F: "dt:steel_plate",
            H: "corail_recycler:diamond_shard",
            G: "createaddition:zinc_sheet",
            D: "minecraft:obsidian",
            N: "create:golden_sheet"
        }
    )


})