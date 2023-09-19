import { defineStore } from 'pinia'

export const useSubmenuActive = defineStore('submenuActive', {
    state: function () {
        return {
            toggleSubmenu: false,
        }
    },

    getters: {
        getToggleSubmenu() {
            return this.toggleSubmenu
        },
    },

    actions: {
        setTrue() {
            this.toggleSubmenu = true
        },
        setFalse() {
            this.toggleSubmenu = false
        },
        setToggle() {
            this.toggleSubmenu = !this.toggleSubmenu
        },
    },
})
