const init = () => {
    const array = [
        { name: 'John', age: 25, tiempo: 1 },
        { name: 'Jane', age: 22, tiempo: 2 },
        { name: 'Jim', age: 27, tiempo: 1 },
        { name: 'Jill', age: 24, tiempo: 2 },
        { name: 'Jack', age: 26, tiempo: 1 },
        { name: 'Jenny', age: 23, tiempo: 2 },
    ]
    
    array.forEach((item) => {
            document.getElementById('array').innerHTML +=
                `<div class="item border border-dark rounded p-2 m-2 persona position-relative">
                    <p>Name: ${item.name}</p>
                    <p>Age: ${item.age}</p>
                    <p class="position-absolute top-50 bottom-0 end-0 p-2">Tiempo: 
                        <span class="time badge bg-primary">${item.tiempo}</span>
                    </p>
                </div>`
            
    })

    document.querySelectorAll('.persona').forEach((item) => {
        item.draggable = true
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.innerHTML)
            document.querySelectorAll('#tabla td').forEach((td) => {
                td.addEventListener('dragover', (e) => {
                    e.preventDefault()
                })
                td.addEventListener('drop', (e) => {
                    e.preventDefault()
                    td.innerHTML = `
                    <div class="position-relative">
                        <button class="btn-delete btn btn-danger position-absolute top-0 end-0">X</button>
                    </div>
                    ${e.dataTransfer.getData('text/plain')}`

                    //buscar la clase time del item arrastrado
                    item.querySelector('.time').innerHTML =  parseInt(item.querySelector('.time').innerHTML) - 1

                    document.querySelectorAll('.btn-delete').forEach((item) => {
                        item.addEventListener('click', (e) => {
                            e.target.parentNode.parentNode.innerHTML = ''
                        })
                    })
                })
            })
        })
    })
}
init()