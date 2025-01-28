
ServerEvents.recipes(e => {
    //单独配方（前期性价比之王）
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
        Item.of("tacz:modern_kinetic_gun", { GunFireMode: "SEMI", GunId: "qkl:m870" }),
        [
            "EEB",
            "A C",
            "A  "
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
    let gun;
    let guns;

    guns = [
        "tacz:aa12",
        "tacz:hk_g3",
        "tacz:mk14",
        "tacz:scar_h",
        "tacz:scar_l",
    ]

    for (let i = 0; i < guns.length; i++) {
        gun = guns[i]
        e.shapeless(Item.of("tacz:modern_kinetic_gun", { GunFireMode: "SEMI", GunId: gun, HasBulletInBarrel: false }), [
            Item.of("dt:gb_m", { GunId: gun, process: true }).weakNBT(),
            "dt:gbc_l",
            "dt:gun_barrel",
        ])
    }


    guns = [
        "tacz:m16a1",
        "tacz:m16a4",
        "tacz:m4a1",
        "tacz:hk416d",
        "mk16:m4urgi",
        "tacz:sks_tactical",
        "tacz:aug",
        "gz:sasg_12",
        "tacz:vector45",
        "tacz:hk_mp5a5",
        "tacz:ump45",
        "qkl:lmg31",
        "tacz:qbz_95",
        "tacz:type_81",
    ]

    for (let i = 0; i < guns.length; i++) {
        gun = guns[i]
        e.shapeless(Item.of("tacz:modern_kinetic_gun", { GunFireMode: "SEMI", GunId: gun, HasBulletInBarrel: false }), [
            Item.of("dt:gb_m", { GunId: gun, process: true }).weakNBT(),
            "dt:gbc_s",
            "dt:gun_barrel",
        ])
    }

    guns = [
        "tacz:ak47",
        "mk16:aks74u",
        "mk16:ak105",
    ]

    for (let i = 0; i < guns.length; i++) {
        gun = guns[i]
        e.shapeless(Item.of("tacz:modern_kinetic_gun", { GunFireMode: "SEMI", GunId: gun, HasBulletInBarrel: false }), [
            Item.of("dt:gb_m", { GunId: gun, process: true }).weakNBT(),
            "dt:gbc_w",
            "dt:gun_barrel",
        ])
    }

    guns = [
        "tacz:m95",
        "tacz:ai_awp",
        "tacz:p90",
        "tacz:m107",
        "tacz:m700",
    ]

    for (let i = 0; i < guns.length; i++) {
        gun = guns[i]
        e.shapeless(Item.of("tacz:modern_kinetic_gun", { GunFireMode: "SEMI", GunId: gun, HasBulletInBarrel: false }), [
            Item.of("dt:gb_l", { GunId: gun, process: true }).weakNBT(),
            "dt:gbc_l",
            "dt:gun_barrel",
            "dt:gun_barrel",
        ])
    }

    guns = [
        "tacz:rpk",
        "tacz:m249",
    ]

    for (let i = 0; i < guns.length; i++) {
        gun = guns[i]
        e.shapeless(Item.of("tacz:modern_kinetic_gun", { GunFireMode: "SEMI", GunId: gun, HasBulletInBarrel: false }), [
            Item.of("dt:gb_l", { GunId: gun, process: true }).weakNBT(),
            "dt:gbc_l",
            "dt:gun_barrel",
        ])
    }

    guns = [
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

    for (let i = 0; i < guns.length; i++) {
        gun = guns[i]
        e.shapeless(Item.of("tacz:modern_kinetic_gun", { GunFireMode: "SEMI", GunId: gun, HasBulletInBarrel: false }), [
            Item.of("dt:gb_s", { GunId: gun, process: true }).weakNBT(),
            "dt:gun_barrel",
        ])
    }

})
