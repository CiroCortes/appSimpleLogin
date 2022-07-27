<script>
  import "../app.css";
  import { signOut, onAuthStateChanged } from "firebase/auth";
  import { auth } from "../firebase";
  import { isLoggedIn, user } from "../store";

  const logout = async () => {
    try {
      await signOut(auth);
      $isLoggedIn = false;
      $user = {};
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged(auth, (authUser) => {
    $user = authUser;
    $isLoggedIn = !!authUser; // aqui la negacion doble va a tratar de generar un booleano si existe el objeto
    console.log(authUser);
  });
</script>

<nav class="bg-neutral-800 p-4 text-white">
  <div class="container m-auto">
    <ul class="flex">
  
        {#if $isLoggedIn}
          <li class="mr-6">
            <a href="/" class="text-blue-500 hover:text-blue-800">Services</a>
          </li>
          <li class="mr-6">
            <a href="/profile" class="text-blue-500 hover:text-blue-800"
              >Profile</a
            >
          </li>
          <li class="mr-6">
            <a
              href="/"
              on:click={logout}
              class="text-blue-500 hover:text-blue-800">Logout</a
            >
          </li>
        {:else}
          <li class="mr-6">
            <a href="/login" class="text-blue-500 hover:text-blue-800">Login</a>
          </li>
        {/if}
      
    </ul>
  </div>
</nav>

<main class="bg-zinc-900 text-white h-screen">
  <div class="container m-auto py-10 h-full flex justify-center items-center ">
    <div>
      <slot />
    </div>
  </div>
</main>
