<template>
    <div class="container">
        <div class="card">
            <h2>Login</h2>
            <form method="POST" action="">
                <input type="text" id="username" name="username" placeholder="Username" required>
                <input type="password" id="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
                <router-link to="/registration">
                    <h2>Create an account</h2>
                </router-link>
            </form>
        </div>
    </div>
</template>
<script setup>

</script>
