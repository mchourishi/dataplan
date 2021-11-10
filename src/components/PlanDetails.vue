<template>
    <div class="card mb-4" style="width: 700px; border-left: 5px solid blue">
        <div class="row no-gutters">
            <div class="col-sm-3">
                <div class="font-weight-bold mt-3 ml-2">250/250 Mbps</div>
                <div class="small mt-2 ml-2">Download / Upload</div>
                <div class="small ml-2">Only $350 per month + OST on a 48 month plan.</div>
            </div>
            <div class="col-sm-2">
                <div class="font-weight-bold mt-3 ml-2">Data Plan</div>
                <div class="small mt-2 ml-2">Plan 100</div>
                <div class="small ml-2">Plan 200</div>
                <div class="small ml-2">Plan 300</div>
                <div class="small ml-2">Plan 400</div>
                <div class="small ml-2">Plan 500</div>
            </div>
            <div class="col-sm-2">
                <div class="small mt-5">Plan 600</div>
                <div class="small">Plan 700</div>
                <div class="small">Plan 800</div>
                <div class="small">Plan 900</div>
                <div class="small">Plan 950</div>
            </div>
            <div class="col-sm-5">
                <div class="mt-4">
                    <Button b_name="brochure" b_id="brochure" b_class="btn btn-primary btn-fixed-width">VIEW BROCHURE</Button>
                    <Button b_name="enquire" b_id="enquire" b_class="btn btn-dark mt-3 btn-fixed-width">ENQUIRE</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "./Inputs/Button";
    export default {
        name: "PlanDetails",
        components: {Button}
    }
</script>

<style scoped>
 .btn-fixed-width{
     width:170px !important;
 }
</style>
