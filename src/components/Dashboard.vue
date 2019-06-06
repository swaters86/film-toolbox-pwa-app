<template>
    <div class="page">
        <h1 class="page-title">Welcome, {{displayName}}</h1>
        <div id="sign-in-status"></div>
        <div id="sign-in"></div>
        <pre id="account-details"></pre>
    </div>
</template>

<style scoped>
    .page {
        background: #efefef;
        padding: 10px;
    }
</style>

<script>
    import * as firebase from '../../node_modules/firebase';
    import * as firebaseui from '../../node_modules/firebaseui';

    export default {
        data: () => ({
            displayName: '', 
        }),
        mounted() {
             // Initialize the FirebaseUI Widget using Firebase.
            var ui = new firebaseui.auth.AuthUI(firebase.auth());

            if (ui.isPendingRedirect()) {
                ui.start('#firebaseui-auth-container', uiConfig);
            }

           var vm = this;
           function initData() {
               firebase.auth().onAuthStateChanged(function(user) {        
                    if (user) {
                        
                        user.getIdToken().then(function(accessToken) {
                            document.getElementById('sign-in-status').textContent = 'Signed in';
                            document.getElementById('sign-in').textContent = 'Sign out';
                            
                            vm.displayName  = user.displayName;
                        });
                    } else {
                        // User is signed out.
                        document.getElementById('sign-in-status').textContent = 'Signed out';
                        document.getElementById('sign-in').textContent = 'Sign in';
                        document.getElementById('account-details').textContent = 'null';
                    }
                }, function(error) {
                    console.log(error);
                });
           }

           initData();
        }
    }
</script>

