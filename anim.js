<h1 id="t" style="text-align:center;color:#FF4500;">Привет!</h1>
<script>
let s="Добро пожаловать на мой профиль!",i=0;
function p(){if(i<s.length)document.getElementById("t").innerHTML+=s[i++],setTimeout(p,100)}
p();
</script>
