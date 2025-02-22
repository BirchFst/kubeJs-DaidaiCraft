StartupEvents.registry("item", e => {
    e.create("dt:gun_barrel", "basic")
    e.create("dt:steel_plate", "basic")
    
    e.create("dt:steel_ingot","basic")
    e.create("dt:dustniter","basic")

    e.create("dt:gun_widget", "basic")

    e.create("dt:gb_l", "basic")
    e.create("dt:gb_s", "basic")
    e.create('dt:gb_m', "basic")
    e.create("dt:gp_l", "basic")
    e.create("dt:gp_s", "basic")
    e.create('dt:gp_m', "basic")
    e.create("dt:gbc_s","basic")
    e.create("dt:gbc_l","basic")
    e.create("dt:gbc_w","basic")

    e.create("dt:gun_schematic","basic")

    e.create("dt:storage_widget", "basic")
    e.create("dt:copper_shell", "basic")
    e.create("dt:copper_shell_mini", "basic")
})

StartupEvents.registry("block", e => {
    e.create("dt:steel_block","basic")
})
