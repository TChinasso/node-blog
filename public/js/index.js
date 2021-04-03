document.querySelector('#addSlug').onclick = (event) => {
    event.preventDefault()
    let inputs = {
        name: document.getElementsByName('name'),
        slug: document.getElementsByName('slug')
    }

    if((!inputs.name[0].value)){
        inputs.name[0].classList.add('was-validated')
    }




    console.log(inputs)
    if(!inputs.name[0].value || !inputs.slug[0].value){
        event.preventDefault()
    }
}