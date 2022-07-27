<script>
	import { isLoggedIn, user } from '../store.js';
	import { auth } from '../firebase.js';
    import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
    import { goto } from "$app/navigation";
    

    

    const login = async ()=>{

        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);
            $user = res.user;
            $isLoggedIn= true;
            goto("/profile");
            console.log(res);
            
        } catch (error) {
            console.error(error);
        }

    }
</script>

<button on:click={login} class="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md text-white" >Login whit Google</button>