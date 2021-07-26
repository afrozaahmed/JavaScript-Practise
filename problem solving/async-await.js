const sleep = (i,ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

async function print() {
  for (let i = 0; i < 10; i++) {
    await sleep(i,Math.random()*1000).then(function(result){
      console.log(result)
    })
  }
}
print()

// 0 to 9 in a sequence