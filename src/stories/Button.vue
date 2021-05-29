<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
/* eslint-disable
  @typescript-eslint/no-unsafe-call
  */
 
 // test
import './button.css';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': (this.primary as boolean),
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size as string}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: (this.backgroundColor as string),
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
