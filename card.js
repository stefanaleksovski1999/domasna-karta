const body = document.getElementsByTagName('body')[0]
async function getData() {
    let users = []
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
  
    users = await response.json()
  
    } catch (err) {
     alert(err)
      users = []
     } finally {
      users.map (user => {
          console.log(user)
        const newdiv = document.createElement('div')
        const newh1 = document.createElement('h1')
        const newp = document.createElement('p')
        const newp1 = document.createElement('p')
        const newp2 = document.createElement('p')
        const newp3 = document.createElement('p')
        newp.innerText = user.email
        newh1.innerText = user.name
        newp1.innerText = (`Street: ${user.address.street}, suite: ${user.address.suite}`)
        newp2.innerText = (`Phone: ${user.phone}`)
        newp3.innerText = (`Company name: ${user.company.name}`)
        body.prepend(newdiv)

      
        newdiv.prepend(newh1)
        newdiv.append(newp)
        newdiv.append(newp1)
        newdiv.append(newp2)
        newdiv.append(newp3)

        newdiv.className = 'card'
        newh1.className = 'name'
         
     })
     }

    
}

getData()
