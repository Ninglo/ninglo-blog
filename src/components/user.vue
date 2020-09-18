<template>
    <div id="user">
        Hello, {{ $route.params.id }}!
    </div>
</template>

<script>
export default {
  name: 'user',
};
</script>
