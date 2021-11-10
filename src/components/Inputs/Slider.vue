<template>
    <span>
    <label for="contractLength" class="form-label">{{ s_label }}</label>
    <div>
        <span class="float-left small">{{ s_min_label }}</span>
        <span class="float-right small">{{ s_max_label }}</span>
        <input
                type="text"
                :name="s_name"
                :id = "s_id"
                data-provide="slider"
                :data-slider-min=s_minval
                :data-slider-max="s_maxval"
                :data-slider-step="s_step"
                :data-slider-value="s_value"
                style="width: 280px;"
        >
    </div>
    </span>
</template>

<script>
    export default {
        name: "Slider",
        props: {
            s_id: {
                type: String,
                required: true
            },
            s_name: {
                type: String,
                required: true
            },
            s_label: {
                type: String
            },
            s_minval: {
                type: Number,
                required: true,
                default: 0
            },
            s_maxval: {
                type: Number,
                required: true
            },
            s_step: {
                type: Number,
                required: true,
                default: 1
            },
            s_value: {
                type: Number,
                required: true,
                default: 1
            },
            s_min_label: {
                type: String
            },
            s_max_label: {
                type: String
            },
        },
    }
</script>

<style scoped>

</style>
