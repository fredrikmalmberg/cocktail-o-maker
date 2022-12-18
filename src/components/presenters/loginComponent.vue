<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      loginError: null
    }
  },
  computed: mapState({
    emailModel: state => state.emailModel,
    passwordModel: state => state.passwordModel,
    valid: state => state.valid,
    emailRules: state => state.emailRules,
    passwordRules: state => state.passwordRules
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Perform login logic
      }
    }
  }
}
</script>
