let logoutHandler : null | (() => Promise<void> | void) = null;


export const setLogoutHandler = (handler: () => Promise<void> | void) => {
    logoutHandler = handler;
}

export const triggerLogout = () => {
    if (logoutHandler) {
        logoutHandler();
    }
}