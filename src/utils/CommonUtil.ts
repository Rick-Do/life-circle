import screenfull from "screenfull";
export function CommonFuction() {

    const toFullScreen = async function () {
        if (screenfull.isEnabled){
            if (screenfull.isFullscreen){
                await screenfull.exit()
            }else {
                await screenfull.toggle()
            }
        }
    }
    return {
        toFullScreen,
    }

}