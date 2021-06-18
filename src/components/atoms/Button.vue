<template>
  <button
    :class="{
      'i-button': 1,
      'i-button--primary': !secondary,
      'i-button--secondary': secondary,
      'bordered': bordered,
      'bg-transparent': bgTransparent
    }"
    :id="id"
    :type="type"
    :disabled="disabled"
  >
    {{label}}    
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    id: {                   // ID
      type: String,
      required: false,
    },
    type: {                 // Type (i.e. 'submit')
      type: String,
      required: false,
    },    
    secondary: {            // Enable secondary style
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {             // Enable disabled state (inherit from quasar styles)
      type: Boolean,
      default: false,
      required: false
    },    
    bordered: {             // Enable bordered default style
      type: Boolean,
      default: false,
      required: false,
    },
    bgTransparent: {        // Enable background transparency (inherit from quasar styles)
      type: Boolean,
      default: false,
      required: false
    },
    label: {                // Label to show
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .i-button {    
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    position: relative;
    padding: 1.1em 4.5em;
    border-radius: 2em;
    border: none;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1em;

    &--primary {
      background: #ffffff;
      color: #000000;

       &.bordered {
        border: 2px solid #000000;
      }
    }

    &--secondary {
      background: #000000;
      color: #fff;

      &.bordered {
        border: 2px solid #ffffff;
      }
    }

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }
  }
</style>