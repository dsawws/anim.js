<canvas id="c" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;"></canvas>
<script>
let c=document.getElementById("c"),ctx=c.getContext("2d");
c.width=window.innerWidth;c.height=window.innerHeight;
let p=[];for(let i=0;i<100;i++)p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:2+Math.random()*3,s:Math.random()*2+1}));
function d(){ctx.fillStyle="rgba(0,0,0,0.2)";ctx.fillRect(0,0,c.width,c.height);for(let i of p){ctx.beginPath();ctx.arc(i.x,i.y,i.r,0,2*Math.PI);ctx.fillStyle="#FF4500";ctx.fill();i.y+=i.s;if(i.y>c.height)i.y=0;i.x+=Math.sin(i.y/10);}}setInterval(d,30);
</script>
