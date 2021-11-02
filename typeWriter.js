const sentence = "hello there from lighthouse labs"

let delay = 300

for (const  char of sentence ){
setTimeout(()=>{
process.stdout.write(char)

},delay) 
delay +=500
}
