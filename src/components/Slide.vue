<template>
    <div>
        <agile :infinite="true">
            <div class="slide slide--0"></div>
            <div class="slide slide--1"></div>
            <div class="slide slide--2"></div>
            <div class="slide slide--3"></div>
            <div class="slide slide--4"></div>
            <div class="slide slide--5"></div>
        </agile>

        <section class="hero is-bold is-medium">
            <div class="hero-body">
                <div class="container">
                <div><font-awesome-icon :icon="['fab', 'fort-awesome']" size="8x"/></div><br>
                <p class="is-size-3">Metro Brain Based พร้อมสนุบสนุน<u>ทุกความฝัน</u></p><br>
                <h1 class="title">
                    แล้วคุณหล่ะ พร้อมหรือยัง !!
                </h1>
                <hr>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'slide',
    data: function () {
        return {
            count: 0
        }
    }
    
}
</script>

<style scoped>
    ul {
        list-style-type: none!important;
        padding: 0!important;
    }
    li {
        display: inline-block!important;
        margin: 0 10px!important;
    }
    .agile__arrow agile__arrow--prev, .agile__arrow agile__arrow--next{
        display: none!important;
    }

    .big-logo{
        background-image: url('../assets/vinyl-v1_blur.jpg');
    }
    .big-logo-img{
        width: 80%;
    }

    .hero.is-medium .hero-body {
        padding-bottom: 3rem!important;
        padding-top: 3rem!important;
    }
</style>

