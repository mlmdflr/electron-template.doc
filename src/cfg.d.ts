import type { MenuOption } from "naive-ui";

declare global {
    interface MenuCfg {
        defaultKey: string,
        menuOption: MenuOption[]
    }
    interface MdCfg {
        path: string,
        documentName: string
    }
}