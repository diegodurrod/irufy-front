<template>
  <button
    :class="[
        'round-button',
        {'round-button--primary': !secondary},
        {'round-button--secondary': secondary},
        `round-button--${size}`
    ]"     
    :id="id"
    :type="type"
    :disabled="disabled"
  >
    <i :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: 'RoundButton',
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
    disabled: {             // Enable 'disabled state' (inherit from quasar styles)
      type: Boolean,
      default: false,
      required: false
    },
    size: {                 // Presets sizes
      type: String,
      validator (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
      default: 'medium'
    },
    icon: {                // Icon to show (font-awesome classes)
      type: String,
      required: true,
      default: 'fas fa-exclamation-circle'
    }
  }
}
</script>

<style scoped lang="scss">
    .round-button {
        cursor: pointer;        
        border-radius: 100%;
        border: none;
        width: 2.5em;
        height: 2.5em;
        display: flex;
        justify-content: center;
        align-items: center;

        /* Colors */
        &--primary {
            background-color: #1db954;
            color: #ffffff;
        }
        &--secondary {
            background-color: #000000;
            color: #ffffff;
        }

        /* Sizes */
        &--small {
            font-size: 14px;
        }
        &--medium {
            font-size: 20px;            
        }
        &--large {
            font-size: 26px;
        }

        /* Selectors */
        &:hover {
            transform: scale(1.05);
        }
        &:active {
            transform: scale(1);
        }   
    }
</style>