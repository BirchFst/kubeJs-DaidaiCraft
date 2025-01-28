
ServerEvents.recipes(e => {

    let gun;
    let guns;

    guns = [
        "tacz:aa12",
        "tacz:hk_g3",
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
    ]

    for (let i = 0; i < guns.length; i++) {
        gun = guns[i]
        e.shapeless(Item.of("tacz:modern_kinetic_gun", { GunFireMode: "SEMI", GunId: gun, HasBulletInBarrel: false }), [
            Item.of("dt:gb_s", { GunId: gun, process: true }).weakNBT(),
            "dt:gun_barrel",
        ])
    }

})
