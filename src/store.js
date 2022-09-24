import { writable } from "svelte/store";

export const windowWidth = writable(null);
export const atHome = writable(null);
export const atWork = writable(null);
export const atAbout = writable(null);

export const setCurrentPage = (currentUrl) => {
    let page = currentUrl.slice(
        currentUrl.lastIndexOf("/"),
        currentUrl.length
    );
    switch (page) {
        case '/':
            atHome.set(true);
            atWork.set(false);
            atAbout.set(false);
            break;
        case '/work':
            atHome.set(false);
            atWork.set(true);
            atAbout.set(false);
            break;
        case '/about':
            atHome.set(false);
            atWork.set(false);
            atAbout.set(true);
            break;
    }
};
