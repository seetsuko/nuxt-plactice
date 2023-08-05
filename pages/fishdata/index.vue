<script setup>
    import data from "/data"
</script>

<template>
    <div class="container-fluid">
        <h1>fish data</h1>
        <div v-for="value in data">
            <NuxtLink :to='"/fishdata/"+value.id'>{{value.name}}</NuxtLink>
        </div>
    </div>
</template>