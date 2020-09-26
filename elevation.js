export const elevation = {
  props: {
    elevation: String | Number,
  },
  mounted() {
    this.setElevation();
  },
  methods: {
    setElevation: function() {
      if (this.elevation) {
        const elevation = `var(--box${this.elevation})`;
        this.$el.style.boxShadow = elevation;
      } else {
        return;
      }
    },
  },
};
