<script lang="ts">
    export let mode: "login" | "register";
  
    import {
      loginWithGoogle,
    } from "../db/users/login";
    import { registerUser } from "../db/users/register";
    import { loginUser } from "../db/users/login";
    import Google from "./svgs/Google.svelte";
    import { setUserSSRSession } from "../db/users/setUserSSRSession";
  
    let emailInput = "";
    let passwordInput = "";
    let passwordConfirmInput = "";
    let error = "";
    let message = "";
  
    async function handleSubmit() {
      if (
        passwordInput === "" ||
        (mode === "register" && passwordConfirmInput === "") ||
        emailInput === ""
      ) {
        error = "Por favor, llene todos los campos";
        return;
      }
  
      if (mode === "register" && passwordInput !== passwordConfirmInput) {
        error = "Contraseñas no coinciden";
        return;
      }
  
      const registerOrLogin = mode === "register" ? registerUser : loginUser;
  
      const {
        data,
        error: responseError,
        message: messageResponse,
      } = await registerOrLogin(emailInput, passwordInput);
  
      if (responseError && messageResponse) {
        error = messageResponse;
        return;
      }
  
      if (mode === "register" && data) {
        message = "Usuario registrado satisfactoriamente";
  
        setTimeout(() => {
          message = "";
          location.href = "/login";
        }, 3000);
  
        return;
      }
  
      if (mode === "login" && data) {
        message = "Usuario logueado satisfactoriamente";
  
        const accessToken = data.session?.access_token;
        const refreshToken = data.session?.refresh_token;
  
        if (accessToken && refreshToken) {
          await setUserSSRSession(accessToken, refreshToken);
        }
  
        location.href = "/";
        return;
      }
    }
  </script>
  
  <div class="form">
    <div class="title">
      {#if mode === "register"}
        <p>Crear una cuenta</p>
      {:else}
        <p>Registrar una cuenta</p>
      {/if}
    </div>
  
    <form on:submit|preventDefault={handleSubmit}>
      <div class="item-input">
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={emailInput} />
      </div>
      <div class="item-input">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" bind:value={passwordInput} />
      </div>
      {#if mode === "register"}
        <div class="item-input">
          <label for="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            bind:value={passwordConfirmInput}
          />
        </div>
      {:else}
        <a href="/" class="small-text">¿Olvidaste tu contraseña?</a>
      {/if}
      <input
        class="btn"
        type="submit"
        value={mode === "register" ? "Register" : "Login"}
      />
    </form>
    {#if error}
      <div class="error">{error}</div>
    {/if}
    {#if message}
      <div class="message">{message}</div>
    {/if}
  
    <div class="container-sign-with">
      <div class="title">
        <div />
        <p>O ingresa con</p>
        <div />
      </div>
      <div class="list-social">
        <button class="sign-with google" on:click={loginWithGoogle}>
          <Google />
        </button>
      </div>
      <svg height="10" width="100%">
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          style="stroke:var(--primary-300);stroke-width:2"
        />
      </svg>
    </div>
  
    {#if mode === "login"}
      <p class="small-text">
        ¿No tienes una cuenta aún? <a href="/register">Regístrate</a>
      </p>
    {/if}
  </div>
  
  <style>
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 3rem;
      gap: 2rem;
      margin: auto;
      background-color: var(--primary-100);
      border-radius: 1rem;
    }
  
    .form .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      font-size: 1rem;
      font-weight: 600;
    }
  
    .form form {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 16px;
      width: 100%;
    }
  
    .form form .btn {
      width: 100%;
      background-color: var(--primary-400);
      color: var(--text-primary);
      margin-top: 0.5rem;
    }
  
    .form form .btn:hover {
      background-color: var(--primary-500);
    }
  
    form .item-input {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      width: 100%;
    }
  
    .item-input label {
      font-family: var(--font-body);
      font-size: 14px;
    }
  
    .item-input input {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 4px;
      height: 32px;
      width: 100%;
      border: none;
      padding: 8px 8px;
      color: var(--text-primary);
    }
  
    input.btn {
      width: 100%;
    }
  
    .container-sign-with .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.25rem;
    }
  
    .container-sign-with .title p {
      min-width: fit-content;
      color: var(--primary-600);
      text-align: center;
      font-size: 12px;
    }
  
    .container-sign-with .title div {
      width: 100%;
      height: 0.5px;
      background-color: var(--primary-600);
    }
  
    .container-sign-with .list-social {
      display: flex;
      flex-direction: row;
      gap: 24px;
      margin: 16px 0px;
    }
  
    .list-social .sign-with {
      width: 100%;
      border-radius: 0.25rem;
      display: flex;
      justify-content: center;
      padding: 8px 16px;
    }

    .list-social .google {
      background-color: #db4437;
    }
  
    a:hover {
      text-decoration: underline var(--text-primary);
    }
  </style>
  