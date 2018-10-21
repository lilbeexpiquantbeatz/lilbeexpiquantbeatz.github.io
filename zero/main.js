var logger = {
    get_elem: () => {
        if (!$("#events")[0])
            $('body').prepend($('<div id="events">'));

        return $("#events");
    },
    log: (title, text) => {
        var elem = $(`<div class="event"><span class="log-title">[${title}]</span> <span class="log-body">${text}</span></div>`);

        logger.get_elem().append(elem);

        elem.animate({ opacity: 1, top: -5 }, 100);
        setTimeout(() => {
            elem.animate({ opacity: 0, top: -15 }, 100, () => {
                setTimeout(() => { elem.remove() }, 10);
            })
        }, 99999999999);
    }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async () => {
	await sleep(400);
	 logger.log("ZeRo$ense", "welcome to Hell");
	 await sleep(400);
	 logger.log("ZeRo$ense", "currently playing: lil bo weep - i wrote this song 4 u");
   await sleep(400);
   logger.log("ZeRo$ense", "hit Supremacy user in head for 127");
   await sleep(400);
   logger.log("ZeRo$ense", "hit GameSense user in head for 1337");
   await sleep(400);
   logger.log("ZeRo$ense", "hit Aimware user in head for 420");
   await sleep(400);
   logger.log("ZeRo$ense", "hit All in head for 666");
   await sleep(800);
   logger.log("MEANWHILE"," ");
   await sleep(600);
   logger.log("All other cheats", "Missed ZeRo$ense users due to bad cheat");
}
