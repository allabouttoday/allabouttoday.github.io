<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"></script>
<script> src="https://www.gstatic.com/firebasejs/8.8.0/firebase-database.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCRYbJAArVCe55PUEZZNYACgE1uhJMBBnI",
    authDomain: "allabouttoday-99116.firebaseapp.com",
    databaseURL: "https://allabouttoday-99116-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "allabouttoday-99116",
    storageBucket: "allabouttoday-99116.appspot.com",
    messagingSenderId: "304111767681",
    appId: "1:304111767681:web:3170b1cc621a193f4efd80",
    measurementId: "G-76GM885RMT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //Rootref is the whole realtime database.
  const rootRef=firebase.database().ref();
  //commentsRef is just the comments data in the database.
  const commentsRef= rootRef.child('comments');
  //list for click on submit.
  documents.getElementById('btnSubmitComment').addEventListener("click",function(){
    //Replace line breaks in comment with br tags.
    var newcomment= document.getElementById('txComment').value.replace(/\n/g,"<br>");
    //Define a new, keyed post.
    var newPostRef= commentsRef.push();
    //Fill the new keyed post with data.
    newPostRef.set({
      name: document.getElementById('tbName').value.trim(),
      comment: newcomment.trim(),
      frompage: location.pathname;
      when: firebase.database.ServerValue.TIMESTAMP
    });
  });
</script>
