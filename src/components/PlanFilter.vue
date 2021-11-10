<template>
    <div class="card">
        <div class="card-header border-0">
            <h4 class="card-title">What are you looking for ?</h4>
        </div>
        <div class="card-body">
            <div class="container-fluid">
                <div class="row mb-3">
                    <div class="col-md-12">
                        <Slider s_name="contractLength" s_id="contractLength" s_label="Contract Length (Months)"
                                :s_minval="1" :s_maxval="12" s_min_label="1 month" s_max_label="12 months" :s_step="1" :s_value="1"
                        >
                        </Slider>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <Slider s_name="currentLoadSpeed" s_id="currentLoadSpeed" s_label="Current Load Speed (Mbps)"
                                :s_minval="1" :s_maxval="1000" s_min_label="1 Mbps" s_max_label="1000 Mbps" :s_step="50"
                                :s_value="500">
                        </Slider>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <Slider s_name="maxPrice" s_id="maxPrice" s_label="Max Price"
                                :s_minval="1" :s_maxval="1000" s_min_label="$1" s_max_label="$1000" :s_step="100"
                                :s_value="1">
                        </Slider>
                    </div>
                </div>
                <div class="row">
                    <Button b_name="reset" b_id="reset" b_class="btn btn-primary" :onClick="resetFilters">Reset Filters</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "./Inputs/Button";
    import Slider from "./Inputs/Slider";

    export default {
        name: "PlanFilter",
        components: {Slider, Button},
        methods:{
            resetFilters :function(){
                console.log('Button Clicked...');
                // Reset Filters
            }
        }
    }
</script>

<style scoped>

</style>
