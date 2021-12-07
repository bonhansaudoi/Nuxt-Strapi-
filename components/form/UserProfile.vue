 <template> 
  <div class="flex flex-col justify-center w-2/6"> 
    <div class=""> 
      <h2 class="text-center uppercase">user-profile</h2> 
      <div class="content card bg-white">
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.username }}
          </p>
          <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
          </p>
      </div>  
    </div>  
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // Strapi
  middleware: "auth",
  computed: {
    ...mapGetters(["loggedInUser"]),
  }
};
</script>
  