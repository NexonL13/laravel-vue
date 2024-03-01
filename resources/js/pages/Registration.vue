<template>
    <div class="container">
        <div class="card">
            <h2>Registration</h2>
            <form @submit.prevent="register">
                <input type="text" id="firstName" name="firstName" placeholder="First Name" required
                    v-model="formData.firstName">
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required
                    v-model="formData.lastName">
                <input type="email" id="email" name="email" placeholder="Email" required v-model="formData.email">
                <input type="password" id="password" name="password" placeholder="Password" required
                    v-model="formData.password">
                <button type="submit">Create an account</button>
                <router-link to="/login">
                    <h2>Already have an account?</h2>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const router = useRoute();

const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
});

const register = async () => {
    // const { data } = await axios.post('http://127.0.0.1:8000/api/register', formData.value);
    router.push({ path: '/login' })
}

</script>
