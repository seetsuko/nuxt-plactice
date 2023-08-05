<script setup>
    import data from "/data"
    const route = useRoute()
    const id = Number(route.params.id)
    const fishdata = data.find(res=>res.id === id)
</script>

<template>
    <div class="container mt-5">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                {{fishdata.name}}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">生息地</li>
                <li class="list-group-item">旬</li>
            </ul>
        </div>
        <NuxtLink to="/fishdata">戻る</NuxtLink>
    </div>
</template>