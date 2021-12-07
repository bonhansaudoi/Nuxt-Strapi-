<template>
  <div class="field">
    <label for="psw">Password</label>
    <input type="password" name="psw" placeholder="Password" required>
    <span class="forgot-pw cursor-pointer" @click="openPassword">Forgot password?</span>
  </div>
</template>