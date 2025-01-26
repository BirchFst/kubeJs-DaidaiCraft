PlayerEvents.chat(e => {
    let input = e.message.trim()
    let x = Math.floor(e.player.x + Math.random() * 2048 - 1024);
    let y = Math.floor(e.player.y + Math.random() * 2048 - 1024);
    e.server.tell([Text.aqua("[我在" + x + "," + y + "很想你]"), ` ${input}`]);
    e.cancel();
})