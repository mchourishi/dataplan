<template>
    <button :name="b_name" :id="b_id" :class="b_class" :type="b_type" @click="onClick()">
        <slot>Button</slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            b_name: {
                type: String,
            },
            b_id: {
                type: String,
                required: true
            },
            b_class: {
                type: String,
                default: "btn"
            },
            b_type: {
                type: String,
                default: "button"
            },
            onClick: {
                type:Function
            }
        },
    }
</script>

<style scoped>

</style>
