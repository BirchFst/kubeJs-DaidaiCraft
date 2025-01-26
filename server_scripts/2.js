ServerEvents.recipes(event=>{
    event.recipes.kubejs.shaped('minecraft:soul_torch',[
        ['minecraft:torch','minecraft:torch','minecraft:torch'],
        ['minecraft:torch','minecraft:stone','minecraft:torch'],
        ['minecraft:torch','minecraft:torch','minecraft:torch']
    ]).modifyResult((inputItemGrid,outputItem)=>{
        let stone = inputItemGrid.find("stone")
        let items = inputItemGrid.findAll("torch");
        for (let i = 0; i < items.length; i++) {
            if (!items[i].hasEnchantment("looting",2)){
                return "air"
            }
        }
        if (Math.random() < 0.5){
           let ci =  items[0].copy();
           ci.count = 1;
           return ci
        } 
        return outputItem;
    })
})