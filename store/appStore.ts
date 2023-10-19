export const useAppStore = defineStore('appStore', {
  state: () => ({
    heroSectionTitle: ''
  }),

  getters: {
    getHeroSectionTitle: (state) => state.heroSectionTitle
  },

  actions: {
    setHeroSectionTitle(title: string) {
      this.heroSectionTitle = title;
    }
  }
});
