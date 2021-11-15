<template>
    <v-app>
        <v-navigation-drawer
            permanent
            :mini-variant.sync="mini"
            dark
            v-model="drawer"
            @click="minMaxDrawer"
        >
        <v-list-item class="px-2">
            <v-img @click="minMaxDrawer" src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
    export default {
        methods: {
            minMaxDrawer(){
                this.mini = !this.mini
            }
        },
        data(){
            return {
                mini: false,
                drawer: ''
            }
        }
    }
</script>
