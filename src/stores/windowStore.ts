import { defineStore } from "pinia";
import { CreationWindowType, WindowType } from "../types/WindowType";

const MAX_WINDOWS = 18;

export const useWindowsStore = defineStore('windows', {
    state: () => {
        return {
            windows: [] as WindowType[],
            idCounter: 0
        }
    },
    actions: {
        addWindow(window: CreationWindowType) {
            setTimeout(() => {
                this.windows.push({
                    id: this.idCounter++,
                    title: window.title,
                    component: window.component,
                    minimized: false,
                    html: window.html
                });
    
                if (this.windows.length >= MAX_WINDOWS) {
                    this.windows.shift();
                }
            }, 10);
        }
    }
});