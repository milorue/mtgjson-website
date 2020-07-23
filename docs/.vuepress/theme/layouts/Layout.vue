<template lang="pug">
  .theme-container(
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd")

    Navbar(v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar")

    Sidebar(v-if="shouldShowSidebar" :items="sidebarItems" @toggle-sidebar="toggleSidebar")
      slot(name="sidebar-top" slot="top")
      slot(name="sidebar-bottom" slot="bottom")

    Page(v-if="!shouldShowHome" :sidebar-items="sidebarItems")
      slot(name="page-top" slot="top")
      slot(name="page-bottom" slot="bottom")

    Home(v-else)
      slot(name="page-top" slot="top")
      slot(name="page-bottom" slot="bottom")

</template>

<script>
import Navbar from '../components/Navbar';
import Page from '../components/Page';
import Home from '../components/Home';
import Sidebar from '../components/Sidebar';
import { resolveSidebarItems } from '../util';

export default {
  components: { Page, Home, Sidebar, Navbar },

  data() {
    return {
      isSidebarOpen: false,
    };
  },

  async created() {
    await this.$helpers.setStoreState.apply(this, ["Meta"]);
  },

  computed: {
    shouldShowHome(){
      const { frontmatter } = this.$page;

      return !!(frontmatter.home);
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        // !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.scss" lang="scss"></style>
<style lang="scss">
@media (max-width: 719px) {
  .theme-container {
    &.sidebar-open {
      .sidebar {
        transform: translateX(0);
      }
    }
  }
}
</style>
