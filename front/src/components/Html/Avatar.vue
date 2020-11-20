<template>
    <div class="avatar hidden-sm-and-down">
        <v-avatar
            class="avatar__img"
            rounded
            size="46px"
        >
            <img
                :src="require('@/assets/user.png')"
                alt="User"
            />
        </v-avatar>
        <span class="avatar__title" v-text="user"></span>
    </div>
</template>

<script>
export default {
    name: 'Avatar',
    props: ["user"],
}
</script>

<style lang="scss" scoped>
    .avatar {
        position: relative;
        display: flex;
        align-items: center;
        &__img {
            border-radius: 50%;
            position: absolute;
            top: 0px;
        }
        &__title {
            font-size: 12px;
            color: #808080;
            padding: 8px;
            padding-left: 31px;
            background-color: #E0E0E0;
            margin-left: 20px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }
</style>