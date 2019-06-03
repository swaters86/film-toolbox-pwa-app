<template> 
    <span class="svg-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 3.969 6.615">
            <title>Right Arrow Icon</title>
            <desc>Arrow pointing to the right side of the screen.</desc>
            <path :fill="color" d="M3.65 3.052L1.02.422a.428.428 0 1 0-.606.606L2.74 3.355.414 5.68a.428.428 0 0 0 .606.606l2.63-2.63a.427.427 0 0 0 0-.605z"/>
        </svg>
    </span>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'svg-icon-right-arrow', 
    props: [
        'color', 
    ],
}
</script>