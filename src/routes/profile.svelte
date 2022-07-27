<script>
  import Profile from "./profile.svelte";
  import { isLoggedIn, user } from "../store.js";

  
</script>

<div class="bg-zinc-700 px-10 py-10 flex flex-col items-center gap-y-4 rounded">
  {#if $isLoggedIn}
    
    <img src={$user.photoURL} alt={$user.displayName} class=" w-20 h-20 rounded-full m-auto"/>
    <h3>{$user.displayName}</h3>
    <p>{$user.email}</p>
  {/if}
</div>
